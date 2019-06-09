const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Image get request (GET not supported)",
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Image post request",
    });
});

module.exports = router;