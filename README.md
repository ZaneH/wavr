<img align="right" src="https://i.imgur.com/bvcSmes.png" height="28px" width="auto" />

# Wavr
A free marketplace for creators

This project wasn't intended to be open-sourced, but during beta, I found a competitor that was lightyears ahead of Wavr (https://matter.online/).

## Contents
1. `./packages/web` - React web app
2. `./packages/backend` - Prisma + Node.js backend
3. `./packages/common` - Shared contents between front and backend

## Run locally
1. `docker-compose up -d postgres-db` in `./` to start DB
2. `yarn prisma migrate up --experimental` in `./packages/backend` to apply pending migrations
3. `yarn generate` in `./packages/backend` to generate @prisma/client
4. `yarn dev` in `./packages/backend` to start backend
5. `yarn start` in `./packages/web` to start frontend

## Seed
1. Import `./db.sql` with `psql` to a load a DB snapshot

## Steps to deploy
1. Upload to ECR
2. Create a new Task Definition
3. Update the service (no changes necessary)

## Preview
<img src="https://i.imgur.com/ztQTRBV.png" />
