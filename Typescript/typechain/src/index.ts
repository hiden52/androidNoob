class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "sflehfi", "", "Hiyo~", 123456);

let blockchaine: [Block] = [genesisBlock];
blockchaine.push(new Block(1, "dhfiefhi", "sflehfi", "Long Long stick" , 23231));

console.log(blockchaine);

export { }