<template>
<div>
    <v-toolbar app ligth fixed>
        <v-toolbar-side-icon><img src="@/assets/logo.svg" class="icon" height="40px"></v-toolbar-side-icon>
        <v-toolbar-title class="mei">My <i>Eco</i>Idea</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items  class="hidden-sm-and-down">
            <v-layout justify-space-around >
                <v-flex shrink>
                    <v-expand-x-transition>
                        <div v-show="expand" style="white-space: nowrap">
                            <v-text-field placeholder="Rechercher" flat color="black" height="40px">
                            </v-text-field>
                        </div>
                    </v-expand-x-transition>
                </v-flex>
            </v-layout>
            <v-btn flat @click="expand = !expand">
              <div class="icon"><span v-show="!expand">Recherche</span><v-icon>mdi-magnify</v-icon></div>
            </v-btn>
            <v-btn flat to="/">
                <div class="icon"><span>Accueil</span><v-icon>home</v-icon></div>
            </v-btn>
            <v-btn flat to="/share-idee">
                <div class="icon"><span >Ajout d'idée</span><v-icon>mdi-plus</v-icon></div>
            </v-btn>
            <v-btn flat to="quizz">
                <div class="icon"><span >Quizz</span><v-icon>mdi-cards-outline</v-icon></div>
            </v-btn>
            <v-btn flat @click="drawer = !drawer">
                <div class="icon"><span >Mon compte</span><v-icon>mdi-account-outline</v-icon></div>
            </v-btn>
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
