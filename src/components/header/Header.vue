<template>
  <header>
    <ul>
      <li>
        <a href="https://www.businesstoday.com.tw/" target="_blank">
          <img class="businesstoday" src="../../assets/images/businesstoday.svg" alt="今周刊" />
        </a>
      </li>
      <li>
        <a href="https://esg.businesstoday.com.tw/" target="_blank">
          <img class="thebetteraging" src="../../assets/images/esg.svg" alt="esg" />
        </a>
      </li>
    </ul>
    <BtnetNavbar :navList="navList" />
  </header>
</template>

<script>
import BtnetNavbar from './BtnetNavbar.vue'

export default {
  components: {
    BtnetNavbar,
  },
  props: {
    navList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 99;
}
header > ul {
  display: flex;
}
header > ul li {
  margin: 0.4em;
}
header img {
  display: block;
}
.businesstoday {
  width: 80px;
}
.thebetteraging {
  width: 140px;
}

@media screen and (max-width: 1024px) {
  .businesstoday {
    width: 60px;
  }
  .thebetteraging {
    width: 100px;
  }
}

</style>
