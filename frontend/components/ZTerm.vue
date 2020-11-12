<template>
  <div class="term">
    <strong class="term__label">Определение:</strong>
    <div class="term__definition">
      <label>
        <textarea class="term__definition-value" ref="definition" v-model="model" :placeholder="placeholder" :readonly="!editing"></textarea>
      </label>
      <template v-if="editing">
        <div class="term__actions">
          <button class="term__action" @click="update">Обновить</button>
          <button class="term__action" @click="cancel">Отмена</button>
        </div>
      </template>
      <template v-else>
        <div class="term__actions">
          <button class="term__action" @click="edit" :disabled="!name">Редактировать</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZTerm',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      model: '',
      definition: '',
      editing: false,
    }
  },
  watch: {
    name() {
      this.editing = false
      this.find()
    },
    definition(newDefinition) {
      this.model = newDefinition
    },
  },
  computed: {
    placeholder() {
      return this.name ? 'У данного термина еще нет определения.' : 'Сначала введите термин в верхнее поле.'
    }
  },
  methods: {
    edit() {
      this.editing = true
      this.focus()
    },
    cancel() {
      this.editing = false
      this.model = this.definition
      this.focus()
    },
    async update() {
      this.editing = false
      try {
        const { data: term } = await this.$axios.put(`/api/terms/${this.name}`, {
          definition: this.model,
        })
        this.definition = term.definition
      } catch (error) {
        console.log(error.response)
        alert('При запросе, на обновление определения, произошла ошибка. Откройте консоль, чтобы узнать подробности.')
      }
      this.focus()
    },
    focus() {
      if (this.$refs.definition) {
        this.$refs.definition.focus()
      }
    },
    async find() {
      try {
        const { data: definition } = await this.$axios.get(`/api/terms/${this.name}`)
        this.definition = definition
      } catch (error) {
        if (error.response.status === 404) {
          this.definition = ''
        } else {
          console.log(error.response)
          const lines = [
            'При запросе произошла ошибка отличная от 404. Откройте консоль, чтобы узнать больше.',
            '\n\n',
            'Возможно серверное приложение еще не загрузилось. Подождите немного.',
          ]
          alert(lines.join(''))
        }
      }
    },
  },
}
</script>

<style lang="scss">
.term {
  &__label,
  &__definition {
    display: block;

    &-label,
    &-value {
      display: block;
    }
  }

  &__label {
    margin-bottom: .5rem;
  }

  &__definition {
    &-value {
      min-width: 100%;
      max-width: 100%;

      $action-color: #616161;
      border-radius: .25rem;
      padding: .5rem 1rem;
      margin-bottom: .5rem;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba($action-color, 0.5);
      }

      &:read-only {
        background-color: #EEEEEE;
      }
    }
  }

  &__actions {
    display: flex;
  }

  &__action {
    $action-color: #616161;
    color: #fff;
    background-color: $action-color;
    border-radius: .25rem;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
    margin-right: .5rem;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba($action-color, 0.5);
    }

    &:hover {
      background-color: darken($action-color, 10%);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: rgba($action-color, .5);

      &:hover {
        background-color: rgba($action-color, .5);
      }
    }
  }
}
</style>
