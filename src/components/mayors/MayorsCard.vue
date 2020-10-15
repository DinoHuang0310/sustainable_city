<template>
  <li>
    <figure class="mayors-card" @click="show(`nob${$attrs.myindex}`)">
      <div>
        <img :src="details.image" :alt="details.name">
      </div>
      <figcaption>{{ details.name }}</figcaption>
    </figure>
    <!-- popup box -->
    <modal
      :name="`nob${$attrs.myindex}`"
      width="90%"
      height="70%"
      @closed="closed"
    >
      <div slot="top-right">
        <button
          class="closebox"
          @click="$modal.hide(`nob${$attrs.myindex}`)"
        >
          <i class="far fa-times-circle" />
        </button>
      </div>
      <div>
        <div v-if="details.mediaId" class="media-box">
          <iframe
            :src="`https://www.youtube.com/embed/${details.mediaId}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div v-else class="mayors-details-imgbox" :style="{'backgroundImage': `url('${details.image}')`}" />
        <div class="mayors-details-content">
          <h3>{{ details.name }}</h3>
        </div>
        <p
          v-for="descriptionList in details.description"
          :key="descriptionList.index"
        >
          {{ descriptionList }}
        </p>
        <div v-if="details.url" style="text-align: center">
          <a class="button" target="blank" :href="details.url">觀看全文</a>
        </div>
      </div>
    </modal>
  </li>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  methods: {
    show(target) {
      this.$modal.show(target);
      const el = document.getElementsByTagName("html")[0];
      el.classList.add('fixed');
    },
    closed() {
      const el = document.getElementsByTagName("html")[0];
      el.classList.remove('fixed');
    }
  }
}
</script>

<style>
#app .vm--overlay {
  background: rgba(0, 0, 0, .7);
}
#app .vm--modal {
  max-width: 900px;
  max-height: 900px;
  left: 0 !important;
  top: 0 !important;
  right: 0;
  bottom: 0;
  border-top: solid 8px #0094a8;
  padding: 2em;
  position: absolute !important;
  margin: auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.vm--top-right-slot button.closebox {
  background: none;
  color: white;
  font-size: 50px;
  padding: 0;
  margin: 0.4em;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: none;
  opacity: 1;
  transition: .5s;
}
.mayors-card div {
  position: relative;
  padding-bottom: 45%;
  overflow: hidden;
}
.mayors-card div img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.media-box {
  position: relative;
  padding-bottom: 56.25%;
}
.media-box iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.mayors-details-imgbox {
  width: 35%;
  padding-bottom: 35%;
  margin: auto;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}
.mayors-details-content {
  margin-top: 1em;
}
.mayors-details-content h3 {
  color: #505050;
  text-align: center;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  #app .vm--modal {
    min-width: 800px;
    min-height: 600px;
  }
}

@media (hover: hover) {
  .vm--top-right-slot button.closebox:hover {
    opacity: .5;
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .vm--top-right-slot button.closebox:hover {
    opacity: .5;
  }
}

@media screen and (max-width: 1280px) {
  #app .vm--modal {
    max-width: 760px;
  }
}

@media screen and (max-width: 480px) {
  #app .vm--modal {
    padding: 1em;
  }
  .mayors-card div {
    padding-bottom: 65%;
  }
  .mayors-details-imgbox {
    width: 50%;
    padding-bottom: 50%;
  }
}

</style>
