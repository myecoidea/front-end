<template>
<div class="quizz">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step color="green darker-2" :complete="e1 > 1" step="1">Commencer le Quizz</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step color="green darker-2" :complete="e1 > 2" step="2">Biodiversité</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step color="green darker-2" :complete="e1 > 3" step="3">Biodiversité</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step color="green darker-2" :complete="e1 > 4" step="4">Biodiversité</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step color="green darker-2" step="5">Compost</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-5" color="grey lighten-1" height="500px"></v-card>
          <v-btn color="green darker-2" dark @click="e1 = 2" align-center>Commencer le Quizz</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="mb-5" color="grey lighten-1" height="500px"></v-card>
          <v-btn color="green darker-2" dark @click="e1 = 3">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-5" color="grey lighten-1" height="500px"></v-card>
          <v-btn color="green darker-2" dark @click="e1 = 4">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="mb-5" color="grey lighten-1" height="500px"></v-card>
          <v-btn color="green darker-2" dark @click="e1 = 5">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-card class="mb-5" color="grey lighten-1" height="500px"></v-card>
          <v-btn color="green darker-2" dark @click="e1 = 1" >Finir</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
</div>
</template>
<script src="./quizz_box.js"></script>
<style src="./quizz_box.css"></style>
