#!/usr/bin/sh
cd C:/Users/Kamil/Desktop/PROJECTS/ravintola-main/backend
mvn clean install -DskipTests
scp -P 10240 target/ravintolaAPI-0.0.1-SNAPSHOT.jar root@srv23.mikr.us:~/apps/ravintola
ssh root@srv23.mikr.us -p 10240 'sudo systemctl restart ravintola.service'
