import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios"
Vue.use(Vuex);
// 数据数组

const state={
    newtodos:"56565",
    todos:[
        {title:"A",completed:true},
        {title:"B",completed:false},
      ],
    status:"all"
}  
  //模板获取方法
const mutations={
    getdata(state){
        Axios({
            url:"/api/Handler/todos?action=show",
            method:"get",
        }).then(function(result) {
            var arr=result.data.data.list
            console.log(arr)
           
            for(var key in arr){
                var value="false"
                arr[key].completed=value ==="false" ? false : true;  
            }
            state.todos=arr
            
        });
    },
    // 表单处理
    setValue(a,b){
        // console.log(arguments)
        this.state.newtodos=b;       
    },
    //改变三个状态
    changestatus(a,b){
        // console.log(arguments)
        this.state.status=b;
        console.log(this.state.status)
    },
   
     
    // 增
    add(state){
        var value = state.newtodos;
        if (!value) {
            return;
        }
        // state.todos.push({ title: value, completed: false });  
          
        // console.log(state.todos.length)
        // console.log(state.todos[state.todos.length-2].title)
        //后台
        Axios({
            url:"/api/Handler/todos?action=add",
            method:"get",
            params:{ title: value, completed: false }
        }).then(function(result) {
           
            console.log(result.data);
        });
        this.getdata();
        console.log(state.todos)
        this.state.newtodos=''  
        },
    //删
    remove(state,index){
        console.log(index)
        state.todos.splice(index,1)
        Axios({
            url:"/api/Handler/todos?action=remove&tokenId="+index,
            method:"get",
           
        }).then(function(result) {
            console.log(result.data)
        });
    },
    //编辑 可将多个参数放到一个对象info里
    updata(state,info){        
        console.log(info.title)
        Axios({
            url:"/api/Handler/todos?action=updata&tokenId="+info.tokenId+"&title="+info.title,
            method:"get",        
        }).then(function(result) {
            console.log(result.data)
        });
    },    
    //completed改变   修改
    change(state,info){
        console.log(info.completed)
        Axios({
            url:"/api/Handler/todos?action=change&tokenId="+info.tokenId+"&completed="+info.completed,
            method:"get",        
        }).then(function(result) {
            console.log(result.data)
        });
    }

}
const getters={
    newtodo(state){
        return  state.newtodos
    },
    //根据属性筛选
    list(state){
        console.log(state.todos)
        var todos=state.todos
        switch(state.status){
            case "all":
            return todos;
            case "already":
            return todos.filter(function (todos) {
                return todos.completed;
                });
            case "no":
            return todos.filter(function (todos) {
                return !todos.completed;
                });
        }
        
    },
    status(state){
        return state.status
    }
}
  export default new Vuex.Store({
    state,
    mutations,
    getters,
   
});