<template>
  <div>
    <Header/>
    <div class="content">
        <h1>How to vote for an ARK delegate?</h1>
        <p>We've made a video to explain how to vote for us.</p>
        <div class="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nrgOJIxKyEM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
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

  h1 {
    font-size: 1.4em;
  }
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
