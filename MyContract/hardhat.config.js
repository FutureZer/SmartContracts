/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = 'rV23abARZaF-iLptXe3Jf7LKS9wEx6rC';
const GOERLI_PRIVATE_KEY = 'bead10c6e6c869ad14897df0aef2d00f5cda12e064b7066ccbe8792667f27224';

module.exports = {
  solidity: "0.5.0",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
