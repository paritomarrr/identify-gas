require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

/*
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config()
module.exports = {
  solidity: "0.8.4",
  gasReporter: {
    currency: 'USD',
    token: 'ETH',
    enabled: (process.env.REPORT_GAS) ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  }
};
