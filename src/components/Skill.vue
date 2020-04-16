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
    <div class="skillCategories">
      <ul>
        <li>
          <label
            class="Front"
            @click="frontChange"
          >Front-end
          </label>
        </li>
        <li>
          <label
            class="Back"
            @click="backChange"
          >Back-end
          </label>
        </li>
        <li>
          <label
            class="DevOps"
            @click="devChange"
          >DevOps
          </label>
        </li>
      </ul>
    </div>
    <div class="skillList">
      <ul
        id="Front-end"
        :class="{'front-Change': Front_end}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="Back-end"
        :class="{'back-Change': Back_end}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRalls</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="DevOps"
        :class="{'devops-Change': devchange}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
        <li>AWS</li>
      </ul>
    </div>
    <div class="skillGraph">
      <div><FrontChart /></div>
      <div><BackChart /></div>
      <div><DevOpsChart /></div>
    </div>
  </div>
</template>

<script>

 import FrontChart from './FrontChart.vue'
 import BackChart from './BackChart.vue'
 import DevOpsChart from './DevOpsChart.vue'

 export default {
  name: 'App',
  components: {
     FrontChart,
     BackChart,
     DevOpsChart
  },
  data() {
    return {
      Front_end: true
    }
  },
  methods: {
    frontChange(){
      this.Front_end=!this.Front_end
    },
    backChange(){
      this.Back_end=!this.Back_end
    },
    devChange(){
      this.devchange=!this.devchange
    }
  }
}

</script>

<style scoped>
li {
  display: inline-block;
}

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

.skillCategories {
  padding: 20px;
}

.front-Change {
  display: none;
}

.back-Change {
  display: none;
}

.devops-Change {
  display: none;
}

.Front {
  color: #f34949;
  font-size: 18px;
  cursor: pointer;
  padding: 20px;
}

.Back {
  color: #2bc05f;
  font-size: 18px;
  cursor: pointer;
  padding: 20px;
}

.DevOps {
  color: #9839d3;
  font-size: 18px;
  cursor: pointer;
  padding: 20px;
}

#Front-end li {
  color: rgba(255, 0, 0, 0.75);
  font-size: 10pt;
  height: 20px;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 2px;
  box-shadow: 0 0 2px gray;
}

#Back-end li {
  color: rgba(15, 145, 60, 0.75);
  font-size: 10pt;
  height: 20px;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 2px;
  box-shadow: 0 0 2px gray;
}

#DevOps li {
  color: rgba(115, 51, 155, 0.75);
  font-size: 10pt;
  height: 20px;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 2px;
  box-shadow: 0 0 2px gray;
}

</style>
