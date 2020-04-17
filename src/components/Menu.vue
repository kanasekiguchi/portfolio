<template>
  <div class="drawerSection">
    <label for="nav-input">
      <img
        class="drawerButton"
        alt="drawer_close"
        src="@/assets/drawerclose.png"
      >
    </label>
    <ul
      class="drawerMenuSection"
      @click="closeMenu"
    >
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
    closeMenu(){
      this.$emit('close')
    },
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
  cursor: pointer;
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
  font-weight: bold;
  font-size: 60pt;
}

.drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
}

.drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 25px;
  white-space: nowrap;
  line-height: 3em;
  text-decoration: none;
}
</style>
