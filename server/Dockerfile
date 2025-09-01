# server/Dockerfile

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose port
EXPOSE 5000

# Start server from built JS
CMD ["npm", "start"]
