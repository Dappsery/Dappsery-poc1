Creating a Testnet
==================

This directory contains development tools to create a testnet for use with the lottery system. Your testnet allows you to test all of the functionality of the lottery system without spending any real money. Follow the steps below to set up your personal testnet.

1. Open a console and type the following. Enter your password at the prompt, then you'll see your new address for step 2. It's your new coinbase. Change the network ID and/or data directory to your liking.

`geth --networkid=64841 --datadir=~/.ethereum/DevChain/ account new`

2. Copy the address from step 1 into the `dev-genesis.json` file for the `alloc` object.

3. Edit the `geth-create-testnet.sh` file to use the same newtork ID and data directory as in step one, then run the script in a console window. Accept the agreement, then let the mining continue for at least 5 blocks. At that point you'll be rich. :) The Geth mining process may take several minutes before it starts showing anything on your screen. I don't know why it's like that, though it's normal for what we need.

4. Open your settings.json file in the `resources/app` directory for the lottery system. Change your `dataDir` and `networkId` to match the parameters you used in this tutorial.

5. Launch the lottery system and proceed to testing.


Using Your Testnet
==================

As you're using a testnet, you will need to add your contract to the testnet, maintain a couple files, and of course mine all of your transactions into your blockchain. Below are the steps to do so.

1. Run the `geth-miner.sh` file to start mining on your blockchain. Leave that open in the background. (Remember to set your network ID and data directory in the file!)

2. Launch the lottery app, log in, and open the command console. (Ctrl+Shift+i)

3. In the console, type `dev.createContract('Lotto', 4.5)` to add your contract to the blockchain. "Lotto" references the `contracts/Lotto.sol` file, and 4.5 is the gas multiplier. The script will estimate the total gas cost to add your contract to the blockchain, and it will multiply that value by your multiplier to calculate the total gas sent with the transaction. After you run the command, **DO NOT** close the Lotto software! Once you've finished mining your contract into the blockchain, the script will give you the address of your new contract. You'll need that in a bit. While you wait, go to the next step.

4. Now type `dev.getAbi('Lotto')` to get the ABI code for your lotto. Copy the code, and paste it into your `contracts/Lotto.abi` file.

5. By now the script should have reported your contract's address. Copy that address and paste it into the `contracts/Lotto.addr` file.

6. Congratulations! You've won. Oh, wait, that's what ancient spam says. :) I meant to say, congratulations, you've won. Erm... Congratulations, you now have your contract on the blockchain. Use it as you see fit.


Tips for Speed
==============

1. After a while of using your testnet, the network difficulty will increase, and you'll notice a significant slowdown. Be sure to delete your data directory when that happens, recreate your dummy coinbase, and follow this tutorial again. You must delete the data directory you've set above, as well as your ~/.ethash directory. (.ethash is where your blockchain is stored.)
