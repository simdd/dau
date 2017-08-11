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

                if (i === this.middleware.length) {
                    res.writeHead(404)
                    res.end()
                }

                return Promise.resolve(fn(req, res, function next() {
                    return dispatch(i++)
                }))
            }

            return dispatch(0)
        })

        return server.listen(...args)
    }
}