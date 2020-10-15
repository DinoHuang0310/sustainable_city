<template>
  <div id="mayors" class="area">
    <h2>首長這樣說</h2>
    <div class="mayors-box">
      <ul v-for="(listgroup, groupindex) in createListcard(denominator)" :key="listgroup.index">
        <MayorsCard v-for="(listcard, index) in listgroup" :key="listcard.index" :details="listcard" :myindex="`${groupindex}-${index}`" />
      </ul>
    </div>
  </div>
</template>

<script>
import MayorsCard from './MayorsCard'

export default {
  components: {
    MayorsCard
  },
  props: {
    mayors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      windowWidth: null,
      denominator: 2 // 每個容器render N個MayorsCard
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth !== this.windowWidth) {
        this.windowWidth = clientWidth;
        this.denominator = this.windowWidth > 480 ? 3 : 2;
      }
    },
  },
  computed: {
    createListcard() {
      return function(denominator) {
        let newobj = [];
        const myList = Math.ceil(this.mayors.length / denominator);
        for(let i = 1; i <= myList; i++) {
          let arr = [];
          for(let list = denominator * (i - 1); list < denominator * i; list++) {
            if(this.mayors[list]) arr.push(this.mayors[list]);
          }
          newobj.push(arr);
        }
        return newobj;
      }
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
#mayors {
  background: white;
}
.mayors-box > ul {
  display: flex;
}
.mayors-box > ul > li {
  width: 28%;
  margin: 1% 0;
}
.mayors-card {
  cursor: pointer;
}
.mayors-card img {
  display: block;
  width: 100%;
}
.mayors-card figcaption {
  color: white;
  background: #0094a8;
  text-align: center;
  padding: 0.4em 0.5em;
  margin-top: 2px;
}

@media screen and (min-width: 481px) {
  .mayors-box > ul:nth-child(odd) {
    justify-content: flex-start;
  }
  .mayors-box > ul:nth-child(even) {
    justify-content: flex-end;
  }
  .mayors-box > ul:nth-child(odd) li {
    margin-right: 1%;
  }
  .mayors-box > ul:nth-child(even) li {
    margin-left: 1%;
  }
}

@media screen and (max-width: 480px) {
  .mayors-box > ul {
    width: 94%;
    margin: auto;
    justify-content: space-between;
  }
  .mayors-box > ul > li {
    width: 49%;
  }
}

</style>
