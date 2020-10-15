<template>
  <div id="app">
    <Header v-if="data" :navList="data.navList" />
    <Kvarea />
    <SwitchBox v-if="data" :chartdata_poll="data.chartdata_poll" :chartdata_statistics="data.chartdata_statistics" />
    <Ranking
      v-if="data"
      :ranking="data.ranking"
      viewStyle="block"
      modleId="first"
      title="永續城市大調查"
    />
    <Media v-if="data" :media="data.media" />
    <Ranking
      v-if="data"
      :ranking="data.specialAwards"
      viewStyle="flex"
      modleId="second"
      title="特殊獎項"
    />
    <Mayors v-if="data" :mayors="data.mayors" />
    <Report v-if="data" :slider="data.slider" />
    <BtnetFooter v-if="data" :downloadFile="data.downloadFile" />
  </div>
</template>

<script>
import Header from './components/header/Header'
import Kvarea from './components/Kvarea'
import SwitchBox from './components/switchbox/SwitchBox'
import Ranking from './components/ranking/Ranking'
import Media from './components/Media'
import Mayors from './components/mayors/Mayors'
import Report from './components/report/Report'
import BtnetFooter from './components/BtnetFooter'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Kvarea,
    SwitchBox,
    Ranking,
    Media,
    Mayors,
    Report,
    BtnetFooter
  },
  data() {
    return {
      data: null,
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    axios.get(`${this.publicPath}data.json?${new Date().getTime()}`).then(response => {
      this.data = response.data;
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>

<style src='./assets/css/style.css'></style>
<style>
@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  #app {
    position: relative;
    z-index: 1;
  }
}
</style>
