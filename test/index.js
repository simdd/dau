/**
 * create by SIMDD
 */

'use strict'

const fs = require('fs')
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
    res.writeHead(200, {'content-type': 'text/html'})
    let stream = fs.createReadStream(path.resolve(__dirname, './index.html'), {flags: 'r', encoding: null})
    stream.on('error', function () {
        res.writeHead(500, {'content-type': 'text/html'})
        res.end('Server Error')
    })

    stream.pipe(res)
})

app.listen(80)