<template>
  <div class="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain">
      <p>
        技術・知識ともにまだまだで、自らの実力不足を痛感していますが、<br>「驕らず倦まず怠らず」
        の三つを大事にして頑張ります！<br>
        自分が作ったもので人を笑顔にしたいし、幸せにしたいです。<br>
        今はチャートの形も小さく歪ですが、ここから大きく綺麗なチャートを目指し努力していきます。
        HTMLやCSSは個人的に興味があるので少しだけ数値を高めに設定しました！<br>
        また、ポートフォリオを作成している中でデザインにも興味が湧いてきました。
      </p>
    </div>
    <div>
      <label class="gitHubLabel">GitHub：</label>
      <a
        class="gitHuburl"
        href="https://github.com/kanasekiguchi"
      >https://github.com/kanasekiguchi</a>
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
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div class="skillGraph">
      <div
        v-if="Front_end"
        id="Graph"
      >
        <FrontChart />
      </div>
      <div
        v-if="Back_end"
        id="Graph"
      >
        <BackChart />
      </div>
      <div
        v-if="devchange"
        id="Graph"
      >
        <DevOpsChart />
      </div>
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
      Front_end: true,
      Back_end: false,
      devchange: false,
    }
  },
  methods: {
    frontChange(){
      this.Front_end=!this.Front_end,
      this.Back_end= false,
      this.devchange=false
    },
    backChange(){
      this.Front_end= false,
      this.Back_end=!this.Back_end,
      this.devchange=false
    },
    devChange(){
      this.Front_end= false,
      this.Back_end= false,
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
  padding: 30px;
}

.skillExplain {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-wrap: break-word;
  line-height: 1.8em;
  margin: 0 auto;
  padding: 0 20px;
  width: 700px;
}

.gitHubLabel {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  color: rgb(99, 79, 97);
  margin: 0 auto;
  padding: 5px;
  line-height: 5em;
}

.gitHuburl {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  color: rgb(99, 79, 97);
  text-decoration: none;
}

.skillCategories {
  font-weight: bold;
  padding: 20px;
}

.skillList {
  padding: 0 0 2px;
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

.front-Change li {
  background-color: rgba(255, 0, 0, 0.23);
}

.back-Change li {
  background-color: rgba(15, 145, 60, 0.23);
}

.devops-Change li {
  background-color: rgba(115, 51, 155, 0.23);
}

#Front-end li {
  color: rgba(255, 0, 0, 0.75);
  font-size: 10pt;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 2px;
  box-shadow: 0 0 3px gray;
}

#Back-end li {
  color: rgba(15, 145, 60, 0.75);
  font-size: 10pt;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 2px;
  box-shadow: 0 0 3px gray;
}

#DevOps li {
  color: rgba(115, 51, 155, 0.75);
  font-size: 10pt;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin: 2px;
  box-shadow: 0 0 3px gray;
}

#Graph {
  margin: 40px auto;
  width: 300px;
}
</style>
