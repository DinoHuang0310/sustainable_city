<template>
  <div>
    <h2 style="color: #ffa300">六都永續評比數據指標</h2>
    <p>本調查結合數據指標、民意調查結果與專家評論，評比總分計算方式為50%×數據指標+ 40%×民意調查+ 10%×專家建議評分。數據指標以官方公開數據為依據。</p>
    <ul class="switch-tabs">
      <li v-for="(list, index) in tabs" :key="index">
        <input :id="`tab${index}`" type="radio" :value="list" v-model="active" @change="setChartOption()" />
        <label :for="`tab${index}`">{{ list }}</label>
      </li>
    </ul>
    <h3 style="color: #ffa300">{{ active }}</h3>
    <div class="content">
      <div class="chartbox-bar">
        <ECharts :options="bar" autoresize />
      </div>
      <p>{{ description }}</p>
      <div v-if="chartdata_statistics.url">
        <a class="button" target="blank" :href="chartdata_statistics.url" style="background: #ffa300">觀看全文</a>
      </div>
    </div>
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
  props: {
    chartdata_statistics: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: this.chartdata_statistics.details[0].name,
      tabs: this.getTabs(),
      bar: null,
      description: null
    }
  },
  methods: {
    getTabs() {
      let arr = [];
      this.chartdata_statistics.details.forEach(element => {
        arr.push(element.name)
      });
      return arr;
    },
    formatter(val) {
      switch (val) {
        case 6:
          return '第一名';
        case 5:
          return '第二名';
        case 4:
          return '第三名';
        case 3:
          return '第四名';
        case 2:
          return '第五名';
        case 1:
          return '第六名';
      }
    },
    getListData(target) {
      const targetdata = this.chartdata_statistics.details.filter(item => {
        return item.name === target;
      });
      return targetdata[0].value;
    },
    getDescription(target) {
      const targetdata = this.chartdata_statistics.details.filter(item => {
        return item.name === target;
      });
      return targetdata[0].description;
    },
    setChartOption() {
      const self = this;
      this.bar = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(params) {
            return `${self.formatter(params[0].data)}: ${params[0].name}`;
          }
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
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        yAxis: {
          type: 'category',
          data: ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市']
        },
        series: [
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                offset: [-5, 0],
                textStyle: {
                  // fontSize: 16
                },
                formatter: function(params) {
                  return self.formatter(params.data)
                }
              }
            },
            data: this.getListData(this.active),
            itemStyle: {
              normal: {
                color: '#ffa300' // 設定柱狀顏色
              }
            }
          }
        ]
      }
      this.description = this.getDescription(this.active);
    }
  },
  mounted() {
    this.setChartOption();
  }
}
</script>
