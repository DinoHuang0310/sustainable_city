<template>
  <div id="switch-box" class="area">
    <div class="wrapper">
      <div class="switch-area">
        <input type="radio" id="one" value="1" v-model="switchOn">
        <input type="radio" id="two" value="2" v-model="switchOn">
        <label for="one" :style="{color: switchOn === '1' ? '#0094a8' : null}">民調結果</label>
        <div
          id="switch-button"
          :class="switchOn === '1' ? 'one' : 'two'"
          @click="handleToggle"
        />
        <label for="two" :style="{color: switchOn === '2' ? '#ffa300' : null}">硬指標排名</label>
      </div>
      <div class="switch-section">
        <SwitchOne class="one" v-if="switchOn === '1'" :chartdata_poll="chartdata_poll" />
        <SwitchTwo class="two" v-if="switchOn === '2'" :chartdata_statistics="chartdata_statistics" />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchOne from './SwitchOne';
import SwitchTwo from './SwitchTwo';

export default {
  components: {
    SwitchOne,
    SwitchTwo
  },
  props: {
    chartdata_poll: {
      type: Object,
      required: true
    },
    chartdata_statistics: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      switchOn: '1',
    }
  },
  methods: {
    handleToggle() {
      this.switchOn = this.switchOn === '1' ? '2' : '1';
    }
  }
}
</script>

<style>
#switch-box {
  background: white;
  text-align: center;
}
.switch-area {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
}
.switch-area input {
  display: none;
}
.switch-area label {
  color: #a0a0a0;
  cursor: pointer;
  transition: .5s;
}
#switch-button {
  position: relative;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px;
  cursor: pointer;
  overflow: hidden;
  transition: .5s;
}
#switch-button::after {
  content: '';
  position: absolute;
  width: 34px;
  height: 34px;
  top: 3px;
  border-radius: 50%;
  background: white;
  transition: .5s;
}
#switch-button.one,
.switch-section .one .switch-tabs input:checked + label {
  background: #0094a8;
}
#switch-button.one::after {
  left: 3px;
  box-shadow: 3px 0 8px rgba(0, 0, 0, .4);
}
#switch-button.two,
.switch-section .two .switch-tabs input:checked + label {
  background: #ffa300;
}
#switch-button.two::after {
  left: 53px;
  box-shadow: -3px 0 8px rgba(0, 0, 0, .4);
}
.switch-section {
  margin-top: 2em;
}
.switch-section .switch-tabs {
  display: flex;
  justify-content: center;
  margin: 2em auto;
  flex-wrap: wrap;
}
.switch-section .switch-tabs label {
  display: inline-block;
  margin: 0.2em 0.3em;
  color: white;
  background: #a0a0a0;
  padding: 0.2em 0.5em;
  cursor: pointer;
  transition: .5s;
}
.switch-section .switch-tabs input {
  display: none;
}
.one, .two {
  -webkit-animation-duration: .8s;
  animation-duration: .8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

/* chart */
.chartbox-mixbar {
  position: relative;
  padding-bottom: 40%;
}
.chartbox-bar {
  position: relative;
  padding-bottom: 30%;
}
.echarts {
  position: absolute;
  width: 100%;
  height: 100%;
}

@media (hover: hover) {
  .switch-section .one .switch-tabs label:hover {
    background: #0094a8;
  }
  .switch-section .two .switch-tabs label:hover {
    background: #ffa300;
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .switch-section .one .switch-tabs label:hover {
    background: #0094a8;
  }
  .switch-section .two .switch-tabs label:hover {
    background: #ffa300;
  }
}

@media screen and (max-width: 1024px) {
  .chartbox-mixbar {
    padding-bottom: 50%;
  }
  .chartbox-bar {
    padding-bottom: 40%;
  }
}

@media screen and (max-width: 768px) {
  .chartbox-mixbar {
    padding-bottom: 60%;
  }
  .chartbox-bar {
    padding-bottom: 50%;
  }
}

@media screen and (max-width: 480px) {
  .chartbox-mixbar {
    padding-bottom: 100%;
  }
  .chartbox-bar {
    padding-bottom: 80%;
  }
}

</style>
