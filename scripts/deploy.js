
const hre = require("hardhat");

async function main() {
  const Cryptomayne = await hre.ethers.getContractFactory("cryptomayne");
 const cryptomayne = await Cryptomayne.deploy();
 await cryptomayne.deployed();
 console.log("CryptoMayne deployed to:", cryptomayne.address);
 const currentTimestampInSeconds = Math.round(Date.now() / 1000);
 const unlockTime = currentTimestampInSeconds + 60;

 const lockedAmount = hre.ethers.parseEther("0.001");

 const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
   value: lockedAmount,
 });

 await lock.waitForDeployment();

 console.log(
   `Lock with ${ethers.formatEther(
     lockedAmount
   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
 );

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
