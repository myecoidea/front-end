<template>
    <div class="header">
        <v-toolbar height="55">
            <v-toolbar-items>
                <v-btn icon class="hidden-sm-and-down" @click="$store.commit('toggleTheme')">
                    <v-icon>
                        mdi-theme-light-dark
                    </v-icon>
                </v-btn>
                <v-btn icon class="hidden-md-and-up" @click="menu = !menu">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat bd-0 :to="item.link" v-for="item in items" :key="item.id">
                    <div class="icon primary--text text-lighten-2">
                        <span>{{item.name}}</span>
                        <img v-if="!$store.getters.darkTheme" class="svg" :src="require(`@/assets/items/${item.icon}_W.svg`)"/>
                        <img v-else class="svg" :src="require(`@/assets/items/${item.icon}_B.svg`)"/>
                    </div>
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items class="auth" v-show="!isLogin">
                <v-btn flat class="login" style="margin-right: 5px;">Connexion</v-btn><v-btn flat class="register white--text primary lighten-4">Inscription</v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="account" v-show="isLogin">
                <v-btn flat bd-0 @click="drawer = !drawer">
                    <div class="icon">
                        <span >Profil</span>
                        <img v-if="!$store.getters.darkTheme" class="svg" src="@/assets/items/Profil_W.svg"/>
                        <img v-else class="svg" src="@/assets/items/Profil_B.svg"/>
                    </div>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer permanent fixed left width="200" v-show="menu">
            <v-list-tile>
                <v-btn icon @click="$store.commit('toggleTheme')">
                    <v-icon>
                        mdi-theme-light-dark
                    </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn flat icon @click="menu = !menu">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile class="mt-1" v-for="item in items" :key="item.id">
                <v-btn flat :to="item.link">
                    <div class="icon">
                        <img v-if="!$store.getters.darkTheme" class="svg" :src="require(`@/assets/items/${item.icon}_W.svg`)"/>
                        <img v-else class="svg" :src="require(`@/assets/items/${item.icon}_B.svg`)"/>
                    </div>
                    <span class="text-none mx-3 primary--text text-lighten-3">{{item.name}}</span>
                </v-btn>
            </v-list-tile>
        </v-navigation-drawer>
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
