<template>
  <div class="footerSection">
    <a
      href="#header"
      @click="clickSmoothScroll()"
    >
      <img
        class="footerScroll"
        alt="Footer"
        src="@/assets/yazirushi.png"
      >
    </a>
    <div class="footerCopyright">
      ©️ SeattleConsulting
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
.footerSection {
  width: 100%;
  background: linear-gradient(#ffe4e1, #fff0f5);
  height: auto;
  text-align: center;
}

.footerCopyright {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 12pt;
  text-shadow: 1px 2px 3px #808080;
  margin: 0 auto;
  padding: 12px;
}

.footerScroll {
  height: 20pt;
  width: 20pt;
}
</style>
