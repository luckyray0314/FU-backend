FROM node:18-bullseye-slim AS build

WORKDIR /home/cooldev/vallentuna/production

RUN chown node:node /home/cooldev/vallentuna/production

USER node

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

FROM build AS dependencies

RUN npm prune --omit=dev

FROM gcr.io/distroless/nodejs:18 AS app

ARG NODE_ENV="production" PORT=8000

ENV NODE_ENV=${NODE_ENV} PORT=${PORT}

WORKDIR /srv/app

COPY --from=dependencies /home/cooldev/vallentuna/production/node_modules ./node_modules
COPY --from=build /home/cooldev/vallentuna/production/dist ./

EXPOSE ${PORT}

CMD ["/srv/app/main.js"]
