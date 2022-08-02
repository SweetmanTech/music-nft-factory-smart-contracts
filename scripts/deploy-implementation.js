const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Album = await hre.ethers.getContractFactory("Album");

  const implementation = await hre.upgrades.deployProxy(Album, [
    "Music NFT",
    "music",
    "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38",
  ]);

  await implementation.deployed();

  console.log("Album deployed to:", implementation.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
