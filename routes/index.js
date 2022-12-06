const router = require('express').Router();
const path = require("path");

router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/index.html'))
})


module.exports = router;