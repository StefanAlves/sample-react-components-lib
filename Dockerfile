FROM node:10.10-alpine

COPY . /app

WORKDIR /app
RUN yarn config set strict-ssl false && yarn

CMD ["yarn", "storybook"]