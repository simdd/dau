/**
 * create by SIMDD
 */

'use strict'

const http = require('http')

const request = require('./req')
const response = require('./res')

exports = module.exports = class Son {
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

            if (typeof fn !== 'function') throw new TypeError('Middleware must be of functions!')

            if (!fn) return Promise.resolve()

            if (i === this.middleware.length) return Promise.resolve()

            return Promise.resolve(fn(req, res, function next() {
                return dispatch(i + 1)
            }))
        }

        return dispatch(0)
    }

    listen(...args) {
        const server = http.createServer(this.callback.bind(this))

        console.log('server on: ', ...args)
        return server.listen(...args)
    }
}