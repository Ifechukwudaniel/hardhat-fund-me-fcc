const { getNamedAccounts, ethers } = require("hardhat")
async function main() {
    const { deployer } = getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Withdrawing Contract")
    const transactionReceipt = await fundMe.withdraw()
    await transactionReceipt.wait(1)
    console.log("Withdraw from contract ....")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(error)
    })
