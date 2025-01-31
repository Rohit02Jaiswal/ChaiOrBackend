let addToCart = () => {
    console.log("Add to Cart!");
}

let number = () => {
    return 5;
}

// module.exports=addToCart  // it is a common js by default module.

// If you want to export the multiple function, need to use named export.
module.exports = {addToCart, number};