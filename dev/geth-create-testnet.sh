#!/bin/bash
geth --networkid=64840 --maxpeers=0 --datadir=~/.ethereum/DevChain/ --mine --minerthreads 1 --genesis dev-genesis.json
