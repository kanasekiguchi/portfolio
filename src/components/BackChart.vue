<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRalls', 'MySQL'],
        datasets: [
          {
            label: 'Radar Dataset',
            data: [15, 15, 30, 15],
            backgroundColor: [
              'rgba(15, 145, 60, 0.2)',
            ],
            borderColor: [
              'rgba(15, 145, 60, 1)',
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
