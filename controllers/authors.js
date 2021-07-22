const express = require('express')
const router = express.Router()

//all authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

//new authors route
router.get('/new', (req, res) => {
    re.render('authors/new')
})

//crerate authors route
router.post('/', (req, res) => {
    req.send('create')
})


module.exports = router