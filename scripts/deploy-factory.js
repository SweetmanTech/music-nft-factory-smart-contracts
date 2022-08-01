const hre = require("hardhat");

async function main() {
  const NFTFactory = await hre.ethers.getContractFactory("NFTFactory");
  // MUMBAI
  const musicNftImplementation = "0x807d90338744A78E8Fc51F0b1b00a30cF81D016a";

  const factory = await NFTFactory.deploy(musicNftImplementation);

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
