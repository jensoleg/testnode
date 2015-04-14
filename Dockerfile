FROM node:0.10-onbuild
# replace this with your application's default port
EXPOSE 8888

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install

EXPOSE  8080
CMD ["node", "/src/app.js"]
