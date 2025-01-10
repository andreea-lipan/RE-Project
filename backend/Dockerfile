# Use Maven to build the application
FROM maven:3.8.5-openjdk-17 as build

# Set working directory in the container
WORKDIR /app

# Copy Maven configuration and resolve dependencies
COPY pom.xml ./
RUN mvn dependency:go-offline

# Copy the application source and build it
COPY src ./src
RUN mvn package -DskipTests

# Use a lightweight OpenJDK image to run the application
FROM openjdk:17-jdk-slim

# Copy the built JAR file
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
