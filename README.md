# MyCrypto Wallet 🦊💰

A simple Ethereum smart contract that functions as a **crypto wallet**.  
It allows the contract owner (or users, depending on setup) to **send ETH** securely to a specified recipient address.

---

## 📌 Features
- Store ETH inside the smart contract.
- Send ETH to any specified Ethereum address.
- Keep track of contract balance.
- Event logging for transparency on transfers.

---

## 📂 Project Structure
<br/>MyCryptoWallet/
<br/>│── contracts/
<br/>│ └── EthSend.sol
<br/>| └── Greeter.sol
<br/>│── scripts/
<br/>│ └── deployEthSend.js
<br/>│── test/
<br/>│── README.md


---

## ⚙️ Smart Contract Overview

### Contract: `EthSend.sol`

- **Functions**
  - `sendETH(address payable _to, uint256 _amount)` → Send ETH to a specified user.
  - `updateRecipient()` → View the wallet’s ETH balance.
  - `getBalance()` → View the wallet’s ETH balance.

- **Events** 
  - `Transfer(address indexed recipient, uint256 amount)`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Hardhat](https://hardhat.org/) or [Truffle](https://trufflesuite.com/)
- [MetaMask](https://metamask.io/) (for testing on a local/remote network)
- An Ethereum testnet account with test ETH (Goerli, Sepolia, etc.)

### Installation
`git clone https://github.com/yourusername/MyCryptoWallet.git`<br/>
`cd MyCryptoWallet`<br/>
`npm install`

### compile contract
`npx hardhat compile`

### Deploy contract
`npx hardhat run scripts/deployEthSend.js --network sepolia`

💻 Usage
### Send Ether
`await myCryptoWallet.sendETH("0xRecipientAddressHere", ethers.utils.parseEther("0.5"));`

### Check balance
`const balance = await myCryptoWallet.getBalance()`
`console.log("Wallet Balance:", ethers.utils.formatEther(balance))`

🧪 Testing
`npx hardhat test`

🔒 Security

* Only valid Ethereum addresses can receive ETH.
* Ensure private keys are stored securely when deploying.
* Always test thoroughly on testnets before mainnet deployment.

📜 License
This project is licensed under the MIT License – feel free to use and modify.

👨‍💻 Author

Built with ❤️ by Alexander Irabor
