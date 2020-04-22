<template>
  <div id="app">
    <Header />
    <Main />
    <div>{{ this.skills }}</div>
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
  },
  data() {
    return {
      skills: []
    }
  },

  computed: {
    users: function(){
      return this.$store.state.skills
      },
    count: function(){
      return this.$store.state.count
      }
  },
    mounted () {
    this.getSkills();
    this.$store.dispatch('skills')
  },

  methods: {
    getSkills() {
      console.log('abc')
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-kanasekiguchi1009.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
</style>
