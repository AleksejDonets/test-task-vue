<template>
	<v-container class="mt-16">
		<h2>{{title}}</h2>
		<v-data-table
			:headers="headers"
			:items="arrayData"
			:items-per-page="10"
			class="elevation-1"
			 @click:row="dialog = true"
		></v-data-table>
		<v-dialog
		 	v-model="dialog"
			:value="title"
			@click:outside="dialog = false"
			width="800px"
   		>
      		<PackageDetail :detailInfo="item" :detailTitle="title"/>
   		</v-dialog>
	</v-container>
</template>
<script>
import PackageDetail from './PackageDetail.vue';
export default {
	name: 'TableMain',
	components:{
		PackageDetail
	},
	props: {
		item :{
			type:Object,
			default: function(){
				return {}
			}
		},
		title: {
			type:String,
			default: '',
		}
	},
	data(){
		return {
			dialog: false,
			headers: [
				{
					text : 'Latest version',
					value : 'latest',
				},
				{
					text: 'Next version',
					value: 'next'
				}
			]
		}
	},
	computed:{
		arrayData(){
			return [this.item.tags]
		}
	}
}
</script>