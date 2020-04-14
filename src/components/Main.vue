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
      src="@/assets/kana2.jpg"
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
  line-height: 2em;
  margin: 0 auto;
  text-align: center;
}

.userName {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  text-shadow: 1px 2px 3px #808080;
  display: inline-block;
  border-bottom: 1px solid #9c9797;
  margin: 0 auto;
  padding: 10px;
}

.companyName {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  text-shadow: 1px 2px 3px #808080;
  margin: 0 auto;
  padding: 10px;
}

.profilePicture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  padding: 10px;
}
</style>
