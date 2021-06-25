<template>
  <su-h-layout>
    <div class="menu">
      <h4>{{$t("menu.base")}}</h4>
      <div @click="handleSel('home')" :class="{select:sel==null}">{{$t("home.title")}}</div>
      <h4>{{$t("components.title")}}</h4>
      <div v-for="item in allComponents" :key="item.name" @click="handleSel(item)" :class="{select:sel==item}">
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
  private component:any=Home;

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
.menu{
  width:280px;
}
.menu>h4{
  padding: 2px 10px;
}
.menu>div{
  padding: 5px 10px;
  padding-left: 20px;
  cursor: pointer;
  position: relative;
}
.menu .select{
  color: #08F;
  background: #DEF;
}
.menu .select:before{
  content: "";
  position: absolute;
  height: 100%;
  width: 5px;
  top: 0;
  left: 0;
  background: #08F;
}
.data{
  overflow-y: auto;
}
</style>
