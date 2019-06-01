<template>
  <v-footer height="auto" class="f">
    <v-layout column>
      <v-layout row justify-center>
        <v-card flat dark class="my-4 mx-3 px-4 py-3 rounded-corner" min-width="270" v-for="cat in categories" v-bind:key="cat.id">
          <v-layout column align-center>
            <v-card-title class="title grey--text text--lighten-2" >{{cat.name}}</v-card-title>
            <v-card-actions v-for="item in cat.links" v-bind:key="item.id">
              <v-btn class="text-none grey--text text--lighten-1" flat round target="blank" :href="item.href" :to="item.to" v-if="item.name">
                {{item.name}}
              </v-btn>
              <v-btn class="text-none grey--text text--lighten-1" flat icon target="blank" :href="item.href" :to="item.to" v-if="item.icon">
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-layout>
      <v-flex py-2 px-4 text-xs-right white--text xs12  class="f-bottom caption">
          <v-spacer></v-spacer>
          My Ecoidea, Association déclaré loi 1901, Copyright &copy; {{ new Date().getFullYear() }}
          <v-spacer></v-spacer>
        </v-flex>
    </v-layout>
  </v-footer>
</template>
<style src="./footer.css"></style>
<script src="./footer.js"></script>
