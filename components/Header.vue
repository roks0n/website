<template>
  <div class="header">
    <div class="header__logo">
      <Logo/>
    </div>

    <div class="header__navigation">
      <div class="header__navigation__item">
        <router-link :to="{ name: 'index'}">Home</router-link>
      </div>
      <div class="header__navigation__item">
        <router-link :to="{ name: 'proposal'}">Proposal</router-link>
      </div>
     <!--  <div class="header__navigation__item">
        <router-link :to="{ name: 'news'}">News & Updates</router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.header {
  padding: 1em;
  margin-bottom: 1em;
  background: #000;

  &__logo {
    width: 120px;
    margin: auto;
    display: block;
  }

  &__navigation {
    display: flex;
    justify-content: center;

    &__item {
      margin: 1em 1em 0;

      a {
        color: #FFF;
      }

      a:hover {
        border-bottom: 2px solid #000;
      }

      a:visited {
        color: #FFF;
      }
    }
  }
}
h3 {
    text-align: center;
}
</style>
