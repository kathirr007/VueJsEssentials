<template>
	<li class="list-group-item media" @click="onVideoSelect">
		<img class="mr-3" :src="thumbnailUrl">
		<div class="media-body">{{video.snippet.title}}</div>
	</li>
</template>

<script>
export default {

  name: 'VideoListiItem',
  props: ['video'],
  computed: {
  	thumbnailUrl(){
  		return this.video.snippet.thumbnails.default.url;
  	}
  },
  methods: {
  	onVideoSelect(){
  		this.$emit('videoSelect', this.video);
  	}
  },

  data() {
    return {
    	
    };
  },
};
</script>

<style lang="scss" scoped>
	li{
		display: flex;
		cursor: pointer;
		&:hover{
			background: #eee;
		}
	}
</style>
