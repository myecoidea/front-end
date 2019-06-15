<template>
  <v-footer height="auto" class="f" dark>
    <v-layout column>
      <v-layout justify-center wrap py-2>
        <v-flex xs12 sm6 md6 lg2 v-for="cat in categories" v-bind:key="cat.id">
          <v-card flat :class="{'mx-3 my-2 py-2 bd-2': $vuetify.breakpoint.smAndDown, 'my-4 mx-3 px-4 py-3 bd-3': $vuetify.breakpoint.smAndUp}">
            <v-card-title class="justify-center grey--text text--lighten-2 title">{{cat.name}}</v-card-title>
            <v-card-actions class="justify-center">
              <v-layout align-center wrap :class="{'row ': $vuetify.breakpoint.smAndDown, 'column': $vuetify.breakpoint.smAndUp}">
                <v-flex v-for="item in cat.links" v-bind:key="item.id" class="my-2 text-xs-center">
                  <v-btn class="text-none grey--text text--lighten-1" flat round target="blank" :href="item.href" :to="item.to" v-if="item.name" :class="{'caption': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.smAndUp}">
                    {{item.name}}
                  </v-btn>
                  <v-btn class="grey--text text--lighten-1" flat icon target="blank" :href="item.href" :to="item.to" v-if="item.icon">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
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
