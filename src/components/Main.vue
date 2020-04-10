<template>
  <div class="mainSection">
    <div class="userName">
      Kana Sekiguchi
    </div>
    <div class="companyName">
      Seattleconsulting
    </div>
    <img
      class="profilePicture"
      src="@/assets/kana.jpg"
    >
  </div>
</template>

<script>
</script>


<style scoped>
.mainSection {
  width: 100%;
  background: linear-gradient(#ffe4e1, #fff0f5);
  height: auto;
  text-align: center;
  line-height: 2em;
}

.userName {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  text-shadow: 1px 2px 3px #808080;
  display: inline-block;
  border-bottom: 1px solid #9c9797;
}

.companyName {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  text-shadow: 1px 2px 3px #808080;
}

.profilePicture {
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
}
</style>
