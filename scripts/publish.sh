#!/usr/bin/env bash

git push --follow-tags origin main
npm run build
npm publish --access=public