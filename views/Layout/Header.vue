<template>
  <header>
    <a>
      <img src="~/assets/logo.svg" width="51" height="32" alt="Art Logo"/>
    </a>
    <h1>Artworks</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}

</script>

<style scoped>

</style>
