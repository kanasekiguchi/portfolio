<template>
  <div class="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain">
      <p>あああああああああああああああ</p>
    </div>
    <div>
      <label class="gitHubLabel">gitHub：</label>
      <a href="https://github.com/kanasekiguchi">https://github.com/kanasekiguchi</a>
    </div>
    <a id="skillCategories" />
    <div class="skillList" />
    <li id="skillName">
      Front-end
    </li>
    <li id="skillName">
      Back-end
    </li>
    <li id="skillName">
      DevOps
    </li><br>
    <li id="skillName2">
      HTML
    </li>
    <li id="skillName2">
      CSS
    </li>
    <li id="skillName2">
      Java
    </li><br>
    <li id="skillName2">
      SCSS
    </li>
    <li id="skillName2">
      Vue
    </li>
    <li id="skillName2">
      Java
    </li>
    <li id="skillName2">
      Ruby
    </li><br>

    <div class="skillGraph" />
  </div>
</template>

<script>
 import Chart from './Chart.vue'
 export default {
  name: 'App',
  _components: {
    Chart
  },
  get components() {
    return this._components
  },
  set components(value) {
    this._components=value
  },
}
</script>

<style scoped>
.skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  text-align: center;
}

.skillTitle {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 1px 2px 3px #808080;
  margin: 0 auto;
  padding: 20px;
}

.skillExplain {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-wrap: break-word;
  line-height: 1.25em;
  margin: 0 auto;
  width: 80%;
  padding: 75px;
}

.gitHubLabel {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  margin: 0 auto;
  padding: 15px;
  line-height: 10em;
}

#skillName {
  display: inline;
  padding: 15px;
}

#skillName2 {
  display: inline;
  padding: 15px;
}

</style>
