# ETH Market price comparison
Small webdriver IO script used to compare ETH prices on separate market platforms
## Requirements



```bash
- Install Node.js v12.16.1 or higher 
- Install/update to the latest version of Chrome (v100)
- 'Npm install' to install the required packages
```

## Running tests

```Tests
In the Root directory of the repository

# Run command:
- npm run wdio

```
## Details
- Should the current ETH market value on Aave markets match the Etharscan market pool then the test will pass.
- Aave market pool lists the value to two decimal places and the Etharscan lists the full value, therefore both values are collected as strings and formatted for comparison purposes
- Failures will occur when there's a mismatch in values which can occur due to delays in reflecting market fluctuations on both markets and can also occur to delayed requests made between both pools. The test begins by submitting a request to both pools in different tabs before asserting their values, to limit the possibility of getting out-of-dates values.

## Results/Report

You can use the allure reporting tool to generate reports once the tests have concluded by running the command :
```command
- allure generate allure-reports && allure open
