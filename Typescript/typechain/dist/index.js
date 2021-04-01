"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "sflehfi", "", "Hiyo~", 123456);
let blockchaine = [genesisBlock];
blockchaine.push(new Block(1, "dhfiefhi", "sflehfi", "Long Long stick", 23231));
console.log(blockchaine);
//# sourceMappingURL=index.js.map