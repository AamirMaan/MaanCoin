const { Blockchain, Transactions } = require('./blockchain');

let maanCoin = new Blockchain();
maanCoin.createTransaction(new Transactions('address1', 'address2', 100));

console.log('Starting the miner');
maanCoin.minePendingTransactions('meraAddress');

maanCoin.createTransaction(new Transactions('address2', 'address1', 50));
maanCoin.minePendingTransactions('meraAddress');

console.log(
  '\n Balance of meraAddress',
  maanCoin.getBalanceOfAddress('meraAddress')
);
console.log('\n Balance of address1', maanCoin.getBalanceOfAddress('address1'));
console.log('\n Balance of address2', maanCoin.getBalanceOfAddress('address2'));
