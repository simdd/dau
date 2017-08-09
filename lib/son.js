/**
 * create by SIMDD
 */

'use strict'

const http = require('http')


module.exports = class Son {
    constructor() {

    }

    listen(...args) {
        const server = http.createServer(this.callback())
        return server.listen(...args)
    }

    callback() {
        return (req, res) => {

        }
    }
}