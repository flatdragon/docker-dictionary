<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <div v-if="loading" :key="1">
        <div class="text-center" style="margin-bottom: 2rem">
          <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
            <path d="M248 216a32 32 0 100 64 32 32 0 000-64zm0 48a16 16 0 110-32 16 16 0 010 32z"/>
            <path d="M417 405.6l-.6-.3a291.6 291.6 0 01-64.4-48.6A136.3 136.3 0 01316 292c-2.6-11-.7-23.2 5.6-33.6a37.9 37.9 0 0132.7-18.4h.9a36.7 36.7 0 0136.9 37v58l32.7-21.8c19.3-12.9 35-30.7 45.4-51.5a244.7 244.7 0 00-15.3-246L444.3 0H424v8c0 24.8-6.4 49.4-18.7 71.5a291 291 0 01-48.6 64.5 136.3 136.3 0 01-64.6 36.1c-11.1 2.6-23.3.7-33.7-5.6a37.9 37.9 0 01-18.4-32.7v-.9a36.7 36.7 0 0136.9-36.9h58l-21.7-32.7a133 133 0 00-50.5-44.9 244.7 244.7 0 00-247 14.8L0 51.7V72h8c24.8 0 49.4 6.4 71.5 18.6a291.1 291.1 0 0164.5 48.7A136.3 136.3 0 01180 204c2.6 11 .7 23.2-5.5 33.6a37.9 37.9 0 01-32.8 18.4h-.9a36.7 36.7 0 01-36.9-37v-58l-32.7 21.8A133.8 133.8 0 0026 234.3a244.7 244.7 0 0015.3 246L51.7 496H72v-8a147 147 0 0118.6-71.3 290.7 290.7 0 0148.7-64.7A136.3 136.3 0 01204 316c11-2.6 23.2-.7 33.6 5.6a37.9 37.9 0 0118.4 32.7v.9a36.7 36.7 0 01-37 36.9h-58l21.8 32.7a132.9 132.9 0 0050.5 44.9 244.8 244.8 0 00247-14.8l15.7-10.5V424h-8c-24.8 0-49.4-6.4-71-18.4zm54.4 35.9a228.9 228.9 0 01-230.9 13.8 117 117 0 01-44.3-39.5L191 408h28a52.5 52.5 0 0053-53v-.8c0-19.2-9.8-36.6-26.4-46.6-14-8.3-30-11-45.4-7.3a152.2 152.2 0 00-72.2 40.4 307.5 307.5 0 00-51.6 68.5 162.9 162.9 0 00-19.8 65.2l-2-3a228.8 228.8 0 01-14.4-230c9.2-18.3 23-34 40-45.2L88 191v28a52.6 52.6 0 0053 53h.8c19.2 0 36.6-9.8 46.6-26.4 8.3-14 11-30 7.2-45.4a152.2 152.2 0 00-40.3-72.2 307.6 307.6 0 00-68.5-51.6 162.8 162.8 0 00-65.2-19.8l3-2a229 229 0 01230.9-14 117 117 0 0144.3 39.6l5.3 7.8h-28.2a52.6 52.6 0 00-52.9 53v.8c0 19.2 9.8 36.6 26.4 46.6 14 8.3 30 10.9 45.4 7.2a152.3 152.3 0 0072.3-40.4 307 307 0 0051.5-68.4c11.1-20 17.9-42.4 19.8-65.2l2 3a229 229 0 0114.4 230c-9.2 18.3-23 34-40 45.2L408 305v-28a52.6 52.6 0 00-53-53h-.8a53.8 53.8 0 00-46.6 26.4c-8.3 14-11 30-7.3 45.4a152.2 152.2 0 0040.4 72.2c20.2 20.2 43 37.4 67.9 51.2l.5.4a163 163 0 0065.3 19.8l-3 2z"/>
            <path d="M390.6 178a338.5 338.5 0 0062.5-86.4l-14.5-7c-1.6 3.6-3.4 7-5.3 10.5a322.9 322.9 0 01-54 71.5c-4 4-8 7.7-12.3 11.2l10 12.4c4.7-3.8 9.3-8 13.6-12.3zM364.5 199.6l-9-13.2c-3.6 2.4-7.2 4.7-11 6.9l8 13.8c4.2-2.3 8.2-4.9 12-7.5zM178 105.4a338.5 338.5 0 00-86.4-62.5l-7 14.5c3.6 1.6 7 3.4 10.5 5.3a323.1 323.1 0 0171.5 54c4 4 7.7 8 11.2 12.3l12.4-10c-3.8-4.7-8-9.3-12.3-13.6zM186.4 140.5c2.4 3.6 4.7 7.2 6.9 11l13.8-8c-2.3-4.2-4.9-8.2-7.5-12l-13.2 9zM105.4 318a338.5 338.5 0 00-62.5 86.4l14.5 7c1.6-3.6 3.4-7 5.3-10.5a322.9 322.9 0 0154-71.5c4-4 8-7.7 12.3-11.2l-10-12.4c-4.7 3.8-9.3 8-13.6 12.3zM131.5 296.4l9 13.2c3.6-2.4 7.2-4.7 11-6.9l-8-13.8c-4.2 2.3-8.2 4.9-12 7.5zM329.4 379.3c-4-4-7.7-8-11.2-12.3l-12.4 10c3.8 4.7 8 9.3 12.3 13.6a338.5 338.5 0 0086.3 62.5l7-14.5c-3.6-1.6-7-3.4-10.5-5.3a322.9 322.9 0 01-71.5-54zM302.7 344.6l-13.8 8c2.3 4 4.9 8.1 7.5 12l13.2-9.1c-2.4-3.6-4.7-7.2-6.9-11z"/>
          </svg>
        </div>
        <div class="text-center">Backend-приложение загружается. Подождите!</div>
      </div>
      <div v-else :key="2">
        <z-debounced-input v-model="name"></z-debounced-input>
        <z-term :name="name"></z-term>
      </div>
    </transition>
  </div>
</template>

<script>
import ZTerm from '~/components/ZTerm'
import ZDebouncedInput from '~/components/ZDebouncedInput'
export default {
  components: { ZDebouncedInput, ZTerm },
  data() {
    return {
      name: '',
      loading: false,
      interval: null,
    }
  },
  mounted() {
    this.interval = setInterval(() => this.checkBackend(true), 500)
  },
  methods: {
    async checkBackend(clear) {
      try {
        const response = await this.$axios.get('/api/alive')
        if (response) {
          this.loading = false
          if (clear) {
            clearInterval(this.interval)
          }
        }
      } catch (error) {
        if (error.response.status !== 504) {
          this.loading = false
          console.log(error.response)
          alert('Не удалось связаться с backend-приложением. Откройте консоль, чтобы узнать подробности.')
        } else {
          this.loading = true
        }
      }
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.svg-icon {
  display: inline-block;
  width: 6rem;
  height: 6rem;
  animation-name: spin;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
