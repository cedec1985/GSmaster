FROM node:latest AS builder

WORKDIR /MyApp
COPY . .
RUN npm install && \
    npm run build

FROM nginx:latest
COPY --from=builder /MyApp/* /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]