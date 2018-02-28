<template>
  <div id="center">
    <Header></Header> 
    <ul>
        <li  v-for="(item,index) in list" :key="index">
            <div class='checkbox'>
            <input type='checkbox' :id="index" name='checkboox[]' v-model="item.completed"
                                 @click="change({tokenId:item.tokenId,completed:!item.completed})">
            <label :for='index'>{{item.title}}</label>
            <input 
                   v-focus="index==i"
                   v-if="index==i"  
                   @blur="updata({tokenId:item.tokenId,title:item.title}),edit(index)"
                    class="edittext" 
                    type="text"
                     v-model="item.title"
                     @keyup.enter="updata({tokenId:item.tokenId,title:item.title}),edit(index)">
            <div class="right">               
                    <img  @click="edit(index)" src="../assets/img/file02.png" alt="">
                    <img @click="remove(item.tokenId)"  src="../assets/img/delete1.png" alt="">     
            </div>
            </div>
            <!-- <input type="checkbox" v-model="item.completed" @click="change({tokenId:item.tokenId,completed:!item.completed})" >
            <span></span>
            <input type="text" v-model="item.title" @keyup.enter="updata({tokenId:item.tokenId,title:item.title})">
            <button @click="edit">编辑</button>
            <button @click="remove(item.tokenId)">删除</button> -->
        </li>
    </ul>
    <Foot></Foot> 
  </div>
</template>
<script>
import Header from "./header";
import Foot from "./footer";
import store from "./../store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"; //解构赋值
export default {
  store,
  data() {
    return {
      list1: [],
      i:-1,
      focusState :true
    };
  },
  directives: {
    focus: {
        //只有在元素插入的时候才有效   v-if  插入
        inserted: function (el, {value}) {
            if (value) {
                el.focus();
            }
        }
    }
},
  components: {
    Header,
    Foot
  },
  computed: {
    ...mapGetters(["list", "status"])
  },
  methods: {
    ...mapMutations(["remove", "updata", "change"]),
    edit(index) {
       
        if(this.i==index){
            this.i=-1
             
        }else{
            this.i=Number(index)
             
        }
        
    },
    focusclick () {
      
    }
  }
};
</script>

<style>

*{
    margin: 0;
    padding: 0;

}
li{
    list-style: none;
}
input{
    border: none;
}
#center{
    width: 60%;
    height: auto;
    position:absolute;  
    top:50%;  
    left: 50%;  
    -webkit-transform: translate(-50%, -50%);  
    transform: translate(-50%, -50%);
}
#center li{
    padding: 20px 0;
    border-bottom: 1px solid gainsboro;
}
/* 编辑框 */
.edittext{
    width: 60%;
    position: absolute;
  left: 30px;
  top: 0;
  line-height: 21px;

}
/* 删除按钮 */
.right{
    position: absolute;
  right: 30px;
  top: 0;
  height: 20px;
  line-height: 20px;
}
.right img{
    width: 20px;
    cursor: pointer;
    margin-left: 15px;
}
/* 选择框 */
.checkbox {
  position: relative;
  height: 20px;
 
}
.checkbox input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
}
.checkbox label {
  position: absolute;
  left: 30px;
  top: 0;
  height: 20px;
  line-height: 20px;
}
.checkbox label:before {
  content: "";
  position: absolute;
  left: -30px;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 50%;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.checkbox label:after {
  content: "";
  position: absolute;
  left: -22px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background: #fff;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.checkbox input[type="checkbox"]:checked + label:before {
  background: #4cd764;
  border-color: #4cd764;
}
.checkbox input[type="checkbox"]:checked + label:after {
  background: #4cd764;
}
</style>
