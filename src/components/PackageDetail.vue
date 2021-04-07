<template>
	<v-card v-if="detailInfo">
		<v-card-title>
		<span class="headline">{{ detailTitle }}</span>
		</v-card-title>
		<v-list flat>
			<v-card-title>
				<span>Versions:</span>
			</v-card-title>
			<div class="flex justify-start ml-6 mb-4" v-for="item in detailInfo.versions" :key="item.key">
				<span>{{ item }}: </span>
			</div>
		</v-list>
  </v-card>
</template>
<script>
export default {
	name: 'PackageDetail',
	props: {
		detailInfo:{
			type: Object,
			default: function(){
				return {}
			}
		},
		detailTitle: {
			type: String,
			default: '',
		}
	}
}
</script>