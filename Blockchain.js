import Block from "./Block.js";

export default class Blockchain {
    
    constructor( { difficulty = 10 } ) {
        this.blockchain = [this.startGenesisBlock()]
        this.difficulty = difficulty;
    }

    startGenesisBlock() {
        return new Block(0, Date.now(), "Genesis Block in the Blockchain", "0" )
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }

    addNewBlock(newBlock) {
        // Add the previous hash to the new block as its previous hash, linking them together
        newBlock.precedingHash = this.obtainLatestBlock().hash
        // Compute the hash of the new block
            //  Without proof of work protection newBlock.hash = newBlock.computeHash()
        newBlock.proofOfWork(this.difficulty)
        // Push the new block onto the chain
        this.blockchain.push(newBlock)
    }

    validateIntegrity(){
        for(let i = 1; i < this.blockchain.length; i++){

            const currentBlock = this.blockchain[i];
            const precedingBlock= this.blockchain[i-1];

            // Can the current block's hash be recomputed?
            if(currentBlock.hash !== currentBlock.computeHash()){
                return false; // The block has been violated
            }
        
            // Does the current block's reference to the preceding block's hash match the preceding block's hash? 
            if(currentBlock.precedingHash !== precedingBlock.hash)
                return false; // The block has been violated
        }
        // If all blocks passed these two checks, the blockchain remains valid
        return true;
    }

}