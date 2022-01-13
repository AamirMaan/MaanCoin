const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock() {
    return new Block(0, '1/1/2022', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push[newBlock];
  }
}

let savejeeCoin = new Blockchain();
savejeeCoin.addBlock(new Block(1, '1/2/2022', { amount: 4 }));
savejeeCoin.addBlock(new Block(2, '1/2/2022', { amount: 4 }));
savejeeCoin.addBlock(new Block(3, '1/2/2022', { amount: 4 }));
