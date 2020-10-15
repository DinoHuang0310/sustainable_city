<template>
  <div class="ranking" :id="modleId">
    <div class="ranking-title">
      <div class="content">
        <h2>{{ title }}</h2>
        <Slick class="nav-slider" :id="`nav-${modleId}`" :options="slickNavOptions">
          <div v-for="content in ranking.rankingList" :key="content.index">{{ content.tagname }}</div>
        </Slick>
      </div>
    </div>
    <div class="ranking-body">
      <div class="wrapper">
        <div class="content">
          <section>
            <Slick class="main-slider" :id="`slider-${modleId}`" :options="slickOptions">
              <RankingContent
                v-for="contentlist in ranking.rankingList"
                :key="contentlist.index"
                :ranking="contentlist"
                :viewStyle="viewStyle"
              />
            </Slick>
          </section>
          <div v-if="ranking.url" class="rankingbutton">
            <a :href="ranking.url" target="blank" class="button">觀看全文</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import RankingContent from './RankingContent'

export default {
  components: {
    Slick,
    RankingContent
  },
  props: {
    viewStyle: {
      type: String,
      required: true
    },
    ranking: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    modleId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed : 3000,
        adaptiveHeight: true,
        asNavFor: `#nav-${this.modleId}`
      },
      slickNavOptions: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        asNavFor: `#slider-${this.modleId}`,
        customPaging: function(slick, index) {
          return slick.$slides[index].innerText;
        }
      }
    };
  }
}
</script>

<style>
.ranking {
  overflow: hidden;
}
.ranking-title {
  position: relative;
  padding-bottom: 30%;
}
.ranking-title > div {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ranking-title h2 {
  color: white;
  white-space: nowrap;
}
.ranking-body {
  background: #faf6f3;
}
.ranking-body section {
  background: white;
  padding: 2em;
  transform: translate(0, -10vw);
}
.ranking-body section + .rankingbutton {
  transform: translate(0, -10vw);
}
.ranking-content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1em;
}
.ranking-tag span {
  display: inline-block;
  color: white;
  background: #0094a8;
  padding: 0.2em 0.6em;
}
/* 跟隨h2規格 */
.ranking-tag h3 {
  display: inline-block;
  color: #505050;
  font-size: 2vw;
  font-weight: 500;
  text-indent: 0.2em;
}
.ranking-img div {
  padding-bottom: 30%;
  background-size: cover;
  background-position: center;
}
.ranking-content article {
  margin-top: 2em;
}
/* viewStyle=flex */
.ranking-content .flex {
  display: flex;
  justify-content: space-between;
}
.ranking-content .flex .ranking-tag h3 {
  text-indent: 0;
}
.ranking-content .flex .ranking-img {
  width: 36%;
}
.ranking-content .flex .ranking-img div {
  padding-bottom: 75%;
}
.ranking-content .flex article {
  width: 60%;
  margin-top: 0;
}
.ranking-content .flex article a.button {
  margin-bottom: 0;
}
.rankingbutton {
  text-align: center;
}
.ranking-content table {
  width: 100%;
  border-collapse: collapse;
}
.ranking-content th,
.ranking-content td {
  padding: 0.4em 0.6em;
  border: solid 1px #ccc;
}
.ranking-content thead th {
  background: #0094a8;
  color: white;
}

/* slick */
.ranking .slick-arrow {
  position: absolute;
  top: 50%;
  font-size: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
}
.ranking .slick-arrow::before {
  display: block;
  width: 40px;
  font-size: 50px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  line-height: 1;
}
.ranking .nav-slider .slick-list {
  display: none;
}
.ranking .nav-slider .slick-dots {
  text-align: center;
}
.ranking .nav-slider .slick-dots li {
  display: inline-block;
  cursor: pointer;
  background: white;
  padding: 0.2em 0.6em;
  margin: 0 0.5em;
  transition: .5s;
  opacity: .6;
}
.ranking .nav-slider .slick-dots li.slick-active {
  opacity: 1;
}

/* chart */
.chartbox-sm {
  position: relative;
  padding-bottom: 20%;
}

@media (hover: hover) {
  .ranking .nav-slider .slick-dots li:hover {
    opacity: 1;
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .ranking .nav-slider .slick-dots li:hover {
    opacity: 1;
  }
  /* ie background mask */
  .ranking-title {
    background: rgba(0, 0, 0, .5);
  }
}

@media screen and (max-width: 1440px) {
  .ranking-tag h3 {
    font-size: 2.4vw;;
  }
}

@media screen and (max-width: 1024px) {
  .ranking-title {
    padding-bottom: 35%;
  }
  .chartbox-sm {
    padding-bottom: 25%;
  }
  .ranking-tag h3 {
    font-size: 3vw;;
  }
}

@media screen and (max-width: 768px) {
  .ranking-title {
    padding-bottom: 40%;
  }
  .ranking-tag h3 {
    font-size: 3.6vw;;
  }
}

@media screen and (min-width: 768px) {
  .ranking-content .flex .rankingbutton {
    text-align: right;
  }
}

@media screen and (max-width: 767px) {
  .ranking-content .flex {
    display: block;
  }
  .ranking-content .flex .ranking-img,
  .ranking-content .flex article {
    width: 100%;
  }
  .ranking-content .flex .ranking-img div {
    padding-bottom: 30%;
  }
  .ranking-content .flex article {
    margin-top: 2em;
  }
}

@media screen and (max-width: 720px) {
  .ranking-tag h3 {
    font-size: 4.5vw;;
  }
  .chartbox-sm {
    padding-bottom: 30%;
  }
}

@media screen and (max-width: 480px) {
  .ranking-body section {
    padding: 0.5em;
    transform: translate(0, -20vw);
  }
  .ranking-body section + .rankingbutton {
    transform: translate(0, -20vw);
  }
  .ranking-content article,
  .ranking-content .flex article {
    margin-top: 1em;
  }
  .ranking-content {
    padding: 0.5em;
  }
  .ranking-img div,
  .ranking-content .flex .ranking-img div {
    padding-bottom: 60%;
  }
  .ranking-title {
    padding-bottom: 70%;
  }
  .chartbox-sm {
    padding-bottom: 40%;
  }
  .ranking-tag h3 {
    font-size: 7vw;;
  }

  /* slick-reset */
  .ranking-body .slick-next {
    transform: translate(70%, -50%);
  }
  .ranking-body .slick-prev {
    transform: translate(-70%, -50%);
  }

}

</style>
