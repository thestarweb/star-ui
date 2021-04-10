<template>
  <su-h-layout>
    <div style="width:200px;">
      <h4>{{$t("menu.base")}}</h4>
      <div @click="handleSel('home')">{{$t("home.title")}}</div>
      <h4>{{$t("components.title")}}</h4>
      <div v-for="item in allComponents" :key="item.name" @click="handleSel(item)">
        {{$t("components.types."+item.__o.name+".name")}}{{item.__o.name}}
      </div>
    </div>
    <su-v-line/>
    <su-main class="data">
      <show v-if="sel" :component="sel"></show>
      <component v-else :is="component"></component>
    </su-main>
  </su-h-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import {components} from "@/../ui/src/main";
import Home from "@/components/home.vue";
import Show from "@/components/show-info.vue";

@Options({
  components:{
    Show
  }
})
export default class HelloWorld extends Vue {
  private allComponents=components;
  private sel=null;
  // eslint-disable-next-line
  private component:any=null;

  // eslint-disable-next-line
  private handleSel(sel:any){
    if(typeof sel=="string"){
      this.component=Home;
      this.sel=null;
    }else{
      this.sel=sel;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.data{
  overflow-y: auto;
}
</style>
