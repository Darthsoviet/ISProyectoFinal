#/bin/bash
cd ../frontend && \
yarn add global react-scripts --silent &&\
yarn build && \
rm -r ../backend/public/* && \
cp -r build/* ../backend/public