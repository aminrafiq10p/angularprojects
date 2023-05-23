FROM node:16-alpine AS build
WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps --omit-deps
COPY . /app
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/angular-todo/ /usr/share/nginx/html
EXPOSE 80
