<template>
  <div id="app">
    <v-app dark>
      <v-toolbar color="pink" fixed dense prominent app>
        <v-toolbar-title @click="goHome">PlayMachine</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="searchVideo">
          <v-icon>search</v-icon>
        </v-btn>
        <v-text-field v-if="showSearchInput" slot="extension" label="Search" v-model="searchQuery" single-line class="white--text"></v-text-field>
      </v-toolbar>
      <v-content style="padding-bottom: 32px;">
        <router-view></router-view>
      </v-content>
      <v-footer absolute app>
        <p>
          <h5>Built with
            <i class="material-icons md-18 pink500">favorite</i> by Amol Borkar. IG: @apexamex_ .
             This is an Open Source software, checkout the code on
            <a href="https://github.com/Amminexx/play_machine" target="_blank">GitHub</a>
          </h5>
        </p>
      </v-footer>
    </v-app>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
      showDrawer: false,
      showSearchInput: false,
      searchQuery: ''
    }
  },
  methods: {
    searchVideo() {
      this.showSearchInput = !this.showSearchInput
      if (this.searchQuery !== '') {
        this.$router.push('/search/' + this.searchQuery)
        this.searchQuery = ''
      }
    },
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

input {
  width: inherit !important;
}
.container.fluid {
  padding: 8px;
}
.card {
  width: 320px !important;
}

.navigation-drawer {
  width: 200px !important;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  vertical-align: text-bottom; /* To vertically center icons with text */
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
.material-icons.pink500 { color: #e91e63 }

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
</style>
