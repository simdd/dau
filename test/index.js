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
    next()
})

app.use(function (req, res, next) {
    console.log('-----------', req.ip)
    res.html(path.resolve(__dirname, './index.html'))
})

app.listen(80)