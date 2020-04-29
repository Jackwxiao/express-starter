const express = require('express')
const logger = require('./logger')
const app = express()

// 中间件
app.use(logger('dev'))

// 使用 app.use 实现 router 的几种写法
app.use((request,response,next) => {
    if(request.path === '/' && request.methods === 'get' ){
        response.send('这是根目录')
    }
    next()
})

app.post('/xxx', (request, response,next) => {
    response.send('这是 xxx 页面')
    next()
    }
)

app.route('/xxx')
    .all(()=>{})
    .get((request,response,next)=>{
        response.send('xxx')
    })

// use 初使用
app.use((request,response,next) => {
    console.log(request.url)
    response.write('world ')
    next()
})

app.use((request,response,next)=>{
    console.log(2)
    response.write('hi')
    response.end()
})

app.listen(3000,()=>{
    console.log('正在监听端口 3000');
})
