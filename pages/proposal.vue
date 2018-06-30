<template>
  <div>
    <Header/>
    <div v-html="$md.render(proposal)" class="content"></div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  data () {
    return {
      proposal: null
    }
  },

  async asyncData ({ app }) {
    let delegate = await app.$axios.$get('https://arkdelegates.io/api/delegates/deadlock/')
    delegate.proposal = "## Introduction\r\n\r\nDeadlock delegate is financing development of Ark related tools and services.\r\n\r\n## Skills\r\n\r\n- Python (Django, Flask)\r\n- Javascript (Node, Vue, Ember)\r\n- Docker\r\n\r\n## Proposal\r\n\r\n**Profit sharing**\r\n\r\n- 90% -> goes to voters\r\n- 10% -> reserved for ARK related projects and contributions (described below)\r\n\r\n**Other info**\r\n\r\n- using True Block Weight Payouts to prevent pool hopping\r\n- 0.3 minimum payout\r\n- 5 ARK minimum balance\r\n- refunds cost of voting within 72h, just make sure to [DM roks0n on ARK's Slack]\r\n\r\n## Accomplishments \r\n\r\n- arkdelegates.io\r\n- Official ARK Python Client: https://github.com/ArkEcosystem/python-client/\r\n- Official ARK Crypto Library: https://github.com/ArkEcosystem/python-crypto/\r\n\r\n\r\n## Future goals (not order by priority):\r\n\r\n- publish profit sharing stats to the website\r\n- share task updates (transparency is 🗝) → [Trello board](https://trello.com/b/UeEYNMSE/tasks){target=\"_blank\"} + shared on Twitter as soon as a task is finished\r\n- work on a Metamask like chrome extension for ARK\r\n- continue contributing in ARK's repositories\r\n- continue financing development of arkdelegates.io (todo list along with progress can be found on Trello)\r\n\r\n## Contact\r\n\r\n- [ARK's slack, ping roks0n](https://ark.io/slack){target=\"_blank\"}\r\n- [twitter](https://twitter.com/deadlock_ark){target=\"_blank\"}"

    return {
      proposal: delegate.proposal.replace(new RegExp('{target="_blank"}', 'g'), '')
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "normalize.css";

.content {
  max-width: 800px;
  width: 100%;
  padding: 0 0.7em;
  margin: 0 auto 2em;

  a {
    color: #3d82cc;
    font-weight: bold;
  }
}
</style>
