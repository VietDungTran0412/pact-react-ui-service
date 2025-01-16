# Base image for build purpose
FROM node:22-alpine AS build
# Copy the package.json and package-lock.json
COPY package*.json .
# Install all dependencies
RUN npm install --save
# Copy the source
COPY . .
# Build the project
RUN npm run build

# Build the image
FROM nginx:stable
# Set the working directory
WORKDIR /tmp/usr
# Copy the build package
COPY --from=build build pact-ui
# Copy the nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
# Add maintainer
LABEL author="vietdung13x3"
# Expose the port
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]



