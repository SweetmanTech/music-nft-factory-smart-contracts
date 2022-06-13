// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MintSongs721 = await hre.ethers.getContractFactory("ETH_ERC721");
  // // RINKEBY
  // const zoraERC721TransferHelper = "0x029AA5a949C9C90916729D50537062cb73b5Ac92";
  // const zoraReserveAuctionFindersEth =
  //   "0x1b5A56DEa3d9760c6b14B709B9cf0ef9AaCD2730";

  // ROPSTEN
  const zoraERC721TransferHelper = "0x0afB6A47C303f85c5A6e0DC6c9b4c2001E6987ED";
  const zoraReserveAuctionFindersEth =
    "0xbfF7B9C643bDE6fDb43b4f7c60Ea29C31D4621Df";

  const implementation = await hre.upgrades.deployProxy(MintSongs721, [
    "Mint Songs V2",
    "MS_V2",
    zoraERC721TransferHelper,
    zoraReserveAuctionFindersEth,
  ]);

  await implementation.deployed();

  console.log("MintSongs721 deployed to:", implementation.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
