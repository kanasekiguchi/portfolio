<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(115, 51, 155, 0.2)',
            ],
            borderColor: [
              'rgba(115, 51, 155, 1)',
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero:true,
            max: 50,
            min: 0
          }
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.getChartName()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getChartName(){
      const names = this.$store.getters.skillName(2)
      this.data.labels = names
      const scores = this.$store.getters.skillScore(2)
      this.data.datasets[0].data = scores
    }
  }
}
</script>
