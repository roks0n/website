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
    delegate.proposal = "## Introduction\n\nHey, I'm roks0n and I run deadlock delegate. I've been invested into ARK since around June 2017. Initially, I wasn't very active in Slack and in any of the repositories, but after seeing how engaged community, delegates, and ARK core team are I started falling in love with ARK.\n\n## Skills\nI've been a software engineer for a bit over 10 years. Besides being an engineer I've also had a team lead role and am used to working closely with project managers on planning.\n\nTech stack I'm most comfortable with:\n\n- Python (Django, Flask)\n- Javascript (Node, Vue, Ember)\n- Docker\n\nI feel comfortable switching between languages and learning new ones if there's a need. I also do a bit of devops stuff but only on my personal projects. 🤓\n\nBesides programming, I've also worked on SEO and had success with putting 3 website on the top 3 results for several key keywords they wanted to rank for. Note that all of them are for local markets in Slovenia.\n\n## Proposal\n**Profit sharing**\n\n- 90% -> goes to voters\n- 10% -> reserved for my ARK related projects and contributions (described below) and covering costs of running nodes\n\n**Other info**\n\n- using True Block Weight Payouts to prevent pool hopping\n- 0.3 minimum payout\n- 5 ARK minimum balance\n- refunds cost of voting within 72h, just make sure to [DM roks0n on ARK's Slack](https://ark.io/slack){target=\"_blank\"} or join [deadlock's discord](https://discord.gg/NhXWWjv){target=\"_blank\"}) and write a message under #vote-refunds channel\n\n## Future goals (not order by priority):\n- build delegate website\n- publish profit sharing stats to the website\n- ✅ share task updates (transparency is 🗝) → [Trello board](https://trello.com/b/UeEYNMSE/tasks){target=\"_blank\"} + shared on Twitter/Discord assoon as a task is finished\n- make a devnet faucet to make it easier for newcomers to get DARK and start getting their hands dirty\n- write few posts (3-5) about my ARK journey on my personal blog: roks0n.com (we need to get some link outside of medium.com domain to build on ARK's SEO)\n- continue contributing in ARK's repositories\n- continue working on arkdelegates.io (Todo list can be found on Trello)\n\n## Contact\n\n- [ARK's slack, ping roks0n](https://ark.io/slack){target=\"_blank\"}\n- [deadlock's discord](https://discord.gg/NhXWWjv){target=\"_blank\"}\n- [twitter](https://twitter.com/deadlock_ark){target=\"_blank\"}"

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
