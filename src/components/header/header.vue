<template>
<div class="header">
    <v-toolbar ligth height="55" style="background-color: #fbfbfb !important;">
        <a href="/"><img src="@/assets/logo.svg" class="icon" height="40px"></a>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat to="/">
                <div class="icon"><span>Accueil</span><v-icon>home</v-icon></div>
            </v-btn>
            <v-btn flat to="/idea/share-idee">
                <div class="icon"><span >Ajout d'idée</span><v-icon>mdi-plus</v-icon></div>
            </v-btn>
            <v-btn flat to="quizz">
                <div class="icon"><span >Quizz</span><v-icon>mdi-cards-outline</v-icon></div>
            </v-btn>
            <v-btn flat @click="drawer = !drawer" v-if="isLogin == true">
                <div class="icon"><span >Mon compte</span><v-icon>mdi-account-outline</v-icon></div>
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="auth">
            <v-btn flat class="login">Connexion</v-btn><v-btn flat dark class="register">Inscription</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer permanent fixed right v-show="drawer">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Espace utilisateur</v-list-tile-title>
          </v-list-tile-content>
            <v-btn flat @click="drawer = !drawer">
                <v-icon>close</v-icon>
            </v-btn>
        </v-list-tile>
        <v-divider></v-divider>
        <Profil></Profil>
    </v-navigation-drawer>
</div>
</template>
<style src="./header.css"></style>
<script src="./header.js"></script>
