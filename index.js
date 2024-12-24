const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

// Contract Address
const contractAddress = '0x8fc4a25188a46fb28bd7806c1ca2f987b88851f1';

// Standard ERC-20 ABI
const contractABI = [
  {
    "constant": true,
    "inputs": [{ "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "name": "", "type": "uint256" }],
    "type": "function"
  },
];

// Wallet Address to Check Token Balance
const walletAddress = '0x180981A4EF9A4e9B8E814C38984826bcec8ae702'; // Replace with your wallet address

// Create Contract Instance
const craxToken = new web3.eth.Contract(contractABI, contractAddress);

// Fetch Wallet Balance
async function getWalletBalance() {
    try {
        const balance = await craxToken.methods.balanceOf(walletAddress).call();
        const decimals = await craxToken.methods.decimals().call();
        console.log(`Wallet Balance in Smallest Unit: ${balance}`);
        console.log(`Wallet Balance in CRAX: ${balance / (10 ** decimals)}`);
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
    }
}

// Run the Test
getWalletBalance();
