/**
 * create by SIMDD
 */

'use strict'

let Son = require('./lib/son')

let app = new Son()

app.use(function (res, req, next) {
    console.log(1)
    next()
})

app.use(function (res, req, next) {
    console.log(1)
    next()
})

app.use(function (res, req, next) {
    console.log(1)
    next()
})

app.listen(80)