<template>
  <div id="headerSection">
    <button
      class="btn-1"
      @click="toggle"
    >
      <img
        class="headerButton"
        alt="menu"
        src="@/assets/menu3.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        content here
      </div>
    </Drawer>
  </div>
</template>
 
<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "App",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>


<style>
#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

.headerButton {
  height: 30pt;
  width: 30pt;
}

.btn-1 {
  background-color: #f3f3f3;
}
</style>