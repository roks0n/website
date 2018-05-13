<template>
  <div>
    <Header/>

    <div class="benefits">
      <div class="benefits__item">
        <div class="benefits__item__title">Voter share</div>
        <div class="benefits__item__value">90%</div>
      </div>
      <div class="benefits__item">
        <div class="benefits__item__title">Minimum payout</div>
        <div class="benefits__item__value">0.3 Ѧ</div>
      </div>
      <div class="benefits__item">
        <div class="benefits__item__title">Daily payouts</div>
        <div class="benefits__item__value">15:00</div>
        <div class="benefits__item__smaller">GMT</div>
      </div>
    </div>

    <div class="stats">
      <div class="stats__stat">
        <div class="stats__container">
          <div class="stats__stat__title">Rank</div>
        <div class="stats__stat__value">{{ delegate.rank }}</div>
        </div>
      </div>
      <div class="stats__stat">
        <div class="stats__container">
          <div class="stats__stat__title">Voting power</div>
          <div class="stats__stat__value">
            {{ parseFloat(parseInt(delegate.voting_power) / 100000000).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
          </div>
        </div>
      </div>
      <div class="stats__stat">
        <div class="stats__container">
          <div class="stats__stat__title">Voters</div>
          <div class="stats__stat__value">{{ delegate.voters }}</div>
        </div>
      </div>
    </div>

    <div class="forging-status">
      <div class="forging-status__title">Status</div>
      <div class="forging-status__state" v-if=" delegate.rank <= 51">actively forging</div>
      <div class="forging-status__state" v-else=" delegate.rank > 51">not forging</div>
      <hr>
      <div class="forging-status__note" v-if=" delegate.rank > 51">
        We need <b>{{ votesNeeded }} more votes</b> to reach the top 51 and start forging. If you like what
        we do, help us get there.
      </div>
      <div class="forging-status__note" v-if=" delegate.rank <= 51">
        If you are amongst our voters, thank you for supporting us! ❤️ We will keep doing our best to
        not disappoint. If you have any feedback, make sure to let us know!
      </div>
      <router-link class="forging-status__button" :to="{ name: 'how-to-vote-for-an-ark-delegate'}" v-if=" delegate.rank > 51">
        vote for us
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  data () {
    return {
      delegate: null,
      votesNeeded: null
    }
  },

  async asyncData ({ app }) {
    const response = await app.$axios.$get('https://arkdelegates.io/api/delegates/')
    const delegate = await app.$axios.$get('https://arkdelegates.io/api/delegates/deadlock/')
    let votesNeeded = null

    if (delegate.rank > 51) {
      const fiftyFirstDelegate = response.delegates.filter(delegate => delegate.rank === 51)[0]
      const differenceInVotes = parseInt(fiftyFirstDelegate.voting_power) - parseInt(delegate.voting_power)
      votesNeeded = parseFloat(differenceInVotes / 100000000).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return {
      delegate: delegate,
      votesNeeded: votesNeeded
    }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "normalize.css";

.benefits {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 2em;
  display: flex;
  justify-content: center;
  text-align: center;

  &__item {
    width: 150px;
    height: 100px;
    margin: 1em;
    background: #111;
    border: 1px solid #222;
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &__title {
      width: 100%;
    }

    &__value {
      font-size: 1.7em;
    }

    &__smaller {
      font-size: 0.7em;
      margin-left: 0.5em;
    }
  }
}

.stats {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  &__container {
    display: table;
    margin: auto;
    border-bottom: 3px solid #000;
  }

  &__stat {
    max-width: 330px;
    width: 33.333%;
    text-align: center;
    padding: 0 1em;
    margin-bottom: 1em;

    @include breakpoint(small) {
      padding: 0;
    }

    &__value {
      margin: 0.2em 0;
      font-size: 2.5em;

      @include breakpoint(small) {
        font-size: 1.6em;
      }
    }
  }
}
.forging-status {
  max-width: 400px;
  width: 80%;
  margin: 0 auto 2em;
  padding: 1em;
  text-align: center;

  &__title {
    margin-bottom: 0.5em;
  }

  &__state {
    font-size: 2.5em;

    @include breakpoint(small) {
      font-size: 1.6em;
    }
  }

  &__note {
    font-size: 0.9em;
    margin-bottom: 1em;
  }

  &__button {
    background: #000;
    color: #FFF;
    padding: 0.5em 0.7em 0.6em;
    display: table;
    margin: auto;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>
