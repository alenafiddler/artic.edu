<template>
  <div>
  <Header />
  <main>
    <section>
      <SearchLine />
      <ArtworksList />
    </section>
  </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchLine from "~/views/Component/SearchLine.vue";
import ArtworksList from "~/views/Component/ArtworksList/ArtworksList.vue";
import Header from "~/views/Layout/Header.vue";
@Component({
  components: {ArtworksList, SearchLine, Header}
})
export default class Layout extends Vue {
  private searchingLine:string = ''
  changeDataMode(searchString: string) {
    console.log(searchString)
    this.searchingLine = searchString
  }
}

</script>

<style scoped>

</style>
