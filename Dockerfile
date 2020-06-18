FROM node:12.2.0-alpine as build
WORKDIR /app
COPY ./frontend/package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY ./frontend /app
ENV REACT_APP_API_URL "https://isproyectofinal2020.herokuapp.com"
RUN npm run build

FROM node:alpine
COPY ./backend /app
COPY --from=build  /app/build /app/public
WORKDIR /app
RUN npm i --silent
CMD ["npm","run","start"]

