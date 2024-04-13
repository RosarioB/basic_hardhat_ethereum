# basic_hardhat_ethereum
Basic project to compile test and deploy smart contracts on Ethereum with Hardhat. This is also the source code of this [Youtube video](https://www.youtube.com/watch?v=gCFqxdOliTQ).

1. Clone the repository
2. In the project root create a file .env and add:
   
    `PRIVATE_KEY="your_private_key"`
   
    `INFURA_SEPOLIA_ENDPOINT="your_infura_sepolia_api_key"`
4.  Install the project dependencies: `npm install` or `yarn install`
5.  Compile the contract: `npx hardhat compile`
6.  Test the contract: `npx hardhat test`
7.  Deploy the contract: `npx hardhat run scripts/deploy.ts --network sepolia`
