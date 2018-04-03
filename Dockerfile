FROM node:8

RUN mkdir /app
WORKDIR /app
COPY . .

RUN yarn global add serve
RUN yarn install
RUN yarn build

CMD serve -s build
