const products = require('../products.json')

const getProducts = (req, res) => {
    const filteredProducts = products.filter(product => product.price >= +req.query.price)
    if(req.query.price){
        res.status(200).send(filteredProducts)
    } else {
        res.status(200).send(products)
    }
}

module.exports = getProducts