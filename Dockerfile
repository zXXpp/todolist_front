FROM node:latest as builder

WORKDIR /app
COPY package.json .
RUN npm install --registry=http://registry.npm.taobao.org

COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/build usr/share/nginx/html
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf
