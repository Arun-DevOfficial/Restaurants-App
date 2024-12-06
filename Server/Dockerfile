# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port (update if your app uses a different port)
EXPOSE 8080

# Set the default command to run your application
CMD ["npm", "start"]
