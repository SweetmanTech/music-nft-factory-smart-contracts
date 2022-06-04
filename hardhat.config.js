require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {},
    matic: {
      url: process.env.MATIC_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimismKovan: {
      url: process.env.OPTIMISM_KOVAN_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    arbitrumRinkeby: {
      url: process.env.ARBITRUM_RINKEBY_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.GOERLI_ETHERSCAN_API,
      optimisticKovan: process.env.OPTIMISM_ETHERSCAN_API,
      polygon: process.env.POLYGON_ETHERSCAN_API,
      polygonMumbai: process.env.POLYGON_ETHERSCAN_API,
      arbitrumTestnet: process.env.ARBITRUM_ETHERSCAN_API,
    },
  },
};
