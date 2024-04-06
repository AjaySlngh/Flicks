FROM node:lts AS development

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm ci
RUN npm install -g serve
COPY . /code
RUN npm run build



ENV CI=true
ENV PORT=3000

CMD [ "serve", "-s", "build"]

