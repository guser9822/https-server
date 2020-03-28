-- Bootstrap -- 

1) mkdir src/certificates
2) openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt, answer all the question as you want.
3) npm run start
4) make a GET request toward https://localhost:3958/secure-api/hello/