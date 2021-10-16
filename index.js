import beautify from "json-beautify";

import Blockchain from "./Blockchain.js";
import Block from "./Block.js";

let CCCoin = new Blockchain( { difficulty : 3 } )

console.log("<><><><><><><><><><><><> CCCOIN GENERATING TRANSACTIONS <><><><><><><><><><><><>")
console.log("................................................................................")


CCCoin.addNewBlock(
    new Block({ index : 1, timestamp : Date.now(), 
        data : {
            sender : "AJ Weaver", 
            recipient : "Shadman Uddin",
            quantity: 122 
        } 
    } )
);

CCCoin.addNewBlock(
    new Block({ index : 1, timestamp : Date.now(), 
        data : {
            sender : "Chandler Phillips", 
            recipient : "Micky Wolf",
            quantity: 156 
        } 
    } )
);

CCCoin.addNewBlock(
    new Block({ index : 1, timestamp : Date.now(), 
        data : {
            sender : "Shadman Uddin", 
            recipient : "Michael Wedd",
            quantity: 78 
        } 
    } )
);

CCCoin.addNewBlock(
    new Block({ index : 1, timestamp : Date.now(), 
        data : {
            sender : "Micky Wolf", 
            recipient : "Shadman Uddin",
            quantity: 67 
        } 
    } )
);

CCCoin.addNewBlock(
    new Block({ index : 1, timestamp : Date.now(), 
        data : {
            sender : "Michael Wedd", 
            recipient : "AJ Weaver",
            quantity: 91 
        } 
    } )
);

console.log("<><><><><><><><><><><><> CCCOIN TRANSACTIONS <><><><><><><><><><><><>")
console.log(beautify(CCCoin, null, 2, 50))
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>")

console.log("<><><><><><><><><><><><> CCCOIN BLOCKCHAIN INTEGRITY CHECK <><><><><><><><><><><><>")
console.log(CCCoin.validateIntegrity() ? "CCCoin Blockchain Integrity Verified" : "WARNING: CCCoin Blockchain has been tampered with and is no longer valid")
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>")
