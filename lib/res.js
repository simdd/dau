/*!
 * Copyright(c) SIMDD
 * MIT Licensed
 */

'use strict'

let fs = require('fs')

exports = module.exports = {
    html(src) {
        this.writeHead(200, {'content-type': 'text/html'})
        let stream = fs.createReadStream(src, {flags: 'r', encoding: null})
        stream.on('error', () => {
            this.writeHead(500, {'content-type': 'text/html'})
            this.end('Server Error')
        })

        stream.pipe(this)
        return this
    },

    json(obj) {
        this.writeHead(200, {'content-type': 'application/json'})
        this.end(JSON.stringify(obj))
        return this
    },

    status(code) {

    },

    header() {

    },

    cookie() {

    },

    redirect() {

    },

    render() {

    }
}