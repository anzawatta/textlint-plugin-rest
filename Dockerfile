FROM debian:stretch-slim

RUN mkdir /docs

RUN apt update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - \
    && apt-get install -y nodejs

RUN npm install -g textlint
RUN apt-get install -y python3 python3-pip
RUN pip3 install docutils pytest
# git clone https://github.com/jimo1001/docutils-ast-writer.git
# pip3 install -e ./docutils-ast-writer
# npm install .

WORKDIR /docs

CMD ["bash"]
