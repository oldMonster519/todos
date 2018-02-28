<template>
  <div>
      <button v-for="(item,index) in change" :key="index" @click="changestatus(item.sta)">{{item.text}}</button>
     
  </div>
</template>

<script>
import store from "../store"
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"   //解构赋值
export default {
    store,
    data(){
        return{
            change:[
                {text:"全部",sta:"all"},
                {text:"已完成",sta:"already"},
                {text:"未完成",sta:"no"}               
            ]
        }
    }, 
    methods: {
      ...mapMutations(["changestatus"])  
    }
}
</script>

<style>

</style>
