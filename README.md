# seed-login-app
An application which provides authentication facility , with email, Facebook, gmail, twitter, LinkedIn and GitHub

# To create key.pem and cert.pem
write this command
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem