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
  background: #f3f1f1e1;
  height: auto;
  text-align: center;
  position: relative;
}

.footerCopyright {
  font-size: 14px;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  color: #fff;
  text-shadow:
    0 0 0.05em #f06292,
    0 0 0.1em #f06292,
    0 0 0.15em #f06292,
    0 0 0.3em #f06292;
  filter: saturate(80%);
  margin: 0 auto;
  padding: 12px;
}

.footerScroll {
  position: relative;
  z-index: 600;
  top: -8px;
  height: 20pt;
  width: 20pt;
}
</style>
