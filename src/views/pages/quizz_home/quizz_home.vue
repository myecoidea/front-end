<template>
<div class="pt-3">
  <h2 class="justify-center">Quizzes</h2>
  <v-divider></v-divider>
  <v-container min-height="85vh">
    <v-layout row wrap class="justify-center align-center">
      <v-flex xs12 sm5 md4 lg2 v-for="quizz in quizzs" :key="quizz.id">
        <v-card class="quizz ma-3 px-3 py-1 bd-3" elevation="5" :to="'/quizz/'+quizz.link">
          <v-card-title class="title justify-center">
            {{quizz.name}}
          </v-card-title>
          <v-card-text>
            {{quizz.desc}}
          </v-card-text>
          <v-card-actions class="hidden-md-and-up justify-center">
            <v-btn flat round block class="text-none">Commencer</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script src="./quizz_home.js"></script>
<style src="./quizz_home.css"></style>
