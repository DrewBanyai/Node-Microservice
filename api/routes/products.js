const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Product get request (GET not supported)",
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.ProductName,
        id: req.body.ProductID,
        price: 2.99
    };

    res.status(200).json({
        message: "Product post request",
        product: product
    });
});

module.exports = router;