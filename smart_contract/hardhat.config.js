require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/4jOwFMCNN3V2dl6PRB7nK-4k2F_skmdp",
      accounts: [
        "a65bd8329ef173105cfbb66a71601229788caed2092b7329b1cd9bf28765e7ae",
      ],
    },
  },
};
