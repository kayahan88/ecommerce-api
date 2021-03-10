const products = require('../products.json')

const getProduct = (req, res) => {
    
    const product = products.find((element) => element.id === (+req.params.theProductId))
    if (!product) {
        res.status(500).send('Item not in list')
        
    } else {
        res.status(200).send(product)
    }
}

module.exports = getProduct