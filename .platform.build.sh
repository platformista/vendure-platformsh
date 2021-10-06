#!/usr/bin/env bash

cd vendure
npm install
npm run build
ln -s data/vendure.sqlite-shm vendure.sqlite-shm
ln -s data/vendure.sqlite-wal vendure.sqlite-wal
rm vendure/node_modules/@vendure/admin-ui-plugin/lib/admin-ui/vendure-ui-config.json
ln -s config/vendure-ui-config.json vendure/node_modules/@vendure/admin-ui-plugin/lib/admin-ui/vendure-ui-config.json
