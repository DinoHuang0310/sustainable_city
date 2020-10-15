<template>
  <div>
    <h2>六都永續評比民調結果</h2>
    <p>本調查結合數據指標、民意調查結果與專家評論，評比總分計算方式為50%×數據指標+ 40%×民意調查+ 10%×專家建議評分。民意調查則委託時勢公司，依2020年政府最新人口統計，進行性別、年齡配置樣本，並以網路問卷之形式，六都各訪350份（信賴水準95%，抽樣誤差±5.24%），共2,100份有效回答。</p>
    <p>此外，問卷調查時間為8月7日～8月28日，正值高雄市長罷免補選，新任市長陳其邁於8月24日上任。</p>
    <ul class="switch-tabs">
      <li v-for="(list, index) in tabs" :key="index">
        <input :id="`tab${index}`" type="radio" :value="list" v-model="active" @change="setChartOption()" />
        <label :for="`tab${index}`">{{ list }}</label>
      </li>
    </ul>
    <h3>{{ active }}</h3>
    <div class="content">
      <div class="chartbox-mixbar">
        <ECharts :options="bar" autoresize />
      </div>
      <p>{{ description }}</p>
      <div v-if="chartdata_poll.url">
        <a class="button" target="blank" :href="chartdata_poll.url">觀看全文</a>
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
    chartdata_poll: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: this.chartdata_poll.details[0].name,
      tabs: this.getTabs(),
      bar: null,
      description: null
    }
  },
  methods: {
    getTabs() {
      let arr = [];
      this.chartdata_poll.details.forEach(element => {
        arr.push(element.name);
      });
      return arr;
    },
    getKeyWords(target) {
      const targetdata = this.chartdata_poll.details.filter(item => {
        return item.name === target;
      });
      return targetdata[0].keyword;
    },
    getListData(target) {
      let arr =[];
      const targetdata = this.chartdata_poll.details.filter(item => {
        return item.name === target;
      });
      for(let i = 0; i < targetdata[0].keyword.length; i++) {
        arr.push(
          {
            name: targetdata[0].keyword[i],
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight',
              formatter: `{c}${this.chartdata_poll.unit}`
            },
            data: targetdata[0].value[i],
            // barWidth: 50,
          }
        );
      }
      return arr;
    },
    getDescription(target) {
      const targetdata = this.chartdata_poll.details.filter(item => {
        return item.name === target;
      });
      return targetdata[0].description;
    },
    setChartOption() {
      this.bar = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        legend: {
            data: this.getKeyWords(this.active)
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: `{value}${this.chartdata_poll.unit}`
            },
            max: 100
        },
        yAxis: {
            type: 'category',
            data: ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市']
        },
        series: this.getListData(this.active),
        color: ['#0094a8', '#ffa300', '#9aaf00', '#a0a0a0']
      };
      this.description = this.getDescription(this.active)
    }
  },
  mounted() {
    this.setChartOption();
  }
}
</script>
