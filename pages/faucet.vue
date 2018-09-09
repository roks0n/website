<template>
  <div>
    <Header/>

    <div class="faucet">
      <h2>ARK V2 Devnet Faucet</h2>

      <hr>

      <div class="faucet__container">
        <label class="faucet__label">Address:</label>
        <input class="faucet__input" type="text" v-model="address">

        <button class="faucet__button" v-on:click="request" :disabled="btnDisabled">Send 10 DARK</button>
      </div>

      <hr>

      <p class="faucet__info">
        This is a V2 devnet faucet which gives 10 DARK to a requested address. You can request DARK
        every 24h. This faucet is ran using Ark V2 plugin <a href="https://github.com/deadlock-delegate/ark-faucet" target="_blank">@deadlock/ark-faucet</a>.
      </p>
    </div>

    <notifications group="faucet" position="top right" :speed="500" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import axios from 'axios'

export default {
  components: {
    Header
  },

  head () {
    return {
      title: 'ARK V2 devnet Faucet',
      meta: [
        { hid: 'description', name: 'description', content: 'Faucet for Ark V2 devnet - request your DARK tokens.' }
      ]
    }
  },

  data () {
    return {
      btnDisabled: false,
      address: '',
    }
  },

  methods: {
    request: async function () {
      if (this.btnDisabled) {
        return
      }
      this.btnDisabled = true
      let title
      let message
      let type
      try {
        const respose = await axios.post('https://r2d2.deadlock.sh/rolls', {address: this.address})
        title = 'Success!'
        message = 'You should receive some DARK shortly.'
        type = 'success'
      } catch (error) {
        title = 'There was a problem'
        message = error.response.data.message
        type = 'error'
      }
      this.$notify({
        group: 'faucet',
        title: title,
        text: message,
        type: type
      })
      this.btnDisabled = false
    }
  }
}
</script>

<style lang="scss">
@import "normalize.css";

.notification {
  font-size: 0.9em;
}

.faucet {
  margin: auto;
  width: 100%;
  max-width: 500px;

  h2 {
    margin-bottom: 0;
  }

  &__container {
    width: 100%;
    display: table;
  }

  &__label {
    width: 100%;
  }

  &__input {
    width: 100%;
    padding: 0.5em;
    line-height: 1em;
    margin: 0.5em 0;
  }

  &__button {
    background: #000;
    color: #fff;
    float: right;
    padding: 0.5em;
    cursor: pointer;
  }

  &__info {
    color: #bfbfbf;
    font-size: 0.9em;
  }
}
</style>
