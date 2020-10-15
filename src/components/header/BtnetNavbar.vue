<template>
  <div>
    <nav
      :class="showNav ? 'btnet-navbar active' : 'btnet-navbar'"
      @click="toggleNav"
    >
      <ul @click.stop>
        <BtnetNavList
          v-for="(list, index) in navList"
          :key="index"
          :node="navList[index]"
          :isMobile="isMobile"
          :toggleNav="toggleNav"
        />
      </ul>
    </nav>
    <div id="navctr" v-if="isMobile">
      <i class="fa fa-bars" @click="toggleNav" />
    </div>
  </div>
</template>

<script>
import BtnetNavList from "./BtnetNavList";
export default {
  props: {
    navList: {
      type: Array,
      required: true
    },
  },
  components: {
    BtnetNavList
  },
  data: function() {
    return {
      showNav: false,
      isMobile: null,
      windowWidth: null
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth !== this.windowWidth) {
        this.isMobile = clientWidth > 768 ? false : true;
        this.showNav = this.isMobile ? false : true;
        this.windowWidth = clientWidth;
      }
    },
    toggleNav() {
      if (this.isMobile) {
        this.showNav = !this.showNav;
        this.fixScrollbar(this.showNav);
      }
    },
    fixScrollbar(action) {
      const el = document.getElementsByTagName("html")[0];
      action ? el.classList.add('fixed') : el.classList.remove('fixed');
    }
  },
  mounted() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>

<style>
.btnet-navbar > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.facebook-share,
.line-share {
  margin-right: 0.6em;
}
.facebook-share img,
.line-share img {
  width: 50px;
}
.btnet-navbar > ul > li.facebook-share a,
.btnet-navbar > ul > li.line-share a {
  padding: 0;
}
.facebook-share {
  background: #4267b2;
}
.line-share {
  background: #00c200;
}
.btnet-navbar > ul > li a {
  position: relative;
  display: block;
  padding: 0.4em 0.8em;
  transition: .5s;
}
.btnet-navbar > ul > li {
  position: relative;
}
.btnet-navbar > ul > li li a {
  border-right: 0;
}

@media (hover: hover) {
  .btnet-navbar > ul > li a:hover {
    color: #0094a8;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .btnet-navbar > ul > li a:hover {
    color: #0094a8;
  }
}

@media screen and (max-width: 1024px) {
  .btnet-navbar ul li img {
    width: 45px;
  }
  .btnet-navbar > ul > li a {
    padding: 0.4em 0.5em;
  }
}

@media screen and (min-width: 769px) {
  .btnet-navbar > ul > li a:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 1em;
    left: 0;
    top: 50%;
    background: #505050;
    transform: translate(0px, -50%);
  }
  .btnet-navbar > ul > li.facebook-share a:before,
  .btnet-navbar > ul > li.line-share a:before,
  .btnet-navbar > ul > li:first-child a:before {
    display: none;
  }
  .btnet-navbar > ul > li:last-child a {
    border-right: none;
  }
  .btnet-navbar > ul > li a.haschild:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0 4px;
    border-color: #505050 transparent transparent transparent;
    margin-left: 0.5em;
  }
  .btnet-navbar ul ul {
    position: absolute;
    visibility: hidden;
    min-width: 100%;
    white-space: nowrap;
    text-align: left;
    opacity: 0;
    transition: .3s;
    bottom: -1px;
    transform: translate(0, 100%);
  }
  .btnet-navbar > ul > li ul.active {
    visibility: visible;
    opacity: 1;
  }
  .btnet-navbar > ul > li li a {
    padding: 0 1em;
  }
}

@media screen and (max-width: 768px) {
  .btnet-navbar ul ul {
    background: #eee;
  }
  #navctr {
    margin: 5px 10px 5px;
  }
  #navctr i {
    font-size: 40px;
    width: 40px;
    text-align: center;
  }
  nav.btnet-navbar {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    text-align: right;
    margin: 0;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    transform: translate(100%, 0);
    z-index: 100;
  }
  nav.btnet-navbar.active,
  .btnet-navbar.active > ul
  {
    transform: translate(0, 0);
  }
  .btnet-navbar > ul {
    display: inline-block;
    background: white;
    padding-top: 20px;
    width: auto;
    min-width: 45%;
    max-width: 80%;
    height: 100%;
    overflow-y: auto;
    transform: translate(100%, 0);
    transition: .5s;
  }
  .btnet-navbar > ul > li a {
    padding: 0.6em 1.5em;
    border-bottom: solid 1px #ddd;
  }
  .btnet-navbar > ul > li a.haschild:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0 4px;
    border-color: #2c3e50 transparent transparent transparent;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-8px, 20px);
  }
  .btnet-navbar > ul > li ul {
    display: none;
  }
  .btnet-navbar > ul > li ul.active {
    display: block;
  }
  .btnet-navbar > ul > li.line-share,
  .btnet-navbar > ul > li.facebook-share {
    display: inline-block;
    width: auto;
    margin: 10px 10px 10px 0;
  }
  .btnet-navbar > ul > li.line-share a,
  .btnet-navbar > ul > li.facebook-share a {
    padding: 0;
  }
}

</style>
