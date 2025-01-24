#
# Build
#
FROM maven:3.9.6 AS build
COPY src /MyBackendApp/src
COPY pom.xml /MyBackendApp
RUN mvn -B -f /MyBackendApp/pom.xml clean package
#
# Package stage
#
FROM nginx:latest
COPY --from=build /MyBackendApp/target/projetjavafinal-1.0-SNAPSHOT.jar /usr/local/lib/projetjavafinal.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/projetjavafinal.jar"]