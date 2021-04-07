<template>
	<v-text-field placeholder="Search" v-model="searchStr" @input="searchStart"></v-text-field>
</template>
<script>
export default {
	name: 'SearchField',
	data(){
		return {
			searchStr: '',
		}
	},
	methods:{
		searchStart(){
			this.$emit('startSearching', this.searchStr.toLowerCase());
		}
	}
}
</script>