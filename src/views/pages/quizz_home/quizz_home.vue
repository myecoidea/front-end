<template>
<div class="quizz" fluid>
    <v-card flat min-height="85vh" class="ma-0 px-3">
      <v-card-title class="headline justify-center">
        Quizzes
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap class="justify-center">
          <v-card class="quiz ma-3 px-3 py-1" width="500" v-for="quizz in quizzs" :key="quizz.id" elevation="5">
            <v-card-title class="title justify-center">
              {{quizz.name}}
            </v-card-title>
            <v-card-text>
              {{quizz.desc}}
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="text-none" round>Commencer</v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-card-text>
    </v-card>
</div>
</template>
<script src="./quizz_home.js"></script>
<style src="./quizz_home.css"></style>
