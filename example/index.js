const Koa = require('koa')
const app = new Koa()
const webpackHRM = require('../lib/')

app.use(webpackHRM({
  config: require('./webpack.config'),
  dev: {
    stats: {
      colors: true
    }
  },
  success: function() {
    console.log('Package is in a valid state')
  },
}))


app.use(async(ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  ctx.body = '\
    <!DOCTYPE html>\
    <html lang="en">\
    <head>\
      <meta charset="UTF-8">\
      <title></title>\
    </head>\
    <body>\
      hello 333 111 11 koa78787\
      <script src="static/index.js"></script>\
    </body>\
    </html>\
  '
})
let port=34567
app.listen(port)
console.log(`localhost:${port}`)