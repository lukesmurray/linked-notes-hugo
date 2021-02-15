#!/bin/bash

set -ex

# set the pandoc version
PANDOC_VERSION="2.11.4"

INSTALLED_PANDOC_VERSION=$(pandoc -v | head -1 | cut -f 2 -d " ")

if [ $INSTALLED_PANDOC_VERSION != $PANDOC_VERSION ]; then
    # download pandoc
    wget https://github.com/jgm/pandoc/releases/download/$PANDOC_VERSION/pandoc-$PANDOC_VERSION-linux-amd64.tar.gz && \
        tar -xvzf pandoc-$PANDOC_VERSION-linux-amd64.tar.gz;

    # set the path so the pandoc version is used
    PATH=$(pwd)/pandoc-$PANDOC_VERSION/bin:$PATH;
    export PATH;
fi

# check the pandoc version
pandoc -v

# build hugo
./build.sh