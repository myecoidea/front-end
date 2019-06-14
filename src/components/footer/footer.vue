<template>
  <v-footer height="auto" class="f" dark>
    <v-layout column>
      <v-layout :class="{'column pb-4': $vuetify.breakpoint.smAndDown, 'row': $vuetify.breakpoint.smAndUp}" justify-center>
        <v-card flat class="rounded-corner" :class="{'ma-3 py-3': $vuetify.breakpoint.smAndDown, 'my-4 mx-3 px-4 py-3': $vuetify.breakpoint.smAndUp}" min-width="270" v-for="cat in categories" v-bind:key="cat.id">
          <v-card-title class="justify-center grey--text text--lighten-2 title">{{cat.name}}</v-card-title>
          <v-layout align-center :class="{'row wrap justify-center': $vuetify.breakpoint.smAndDown, 'column': $vuetify.breakpoint.smAndUp}">
            <v-card-actions v-for="item in cat.links" v-bind:key="item.id">
              <v-btn class="text-none grey--text text--lighten-1" flat round target="blank" :href="item.href" :to="item.to" v-if="item.name" :class="{'caption': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.smAndUp}">
                {{item.name}}
              </v-btn>
              <v-btn class="grey--text text--lighten-1" flat icon target="blank" :href="item.href" :to="item.to" v-if="item.icon">
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-layout>
      <v-flex py-2 px-4 text-xs-center text-md-right white--text xs12  class="f-bottom caption">
        <v-spacer></v-spacer>
          My Ecoidea, Association déclaré loi 1901, Copyright &copy; {{ new Date().getFullYear() }}
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<style src="./footer.css"></style>
<script src="./footer.js"></script>
