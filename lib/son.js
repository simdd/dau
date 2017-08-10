/**
 * create by SIMDD
 */

'use strict'

const http = require('http')


module.exports = class Son {
    constructor() {

    }

    listen(...args) {
        const server = http.createServer((req, res) => {
 
        })
        return server.listen(...args)
    }

    middleware: []

    use(fn) {
        this.middleware.push(fn)
    }
}