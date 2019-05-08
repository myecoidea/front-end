<template>
<v-app>
    <v-toolbar dark color="green darken-2">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>My EcoIdea</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat to="/"><v-icon>home</v-icon> Accueil</v-btn>
            <v-btn light color="white" to="/share-idee"><v-icon>mdi-plus</v-icon>Partager une idée</v-btn>
            <v-btn flat><v-icon>mdi-magnify</v-icon></v-btn>
            <v-btn flat><v-icon>mdi-account-outline</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</v-app>
</template>

<script src="./header.js"></script>
<style src="./header.css"></style>