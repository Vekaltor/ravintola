#!/usr/bin/sh
cd C:/Users/Kamil/Desktop/ravintolaAPI-main/ravintola-app
mvn clean install -DskipTests
scp -P 10186 target/ravintolaAPI-0.0.1-SNAPSHOT.jar deploy@srv16.mikr.us:~/apps/ravintola
ssh deploy@srv16.mikr.us -p 10186 'sudo systemctl restart ravintola.service'