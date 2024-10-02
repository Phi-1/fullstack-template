FROM node:18.20.4

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY dist/frontend/*.html .
COPY dist/backend/* .
RUN npm install --omit=dev

WORKDIR /app/public
COPY public/* .
COPY dist/frontend/assets/* . 

ENV SERVER_PORT=8162

CMD [ "node", "main.js" ]

# TODO executable name, port forwarding, environment vars