let add = (a, b) => {
    return a+b
}

// alternative method
//  exports.add = (a, b) => {
//     return a+b
// }

let prod = (a, b) => {
    return a*b
}

module.exports = {
    add : add,
    prod : prod
}