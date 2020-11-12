'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TermSchema extends Schema {
  up () {
    this.create('terms', (table) => {
      table.increments()
      table.string('name', 255).notNullable().unique().index()
      table.text('definition', 65535)
      table.timestamps()
    })
  }

  down () {
    this.drop('terms')
  }
}

module.exports = TermSchema
