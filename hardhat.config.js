/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;

module.exports = {
  solidity: {
    version: "0.8.8",
   },
  networks: {
    sepolia: {
      url: endpoint,
          accounts: [`0x${privateKey}`]
    }
  }
}
