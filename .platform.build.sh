#!/usr/bin/env bash

cd vendure
npm install
npm run build
ln -s data/vendure.sqlite-shm vendure.sqlite-shm
ln -s data/vendure.sqlite-wal vendure.sqlite-wal
