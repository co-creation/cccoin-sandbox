import SHA256 from "crypto-js/sha256.js";

export default class Block {

    constructor( { index, timestamp, data, precedingHash = " " } ) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash()
        this.nonce = 0;
    }

    computeHash() {
        const hash = SHA256(
            this.index + 
            this.precedingHash + 
            this.timestamp + 
            JSON.stringify(this.data) + 
            this.nonce
        )
        return hash.toString()
    }

    proofOfWork(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++
            this.hash = this.computeHash()
        }

        console.log("Proof Of Work Passed for Block: ", this.hash)
    }
    
}