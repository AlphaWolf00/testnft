const { ethers } = require("hardhat");



async function main() {
  console.log(ethers);
//1. Tell the script we want to deploy our contract
  const contract = await ethers.getContractFactory("NFTee");
//2. Deploy it
  const deployedContract = await contract.deploy();
//2.1 Wait for deployment to finish
  await deployedContract.deployed();
//3. Print address of deployed contract
  console.log("NFT deployed contract to: ", deployedContract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
