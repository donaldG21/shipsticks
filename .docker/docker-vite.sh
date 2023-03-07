#!/bin/bash
yarn install
vite build --clear --mode=development
exec vite dev
