require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {},
    ropsten: {
      url: process.env.ROPSTEN_RPC,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY,
    },
  },
};
