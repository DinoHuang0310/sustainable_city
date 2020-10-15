<template>
  <div id="report" class="area" v-if="slider.length">
    <div class="report-box">
      <h2>城市領航家<br>隱形冠軍企業推永續</h2>
      <BtnetSlider :sliderData="slider" sliderName="slider" />
    </div>
  </div>
</template>

<script>
import BtnetSlider from './BtnetSlider'

export default {
  components: {
    BtnetSlider
  },
  props: {
    slider: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
#report {
  overflow: hidden;
  background: white;
}
.report-box {
  padding: 2em 2%;
}
.report-box h3 {
  text-align: center;
  font-size: 1.4em;
  margin: 0 0 0.5em;
}

</style>
