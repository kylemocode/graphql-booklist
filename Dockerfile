FROM 11.15.0-stretch-slim

WORKDIR  /server/app.js

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]

# docker build -t mycontainer .

