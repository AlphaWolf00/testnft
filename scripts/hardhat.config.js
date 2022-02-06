require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env"});


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;
 //How do we define which test network to deploy to
 //How do we define which account to deploy to
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY_URL}",
      accounts: { PRIVATE_KEY: PRIVATE_KEY },
    },
  },
};
