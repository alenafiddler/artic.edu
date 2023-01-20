<template>
  <li class="artworks-list__item">
    <div class="artworks-list__item-image">
      <img
        v-lazyload
        :data-src="this.url"
        :src="getPicture"
        :alt="getImgAlt"
      />
    </div>
    <p class="artworks-list__item-title"></p>
    <div>
      {{item.title}}
    </div>
    <p></p>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import lazyload from "~/directives/lazyload";
import {ItemArtwork} from "~/types";
@Component({
  directives: { lazyload }
})
export default class ArtworksItem extends Vue {
  @Prop() item!: ItemArtwork

  get getPicture() {
    return this.$props?.item?.thumbnail?.lqip ?? null
  }

  get url():string {
    return `https://www.artic.edu/iiif/2/${this.$props?.item?.image_id}/full/843,/0/default.jpg`;
  }

  get getImgAlt() {
    return this.$props?.item?.thumbnail?.alt_text ?? ''
  }
}

</script>

<style lang="scss" scoped>
.artworks-list__item-image {
  margin-bottom: 5px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.artworks-list__item-title {
  font-size: 12px;
  line-height: 1;
  color: #FF473A;
}
</style>
