#/bin/bash
cd ./frontend && \
npm run build && \
rm -r ../backend/public/* && \
cp -r build/* ../backend/public