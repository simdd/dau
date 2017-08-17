/*!
 * Copyright(c) SIMDD
 * MIT Licensed
 */

'use strict'

const http = require('http')

const request = require('./req')
const response = require('./res')

exports = module.exports = class App {
    constructor() {
        this.middleware = []
    }

    use(fn) {
        this.middleware.push(fn)
    }

    callback(req, res) {
        Object.assign(req, request)
        Object.assign(res, response)

        let dispatch = (i) => {
            let fn = this.middleware[i]

            if (i === this.middleware.length) return null
            if (!fn) throw new Error('middleware is not function')

            return fn(req, res, function next() {
                return dispatch(i + 1)
            })
        }

        return dispatch(0)
    }

    listen(port) {
        const server = http.createServer(this.callback.bind(this))

        console.log('>>Son: server on ', port)
        return server.listen(port)
    }

    all() {

    }

    get() {

    }

    post() {

    }

    err(msg) {
        this.middleware.push(function (req, res) {
            res.end(msg)
        })
    }
}