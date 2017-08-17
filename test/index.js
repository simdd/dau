/**
 * create by SIMDD
 */

'use strict'

const path = require('path')

let Son = require('../index')

let app = new Son()

app.use(function (req, res, next) {
    console.log(1)
    next()
})

app.use(function (req, res, next) {
    console.log(2)
    next()
})

app.use(function (req, res, next) {
    res.html(path.resolve(__dirname, './index.html'))
})

app.err('Page Not Found')

app.listen(80)