<template>
  <div class="bar">
    <ECharts :options="bar" autoresize/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import 'echarts/lib/chart/bar'

export default {
  components: {
    ECharts
  },
  data () {
    return {
      bar: {
        tooltip: {
					trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: "{b} : {c}%"
				},
				legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          splitLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          axisLine: {show: false}
        },
				yAxis: {
          type: 'category',
          data: ['綠能科技','生技製藥','運動休閒','營建','醫材健康照護'],
          axisLabel: {
            textStyle: {
              fontSize: 18
            }
          },
				},
        series: [
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right',
                offset: [10, 0],
                textStyle: {
                  fontSize: 18
                },
                formatter: '{c}%'
              }
            },
            data: [12, 14, 20, 22, 28],
            barWidth: 30,
            color: '#0094a8'
          },
        ],
        animationDuration: 2000
      }
    }
  },
}
</script>

<style>
.bar {
  position: relative;
  padding-bottom: 30%;
}
.pie {
  position: relative;
  width: 60%;
  padding-bottom: 60%;
  margin: 0 auto;
}
.echarts {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
