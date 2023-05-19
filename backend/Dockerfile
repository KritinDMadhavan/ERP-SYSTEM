FROM python:3.10.6-slim

COPY . /app
WORKDIR /app

# Place within the otp folder is standard practice for additional installs
RUN python3 -m venv /opt/venv

# Install requirements after upgrade pip
# entrypoint.sh is meant to run the app without activating the venv
RUN /opt/venv/bin/pip install pip --upgrade && \
    /opt/venv/bin/pip install -r requirements.txt && \
    chmod +x entrypoint.sh

CMD ["/app/entrypoint.sh"]