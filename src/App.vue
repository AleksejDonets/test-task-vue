<template>
  <v-app v-if="!error">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <SearchField @startSearching="listenerSearch"/>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <TableMain :item="listPackage" :title="titleTable"/>
    </v-main>
    <v-footer
        color="primary"
        padless
    >
      <v-card-text class="py-2 white--text text-center">
        <strong></strong>
        <a class="white--text" href="https://github.com/AleksejDonets">https://github.com/AleksejDonets</a>
      </v-card-text>
    </v-footer>
  </v-app>
   <v-app v-else>
     <h2>{{errorMsg}}</h2>
   </v-app>
</template>

<script>
import TableMain from './components/TableMain.vue';
import SearchField from './components/SearchField.vue';
import { mapActions, mapState } from "vuex";
export default {
  name: 'App',
  components: {
    TableMain,
    SearchField
  },
  data(){
    return{
      timerID: null,
      errorMsg: 'A small or big mistake has occurred'
    }
  },
  mounted(){
    this.loadBaseData();
  },
  methods: {
    ...mapActions(['loadBase', 'startSearch']),
    loadBaseData(){
      this.loadBase();
    },
    listenerSearch(str){
      if(this.timerID){
        clearTimeout(this.timerID);
      }
      this.timerID = setTimeout(()=> {
        this.startSearch(str)
        
        this.timerID = null;
      },2000)
    }
  },
  computed:{
    ...mapState({
      listPackage: state => state.package, 
      titleTable: state => state.searchValue,
      status: state => state.error,
    }),
  }
};
</script>
