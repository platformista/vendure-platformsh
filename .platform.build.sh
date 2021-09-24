#!/usr/bin/env bash

npm install
npm run build
ln -s data/vendure.sqlite-shm vendure.sqlite-shm
ln -s data/vendure.sqlite-wal vendure.sqlite-wal
