<template>
  <common-card title="节点资源使用">
    <template v-slot:content>
      <tab-switcher @change="tabChange"/>
      <v-chart :options='option' style="height:160px; width:100%;margin-top: 15px;" :autoresize='true'/>
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'
import echarts from 'echarts'
import TabSwitcher from './TabSwitcher'

export default {
  name: 'NodeResources',
  components: {
    CommonCard,
    TabSwitcher
  },
  data () {
    return {
      option: {
        color: ['#4a9df2'],
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
          bottom: '12%',
          containLabel: true
        },
        xAxis: [
          {
            data: ['16:28:18', '16:28:19', '16:28:20', '16:28:21', '16:28:22', '16:28:23', '16:28:24', '16:28:25', '16:28:26', '16:28:27', '16:28:28', '16:28:29', '16:28:30', '16:28:31'],
            axisLine: {
              lineStyle: {
                color: '#4e548b'
              }
            },
            axisLabel: {
              rotate: 40,
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
            // sampling: 'average',
            smooth: true,
            itemStyle: {
              color: '#fff006'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 240, 6, 0.8)'
              }, {
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }])
            },
          },
          {
            name: '内存',
            type: 'line',
            data: [52, 10, 52, 334, 330, 334, 220, 520, 10, 52, 334, 330, 334, 220, 50],
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#41f487'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(65, 244, 135, 0.8)'
              }, {
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }])
            },
          },
          {
            name: '存储',
            type: 'line',
            data: [200, 10, 52, 334, 330, 334, 20, 520, 100, 52, 34, 330, 334, 220, 50],
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#4a9df2'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(74, 157, 242, 0.8)'
              }, {
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }])
            },
          },
        ],
        legend: {
          itemWidth: 6,
          bottom: -5,
          textStyle: {
            color: '#fff',
            fontSize: 10
          },
          icon: 'circle'
        }
      }
    }
  },
  methods: {
    tabChange(tab) {
      console.log(tab)
    }
  },
}
</script>

<style scoped lang='scss'>
</style>
