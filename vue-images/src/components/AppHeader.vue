<template>

	<div class="ui secondary pointing menu">
	  <router-link to="/" class="active item">
	    Image Storage
	  </router-link>
    <div class="right menu">
    	<div v-if="isLoggedIn" class="horizontal">
    		<router-link to="/" class="ui item">
		      Galleries
		    </router-link>
		    <router-link to="/upload" class="ui item">
		      Upload
		    </router-link>
		    <a @click="logout" class="ui item">
		      Logout
		    </a>
    	</div>
	    <a v-else href="#" @click="login"  class="ui item">
	      Log In
	    </a>
    </div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
	  name: 'AppHeader',
	  computed: {
	  	...mapGetters(['isLoggedIn'])
	  },
	  data() {
	    return {

	    };
	  },
	  methods: {
	  	...mapActions(['login', 'logout'])
	  }
	};
</script>

<style lang="scss" scoped>
	.horizontal {
		display: flex;
		// flex-flow: row;
	}
</style>

