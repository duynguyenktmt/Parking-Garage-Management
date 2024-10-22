# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk

# Set the working directory in the container
WORKDIR /workspace

# Install any additional tools you might need (e.g., Maven, Gradle)
RUN apt-get update && apt-get install -y \
    maven \
    gradle \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Expose port (optional, if you run a web application)
EXPOSE 8080
