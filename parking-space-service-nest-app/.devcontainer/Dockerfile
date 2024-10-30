# .devcontainer/Dockerfile
FROM node:16

# Set the working directory
WORKDIR /workspace

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3560

# Command to run the application
CMD ["npm", "run", "start:dev"]