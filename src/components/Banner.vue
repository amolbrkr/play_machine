<template>
  <div class="app-banner">
    <b-navbar is-nav-bar id="header" fixed="top" type="dark" variant="info">
      <b-navbar-brand @click="brandClicked">PlayMachine</b-navbar-brand>
      <b-nav-form>
        <b-btn size="sm" variant="outline-light" @click="searchVideo"><i class="fa fa-search"></i></b-btn>
      </b-nav-form>
      <b-form-input v-if="showSearchInput" v-model="query" type="text" placeholder="Search"></b-form-input>
    </b-navbar>            
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearchInput: false,
      query: ''
    }
  },
  methods: {
    searchVideo() {
      this.showSearchInput = !this.showSearchInput
      if(this.query !== '') {
        console.log("SEARCH QUERY: " + this.query)
        this.$router.push('/search/' + this.query)
        this.query = ''
      }
    },
    brandClicked() {
      this.$router.push('/');
    }
  } 
}
</script>


<style>
#header {
  -webkit-box-shadow: 0px 3px 5px rgba(75, 75, 75, 0.35);
  -moz-box-shadow:    0px 3px 5px rgba(75, 75, 75, 0.35);
  box-shadow:         0px 3px 5px rgba(75, 75, 75, 0.35);
}
</style>
