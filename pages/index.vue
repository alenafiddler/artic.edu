<template>
  <Layout/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from "~/views/Layout/Layout.vue";

@Component({
  components: {Layout},
})
export default class IndexPage extends Vue {}
</script>

<style>
@import "styles/globals.css";
</style>
