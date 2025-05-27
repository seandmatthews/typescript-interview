FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Change to use dev for development or preview for production
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
