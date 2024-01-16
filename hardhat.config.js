require("@nomicfoundation/hardhat-toolbox");
const dotenv = require('dotenv');
dotenv.config();



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      },
      {
        version: "0.8.20"
      }
    ]
  },
  networks: {
    sepolia: {
      url: process.env.REACTAPP_RPC_URL,
      accounts: [process.env.REACTAPP_PRIVATEKEYS]
    },
  },
  etherscan: {
    apiKey: process.env.REACTAPP_ETHERSCAN_API_KEY
  },
};