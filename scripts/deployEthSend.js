// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // Compile contracts before deployment
  await hre.run("compile");

  // Get contract factory
  const EthSend = await hre.ethers.getContractFactory("EthSend");

  // Replace with the recipient address you want at deployment
  const recipient = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";

  // Deploy contract with recipient as constructor argument
  const ethSend = await EthSend.deploy(recipient);

  await ethSend.deployed();

  console.log(`EthSend deployed to: ${ethSend.address}`);
}

// Run script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
