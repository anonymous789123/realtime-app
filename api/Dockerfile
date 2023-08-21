# Development Stage
FROM node:18 AS development

# Specify Working directory inside the container
WORKDIR /sandr/src/app

# Copy package-lock.json & package.json from host to inside the container's working directory
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Bundle App Sources
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

# Production Stage
# Build another image named "production"
FROM node:18 AS production

# Set the NODE_ENV environment variable
ARG NODE_ENV_production
ENV NODE_ENV=${NODE_ENV_production}

# Set work directory inside the container
WORKDIR /sandr/src/app

# Copy the built files from the development stage
COPY --from=development /sandr/src/app/ .

EXPOSE 8080

# Run the application
CMD [ "node", "dist/main" ]
