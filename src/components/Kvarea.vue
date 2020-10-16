<template>
  <div id="kv_area">
    <div class="wrapper">
      <div class="kv-article-area">
        <div class="kv-center" :class="loading ? null : 'show'">
          <p>尋找對下一代最好的家園</p>
          <h1><img src="../assets/images/title.png" alt="2020永續城市" @load="imgLoaded" /></h1>
          <img src="../assets/images/city_background.jpg" alt="" style="display: none" @load="imgLoaded" />
          <p>─台灣首次六都永續城市SDGs大調查─</p>
        </div>
      </div>
      <div class="kv-article-area">
        <p>「SDGs(Ｓustainable Development Ｇoals)已經成為國際間共通語言。」經常參與國際交流的行政院數位政委唐鳳發現這兩年新趨勢：象徵「永續發展」的指標---SDGs，是熱門關鍵字，更是城市新顯學！</p>
      </div>
      <div class="kv-article-area">
        <p>原本是「國家」級努力目標，卻在這兩年在城市間興起，紐約市首先響應，成為第一個回應聯合國永續發展目標的地方政府，他們自動發布紐約城市的永續政策作為。而你知道，這二十個都市是哪些城市？其中，是否有台灣在內？可能出乎你意料之外，台灣就佔了三個，新北市、台北與桃園。以積極度來看，台灣跟世界城市相比，絕對排得上前段班。</p>
      </div>
      <div class="kv-article-area">
        <p>今周刊與第三方獨立民調機構&lt;時勢調查&gt;共同合作，分指標數據、問卷調查及政策評分三面向評分。指標數據選擇以聯合國十七項永續發展目標為基礎，加上&lt;時勢調查&gt;進行民意問卷，與綠色和平基金會擔任專家顧問，評比六都政策的積極度與透明度，最後綜合評比出「最佳永續發展城市」獎。</p>
      </div>
    </div>
    <transition name="fade">
      <div class="loading" v-if="loading">
        <img src="../assets/images/loading.svg" alt="loading..." />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      imgLoader: 0
    }
  },
  methods: {
    imgLoaded() {
      this.imgLoader = this.imgLoader + 1;
      if(this.imgLoader >= 2) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    }
  }
}
</script>

<style>
#kv_area {
  color: white;
  padding-top: 50vh;
  text-align: center;
  letter-spacing: 0.2em;
}
.kv-center {
  opacity: 0;
  transform: translate(0, -50%) scale(.75);
  transition: .7s;
}
.kv-center.show {
  transform: translate(0, -50%) scale(1);
  opacity: 1;
}
#kv_area h1 {
  max-width: 800px;
  margin: 0 auto 0.5em auto;
}
#kv_area h1 img {
  display: block;
  width: 100%;
}
#kv_area p {
  line-height: 2;
  text-shadow: 0 0 5px black;
}
.kv-article-area {
  padding-bottom: 10vh;
}
.loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 999;
}
#kv_area .loading img {
  display: inline-block;
  width: 50px;
  height: 50px;
  -webkit-animation: setRotate 2s linear infinite;
  -moz-animation: setRotate 2s linear infinite;
  animation: setRotate 2s linear infinite;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  /* ie background mask */
  #kv_area {
    background: rgba(0, 0, 0, .55);
  }
}

@media screen and (max-width: 1600px) {
  #kv_area h1 {
    max-width: 600px;
  }
}

@media screen and (max-width: 1024px) {
  #kv_area h1 {
    max-width: 500px;
  }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  #kv_area h1 {
    width: 45%;
  }
}


@media screen and (max-width: 480px) {
  #kv_area p {
    font-size: 4.4vw;
    letter-spacing: .1em;
  }
  #kv_area h1 {
    width: 100%;
  }
}

</style>
