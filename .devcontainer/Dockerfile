# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk

# Set the working directory in the container
WORKDIR /workspace

# Install any additional tools you might need (e.g., Maven, Gradle)
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest && \
    npm install -g npx && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Expose port (optional, if you run a web application)
EXPOSE 8080

# Update the PATH environment variable to include the Node.js and npm executables
ENV PATH=$PATH:/usr/local/bin