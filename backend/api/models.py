from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, Group
import uuid


class user_manager(BaseUserManager):
    def create_user(self, phone, password=None):
        if not phone:
            raise ValueError('Users must have a phone number')

        user = self.model(
            uuid=uuid.uuid4(),
            phone=phone,
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self, phone, password):
        user = self.create_user(
            phone=phone,
            password=password,
        )
        
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class user(AbstractBaseUser):
    # 320 Characters is the max len of a email.
    
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    phone = models.CharField(max_length=15, unique=True, null=False)
    email = models.EmailField(max_length=320, default='')
    name = models.CharField(max_length=150, default='')
    designation = models.CharField(max_length=250, default='')
    
    # passWrongCount = models.IntegerField(default=0)
    status = models.CharField(default='active', max_length=10)
    
    # date_joined = models.DateTimeField(auto_now_add=True)
    # last_login = models.DateTimeField(auto_now=True)

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group)

    USERNAME_FIELD = 'phone'

    objects = user_manager()

    def __str__(self):
        return self.phone
    
    # For checking permissions. to keep it simple all STAFF have ALL permissons
    def has_perm(self, perm, obj=None):
        return self.is_staff

    # Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
    def has_module_perms(self, app_label):
        return True

class company(models.Model):

    name = models.CharField(max_length=50)
    
    def _str_(self):
        return f'{self.name}'

class department(models.Model):
    
    name = models.CharField(max_length=100, primary_key=True)
    head = models.CharField(max_length=100)
    description = models.CharField(max_length=256)
    type = models.CharField(max_length=20, choices=[('internal', 'internal'), ('subcontractor', 'subcontractor')])
    
    def _str_(self):
        return str(self.name)
    
    
class product(models.Model):
    
    part_num = models.CharField(max_length=100, primary_key=True)
    description = models.CharField(max_length=256)
    material_group = models.CharField(max_length=100)
    company = models.ForeignKey(company, on_delete=models.CASCADE)
    
    def _str_(self):
        return f'{self.company}-{self.part_num}'


class benchmark(models.Model):
    
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    department = models.ForeignKey(department, on_delete=models.CASCADE)
    duration = models.DurationField()

    def _str_(self):
        return f'{self.product}-{self.department}'


class open_po(models.Model):
    
    iwo = models.CharField(max_length=100, primary_key=True)
    open_quantity = models.IntegerField()
    closed_quantity = models.IntegerField()
    qc_comments = models.CharField(max_length=200)
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    
    def _str_(self):
        return f'{self.iwo}'


class order_status(models.Model):

    order = models.ForeignKey(open_po, on_delete=models.CASCADE)
    department = models.ForeignKey(department, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    scheduled = models.DateTimeField()
    completed = models.DateTimeField(null=True, blank=True)
    cost = models.FloatField(null=True, blank=True)
    
    def __str__(self):
        return f'{self.order}-{self.department}'


class inventory(models.Model):

    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=512)
    quantity = models.IntegerField()
    
    def __str__(self):
        return f'{self.name}'


class requirements(models.Model):

    order = models.ForeignKey(open_po, on_delete=models.CASCADE)
    inventory = models.ForeignKey(inventory, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    
    def __str__(self):
        return f'{self.order}-{self.inventory}'


class costing(models.Model):

    date = models.DateField()
    type = models.CharField(max_length=128)
    amount = models.FloatField()
    comments = models.CharField(max_length=256)
    
    
    def __str__(self):
        return f'{self.type}'


class ipo(models.Model):

    inventory = models.ForeignKey(inventory, on_delete=models.CASCADE)
    status = models.BooleanField()
    quantity = models.IntegerField()
    
    def __str__(self):
        return f'{self.inventory}-{self.status}'
