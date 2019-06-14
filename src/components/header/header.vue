<template>
<div class="header">
    <v-toolbar height="55">
        <v-btn icon  @click="$store.commit('toggleTheme')">
        <v-icon>
          mdi-theme-light-dark
        </v-icon>
      </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat to="/">
                <div class="icon">
                    <span>Accueil</span>
                    <img v-if="!$store.getters.darkTheme" class="svg" src="@/assets/items/Home W.svg"/>
                    <img v-else class="svg" src="@/assets/items/Home B.svg"/>
                </div>
            </v-btn>
            <v-btn flat to="/idea/share-idee">
                <div class="icon">
                    <span >Ajout d'idée</span>
                    <img v-if="!$store.getters.darkTheme" class="svg" src="@/assets/items/Add W.svg"/>
                    <img v-else class="svg" src="@/assets/items/Add B.svg"/>
                </div>
            </v-btn>
            <v-btn flat to="/quizz">
                <div class="icon">
                    <span >Quizz</span>
                    <img v-if="!$store.getters.darkTheme" class="svg" src="@/assets/items/Quizz W.svg"/>
                    <img v-else class="svg" src="@/assets/items/Quizz B.svg"/>
                </div>
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="auth">
            <v-btn flat class="login" style="margin-right: 5px;">Connexion</v-btn><v-btn flat class="register white--text">Inscription</v-btn>
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
