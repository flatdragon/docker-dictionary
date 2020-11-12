<template>
  <label class="debounced-input">
    <strong class="debounced-input__label">Термин:</strong>
    <input class="debounced-input__control" type="text" :value="value" @input="update">
  </label>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  name: 'ZDebouncedInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    update: debounce(function (event) {
      this.$emit('input', event.target.value)
    }, 500)
  },
}
</script>

<style lang="scss">
.debounced-input {
  width: 100%;
  margin-bottom: .5rem;

  &__label {
    display: block;
    margin-bottom: .5rem;
  }

  &__control {
    width: 100%;
    $action-color: #616161;
    border: 1px solid #BDBDBD;
    border-radius: .25rem;
    padding: .5rem 1rem;

    &:focus {
      outline: none;
      border: 1px solid #616161;
      box-shadow: 0 0 0 2px rgba($action-color, 0.5);
    }
  }
}
</style>
