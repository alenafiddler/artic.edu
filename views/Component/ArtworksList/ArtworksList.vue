<template>
  <div>
    <ul class="artworks-list" v-if="data.length">
      <ArtworksItem v-for="(item,key) in data" :key="`poster-${item.image_id}`" :item = item />
    </ul>
    <div class="error-list" v-else>
      <h2>Nothing found</h2>
    </div>
    <infinite-loading v-if="data.length" spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArtworksItem from "~/views/Component/ArtworksList/ArtworksItem.vue";
import axios from "axios";
import {ItemArtwork} from "~/types";
@Component({
  components: { ArtworksItem }
})
export default class ArtworksList extends Vue {
  private data:ItemArtwork[] = []
  private page = 1

  async fetchData(search?: string) {
    let searchLine = search ? search.trim().toLowerCase() : ''
    let currentUrl = searchLine.length ? this.url + '&q='+ searchLine : this.url
    const response = await axios.get(currentUrl);
    this.data = response.data?.data;
  }
  infiniteScroll($state:any) {
    setTimeout(() => {
      this.page++;
      axios
        .get(this.url)
        .then(response => {
          const { data } = response
          if (data?.data.length > 1) {
            data?.data.forEach((item:ItemArtwork) => this.data.push(item));
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, 500);
  }

  get url():string {
    return "https://api.artic.edu/api/v1/artworks/search?fields=id,title,thumbnail,image_id&page=" + this.page+ "&limit=6";
  }

  mounted() {
    this.fetchData();
    this.$root.$on('searchLineChange', (evt: string) => {
      this.fetchData(evt)
    })
  }
}

</script>

<style scoped>
.artworks-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.infinite-loading-container {
  clear: both;
  text-align: center;
}
.error-list{
  text-align: center;
}
</style>
