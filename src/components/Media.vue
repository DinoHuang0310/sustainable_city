<template>
  <div id="media" class="area" v-if="media.mediaId">
    <div class="wrapper">
      <h2>{{ media.mediaTitle }}</h2>
      <div class="content">
        <div class="media-box">
          <iframe
            :src="`https://www.youtube.com/embed/${media.mediaId}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      default: null
    },
  },
}
</script>

<style>
#media {
  background: white;
}

</style>
