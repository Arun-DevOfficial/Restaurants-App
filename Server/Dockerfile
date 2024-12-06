# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /Server

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port (update if your app uses a different port)
EXPOSE 8080

# Command to start the application
CMD ["npm", "start"]
