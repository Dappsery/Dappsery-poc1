#!/bin/bash
geth --networkid=45456 --datadir=~/.ethereum/DevChain/ --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --mine --unlock=e7d12aa6229e381604851f45e0fc95b7cf2ee955 --verbosity=5 --maxpeers=0 --minerthreads="8"
