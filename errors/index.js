class handleErrors {
    
    constructor(){
        if(new.target == handleErrors){
            throw new TypeError("Can't instantiate abstract class.")
        }
    }

    isString(str) {
        if(typeof str !== "string") throw new Error("argument must be string");
    }
}


module.exports = { handleErrors }