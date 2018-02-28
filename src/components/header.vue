<template>
  <div>
     <h1>我的todos</h1>
     <input class="newThings" placeholder="您想做什么?" v-model="newtodo"  @keyup.enter="add">
      
  </div>
</template>
<script>
import store from "../store"
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"   //解构赋值
export default {
    store,
    data(){
        return{
            things:[]
        }
    },
    mounted(){
        this.$store.commit('getdata')
    },
    methods: {
         ...mapMutations(['add'])
        },
    computed: {
        newtodo: {
        get () {
            return this.$store.state.newtodos;
        },
        set (val) {
           this.$store.commit('setValue', val);           
         }
  }

        
    }    
     
    }


</script>

<style>
   .newThings{
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
   }

</style>
