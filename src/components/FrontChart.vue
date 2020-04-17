
<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Radar Dataset',
            data: [27, 27, 15, 10,20],
            backgroundColor: [
              'rgba(255, 0, 0, 0.2)'
            ],
            borderColor: [
              'rgba(255, 0, 0, 1)',
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
          display: false,
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
