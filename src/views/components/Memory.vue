<template>
  <common-card title="内存使用率">
    <template v-slot:content>
      <v-chart :options='option' style="height:220px; width:100%;" :autoresize='true'/>
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'
import echarts from 'echarts'

export default {
  name: 'Memory',
  components: {
    CommonCard
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '5%',
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10-27', '10-28', '10-29', ],
            axisLine: {
              lineStyle: {
                color: '#4e548b'
              }
            },
            axisLabel: {
              color: '#eee',
              fontFamily: 'Microsoft YaHei',
              fontSize: 10
            },
            axisTick: {
              alignWithLabel: true,
              length: 0
            }
          }
        ],
        yAxis: [
          {
            splitNumber: 6,
            type: 'value',
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#fefefe'
            },
            axisTick: {
              length: 0
            },
            splitLine: {
              lineStyle: {
                color: '#1f284a',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: 'GPU',
            type: 'line',
            data: [10, 52, 200, 334, 390, 330, 220, 22, 33, 52, 12, 66, 264],
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#41f487'
            }
          }
        ]
      }
    }
  },
}
</script>

<style scoped lang='scss'>
</style>
