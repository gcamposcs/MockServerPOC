#!/bin/bash
find ./mocks/* -name '*.yml' | xargs -I{} sh -c 'cat {}; echo ''' > .init.yml && stubby -d .init.yml  -s 8882 -t 7443 -a 8889
