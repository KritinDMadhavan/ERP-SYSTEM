$HOST_IP_ADDRESS = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi").IPAddress
$INIT="EXPO_BE_URL=http://"
$PORT=":8000"
echo "$INIT$HOST_IP_ADDRESS$PORT" > .env