<template>
  <div class="search">
    <input type="search" placeholder="Search for artworks" @input="setSearchLine" v-model="line"/>
    <img src="~/assets/search.svg" alt="Search for artworks" v-if=""/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SearchLine extends Vue {
  private line: string = ''
  private timeout: any

  setSearchLine() {
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.$root.$emit('searchLineChange', this.line)
    }, 1500)
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  margin-bottom: 20px;
  & svg, img{
    position: absolute;
    right: 15px;
    top: 15px;
  }
  & input {
    border: 2px solid #FF473A;
    width: 100%;
    padding: 14px 10px;
    font-size: 18px;
    line-height: 1;
    color: #FF473A;
    outline: none;
    &::placeholder{
      font-size: 18px;
      line-height: 1;
      color: #FF473A;
    }
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
}
</style>
