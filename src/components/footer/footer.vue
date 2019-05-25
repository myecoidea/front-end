<template>
  <v-footer height="auto">
      <v-layout justify-center wrap class="f-top">
        <v-btn color="white" flat round href='https://discord.gg/uBG8ErA' target="blank">
          <v-icon>mdi-discord</v-icon>
        </v-btn>
        <v-btn color="white" flat round href="https://twitter.com/my_ecoidea" target="blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn color="white" flat round href="https://instagram.com/my_ecoidea" target="blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn color="white" flat round>
          CGU
        </v-btn>
        <v-btn color="white" flat round>
          Membres
        </v-btn>
        <v-btn color="white" flat round>
          Notre projet
        </v-btn>
        <v-btn color="white" flat round>
          Patchs
        </v-btn>
        <v-flex py-3 text-xs-right white--text xs12 pa-3 class="f-bottom">
         <v-spacer></v-spacer>
          My Ecoidea, Association déclaré loi 1901, &copy; {{ new Date().getFullYear() }}
          <v-spacer></v-spacer>
        </v-flex>
      </v-layout>
  </v-footer>
</template>
<style src="./footer.css"></style>
