# Building Stage: Building the react application
FROM node:12.4.0-alpine as build 

## Configure the main working directory inside the docker image
WORKDIR /app

## Copy the package.json as well as the package-lock.json as well
## and install the dependencies. 
COPY package.json package-lock.json ./
RUN npm install

## Copy the main application
COPY . ./

## Arguments
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

## Build the application
RUN npm run build


# Serving Stage: Serve the application
FROM nginx:1.17.0-alpine

## Copy the react build from first stage
COPY --from=build /app/build /var/www

## Copy our custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

## Expose 80 to the docker host so we can access from outside
EXPOSE 80


ENTRYPOINT ["nginx", "-g", "daemon off;"]