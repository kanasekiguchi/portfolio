<template>
  <div id="headerSection">
    <button @click="toggle" class="btn-1">
      <img class="headerButton" alt="menu" src="@/assets/menu3.png">
    </button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
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
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
}
.headerButton{
  height: 30pt;
  width: 30pt;
}

.btn-1{
  background-color: #f3f3f3
}
</style>