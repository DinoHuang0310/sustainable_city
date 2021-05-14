<template>
  <div id="report" class="area" v-if="slider.length">
    <div class="report-box" v-if="slider">
      <h2>城市領航家<br>隱形冠軍企業推永續</h2>
      <BtnetSlider :sliderData="slider" />
    </div>
    <div id="slider2" class="report-box" v-if="slider2">
      <h2>特別專題<br>借鏡國際典範城市</h2>
      <BtnetSlider :sliderData="slider2" />
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
    },
    slider2: {
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
