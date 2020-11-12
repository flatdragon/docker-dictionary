'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/api/terms/:name', async ({ response, params }) => {
  const Term = use('App/Models/Term')

  const term = await Term.findOrNew({ name: params.name }, {})

  if (term.id) {
    return response.status(200).send(term.definition)
  }

  try {
    const Dictionary = use('Dictionary')
    const { status, data } = await Dictionary.get(`/${params.name}`)
    return response.status(status).send(data)
  } catch (error) {
    const { response: { status, data } } = error
    return response.status(status).send(data)
  }
})

Route.put('/api/terms/:name', async ({ request, response, params }) => {
  const Term = use('App/Models/Term')

  const term = await Term.findOrNew({ name: params.name }, {})

  term.merge({
    name: params.name,
    definition: request.input('definition', null),
  })

  term.save()

  response.status(200).send(term)
})

Route.get('/api/alive', ({ response }) => {
  return response.status(200).send(true)
})
