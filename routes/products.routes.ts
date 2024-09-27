import { Router } from '@oak/oak/router'
import * as indexCtrl from '../controllers/index.controller.ts'

const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = 'Welcome to my API'
})

router.get('/searchPokemon', indexCtrl.getPokemonsBySearch)

export default router
