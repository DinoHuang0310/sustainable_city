<template>
  <div class="ranking-content">
    <div :class="viewStyle">
      <div v-if="viewStyle === 'block'" class="ranking-tag" style="text-align: center">
        <div><span>{{ ranking.tagname }}</span></div>
        <div><h3>{{ ranking.title }}</h3></div>
      </div>
      <div class="ranking-img">
        <div :style="{backgroundImage: `url('${ranking.image}')`}" />
      </div>
      <article>
        <div v-if="viewStyle === 'flex'" class="ranking-tag">
          <div><span>{{ ranking.tagname }}</span></div>
          <div><h3>{{ ranking.title }}</h3></div>
        </div>
        <div v-html="ranking.content" />
        <div class="chartbox-mixbar" v-if="ranking.chartdata">
          <ECharts :options="bar" autoresize />
        </div>
        <div v-if="ranking.url" class="rankingbutton">
          <a :href="ranking.url" target="blank" class="button">觀看全文</a>
        </div>
      </article>
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
    ranking: {
      type: Object,
      required: false
    },
    viewStyle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bar: null
    }
  },
  methods: {
    getListData() {
      let arr = [];
      const { chartdata } = this.ranking;
      for(let i = 0; i < chartdata.keyword.length; i++) {
        arr.push(
          {
            name: chartdata.keyword[i],
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight',
              formatter: `{c}${chartdata.unit}`
            },
            data: chartdata.value[i],
            // barWidth: 50,
          }
        )
      }
      return arr;
    }
  },
  mounted() {
    if(this.ranking.chartdata) {
      const chartdata = this.ranking.chartdata;
      this.bar = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
        },
        legend: {
          // data: this.ranking.keyword
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
            formatter: function(value) {
              if(value > 10000) {
                return `${value / 10000}萬`;
              }
              return `${value}${chartdata.unit}`;
            }
          },
          max: chartdata.max
        },
        yAxis: {
          type: 'category',
          data: ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市']
        },
        series: this.getListData(),
        color: ['#0094a8', '#ffa300', '#9aaf00', '#a0a0a0']
      }
    }
  }
}
</script>
