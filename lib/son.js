/**
 * create by SIMDD
 */

'use strict'

const http = require('http')

exports = module.exports = class Son {
    constructor() {
        this.middleware = []
    }

    use(fn) {
        this.middleware.push(fn)
    }

    listen(...args) {
        const server = http.createServer((req, res) => {
            let dispatch = (i) => {
                let fn = this.middleware[i]

                if (!fn) {
                    return Promise.resolve()
                }

                if (i === this.middleware.length) {
                    return Promise.resolve()
                }

                return Promise.resolve(fn(req, res, function next() {
                    return dispatch(++i)
                }))
            }

            return dispatch(0)
        })

        console.log('server on: ', ...args)
        return server.listen(...args)
    }
}