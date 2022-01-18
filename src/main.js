const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(
  '93f27d6ef4d1e58bf05103eb6284661febe4939d1a7cc4624adf0dad0641f83b'
);

const myWalletAddress = myKey.getPublic('hex');

let maanCoin = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
maanCoin.addTransaction(tx1);

// Mine block
maanCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
maanCoin.addTransaction(tx2);

maanCoin.minePendingTransactions(myWalletAddress);

console.log(
  '\n Balance of meraAddress',
  maanCoin.getBalanceOfAddress(myWalletAddress)
);

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', maanCoin.isChainValid() ? 'Yes' : 'No');
