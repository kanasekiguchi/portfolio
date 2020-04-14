<template>
  <div class="drawerSection">
    <img
      class="drawerButton"
      alt="drawer_close"
      src="@/assets/drawerclose.png"
    >
    <ul class="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".mainSection"
          @click="clickSmoothScroll1()"
        >・Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".aboutSection"
          @click="clickSmoothScroll2()"
        >・About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".skillSection"
          @click="clickSmoothScroll3()"
        >・Skill Set</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".visionSection"
          @click="clickSmoothScroll4()"
        >・Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll1 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.mainSection'),
        400,
        null,
        null,
        'y'
      )
    },

    clickSmoothScroll2 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.aboutSection'),
        400,
        null,
        null,
        'y'
      )
    },

    clickSmoothScroll3 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.skillSection'),
        400,
        null,
        null,
        'y'
      )
    },

    clickSmoothScroll4() {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.visionSection'),
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
.drawerButton {
  width: 20px;
}

.drawerSection {
  background-color: rgb(187, 167, 167);
  width: 100%;
  height: auto;
}

.drawerMenuSection {
  background-color: #f3f1f1e1;
  width: 100%;
  height: 731pt;
  text-align: center;
}

.drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
}

.drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  white-space: nowrap;
  line-height: 3em;
  text-decoration: none;
}
</style>
