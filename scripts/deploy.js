const hre = require("hardhat");
const fs = require('fs');

async function main() {
    const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const simpletoken = await SimpleToken.deploy("Dablu Prasad","DP");

  await simpletoken.deployed();

  console.log("simpletoken deployed to:", simpletoken.address);

    let config = `
export const nftaddress = "${simpletoken.address}"
`

let data = JSON.stringify(config)
fs.writeFileSync('./src/config.js', JSON.parse(data))


}
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
   
  