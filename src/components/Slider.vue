<template>
  <div>
    <Slick class="nav-slider" ref="slick2" :options="slickNavOptions">
      <div>nav-1</div>
      <div>nav-2</div>
      <div>nav-3</div>
      <div>nav-4</div>
    </Slick>
    <p>&nbsp;</p>
    <Slick class="main-slider" ref="slick" :options="slickOptions">
      <div class="slider-list">1</div>
      <div class="slider-list">2</div>
      <div class="slider-list">3</div>
      <div class="slider-list">4</div>
    </Slick>
  </div>
</template>
<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        asNavFor: '.nav-slider'
      },
      slickNavOptions: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        asNavFor: '.main-slider'
      }
    };
  },
}
</script>

<style>
.slider-list {
  padding: 1em 0;
  margin: 1em 0;
  color: white;
  background: #666;
}
.slick-slide:nth-child(odd) .slider-list {
  background: blue;
}

/* nav */
.nav-slider .slick-list {
  display: none;
}
.nav-slider .slick-active button {
  background: red;
}
</style>
