// 自定义中间件 logger
const logger = (prefix) => {
    return (request, response, next) => {
        console.log(`${prefix}: ${request.url}`)
        next()
    }
}

module.exports = logger
