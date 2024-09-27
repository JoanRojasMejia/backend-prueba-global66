import { Application } from '@oak/oak/application'
import router from './routes/products.routes.ts'

const app = new Application()

app.use(async (ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*')
  ctx.response.headers.set('Access-Control-Allow-Methods', 'GET')
  ctx.response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 204
  } else {
    await next()
  }
})

// app.use(cors(corsOptions))
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 3000 })
