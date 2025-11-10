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
  - `updateRecipient()` → update recipient address ETH.
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
`const balance = await myCryptoWallet.getBalance()`<br/>
`console.log("Wallet Balance:", ethers.utils.formatEther(balance))`<br/>

### 🧪 Testing <br/>
`npx hardhat test`

### 🔒 Security

* Only valid Ethereum addresses can receive ETH.
* Ensure private keys are stored securely when deploying.
* Always test thoroughly on testnets before mainnet deployment.

### 📜 License <br/>
This project is licensed under the MIT License – feel free to use and modify.

### 👨‍💻 Author

Built with ❤️ by Alexander Irabor


# 🧠 AI Debugger System Architecture

Below is a clean, rendered architecture diagram showing how each component interacts within your AI-driven debugging platform.

---

```mermaid
graph TD

%% Frontend Layer
A[Frontend: Next.js + React (TypeScript)] -->|API Requests| B[Backend API: Node.js (Express/NestJS)]
A -->|Chat Interface| G[LLM Response Display]
A -->|Log Upload| B

%% Backend Layer
B -->|Store Logs| C[(Database: MongoDB / PostgreSQL)]
B -->|Embed Logs| D[LangChain Pipeline]
B -->|Query Logs| D
B -->|Retrieve Similar Logs| E[(Vector DB: Pinecone / Weaviate / Chroma)]

%% LangChain Pipeline
D -->|Create Embeddings| E
E -->|Return Similar Logs| D
D -->|Send Context + Query| F[LLM (GPT-4 / Claude)]
F -->|Return Analysis & Fix Suggestions| D
D -->|Send AI Result| B

%% Data Flow Connections
C -->|Retrieve Historical Logs| B
B -->|Send Results| A

%% Hosting & Infra
A -->|Deployed on| H[Vercel]
B -->|Hosted on| I[AWS Lambda / EC2]
E -->|Managed Cloud Service| J[Pinecone Cloud]
C -->|Cloud Database| K[MongoDB Atlas / AWS RDS]

%% User Interaction
subgraph Developer User
U[Developer]
U -->|Uploads Logs / Stack Traces| A
U -->|Asks Questions (e.g. Why did API X fail?)| A
U -->|Views Root Cause & Fix Suggestions| A
end

classDef frontend fill:#61dafb,stroke:#333,stroke-width:1px,color:#000;
classDef backend fill:#ffd54f,stroke:#333,stroke-width:1px,color:#000;
classDef ai fill:#c8e6c9,stroke:#333,stroke-width:1px,color:#000;
classDef data fill:#bbdefb,stroke:#333,stroke-width:1px,color:#000;
classDef infra fill:#ef9a9a,stroke:#333,stroke-width:1px,color:#000;
classDef user fill:#d1c4e9,stroke:#333,stroke-width:1px,color:#000;

class A,G frontend;
class B backend;
class D,F ai;
class C,E data;
class H,I,J,K infra;
class U user;
```

---

✅ **Usage Tip:** Paste this Markdown directly into your `README.md` or documentation. GitHub and most markdown renderers will automatically visualize the Mermaid diagram.

