const hre = require("hardhat");

async function main() {
  const NFTFactory = await hre.ethers.getContractFactory("NFTFactory");
  // // RINKEBY
  const mintSongsImplementation = "0x2290FD692Ecf93f0B7BdA8f295c95270114ddB0f";
  const zoraERC721TransferHelper = "0x029AA5a949C9C90916729D50537062cb73b5Ac92";
  const zoraReserveAuctionFindersEth =
    "0x1b5A56DEa3d9760c6b14B709B9cf0ef9AaCD2730";

  // ROPSTEN
  // const mintSongsImplementation = "0x8Ae36b1459678f234C9d9C2fe383246909982EEf";

  const factory = await NFTFactory.deploy(
    mintSongsImplementation,
    zoraERC721TransferHelper,
    zoraReserveAuctionFindersEth
  );

  await factory.deployed();

  console.log("NFTFactory deployed to:", factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
