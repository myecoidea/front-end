<template>
<v-app v-bind:dark="$store.getters.darkTheme">
  <link href="'https://fonts.googleapis.com/css?family=Sriracha'">
  <Header></Header>
  <v-content style="margin-bottom: 50px;">
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-content>
  <Footer></Footer>
</v-app>
</template>
<script>
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
