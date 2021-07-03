<template>
  <su-view-control>
    <su-v-layout>
      <header><div class="menu-button" @click="isOpenMenu=!isOpenMenu"></div> star-ui</header>
      <su-main>
        <su-h-layout>
          <div :class="['menu',{open:isOpenMenu}]">
            <h4>{{$t("menu.base")}}</h4>
            <div @click="handleSel('home')" :class="{select:sel==null}">{{$t("home.title")}}</div>
            <h4>{{$t("components.title")}}</h4>
            <div v-for="item in allComponents" :key="item.name" @click="handleSel(item)" :class="{select:sel==item}">
              {{$t("components.types."+item.__o.name+".name")}}{{item.__o.name}}
            </div>
          </div>
          <su-v-line :class="{hiddenOnMobile:!isOpenMenu}"/>
          <su-main class="data" @click="isOpenMenu=false">
            <show v-if="sel" :component="sel"></show>
            <component v-else :is="component"></component>
          </su-main>
        </su-h-layout>
      </su-main>
    </su-v-layout>
  </su-view-control>
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
  private isOpenMenu=false;
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
.su-view-control,.su-v-layout{
  overflow: hidden;
  height: 100%;
}
header{
  background-color: #000;
  color: #FFF;
  padding: 5px;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menu{
  width:280px;
  overflow-y: auto;
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

/*移动样式*/
.su-view-control.su-view-control-pc .menu-button{
  display: none;
}
.menu-button{
  width: 32px;
  height: 22px;
  border: 2px solid #FFF;
  border-radius: 5px;
  margin: 0 10px;
  display: inline-block;
  padding: 5px 5px;
  position: relative;
  box-sizing: border-box;
}
.menu-button::before,.menu-button::after{
  content: "";
  position: absolute;
  width: 17px;
  height: 2px;
  background-color: #FFF;
}
.menu-button::after{
  bottom: 5px;
}
.su-view-control.su-view-control-mobile .su-main.data{
  width: 100vw;
  flex: 0 0 100vw;
}
.su-view-control.su-view-control-mobile .menu{
  width: 0;
  transition: width 0.2s;
}
.su-view-control.su-view-control-mobile .menu.open{
  width: 90vw;
}
.su-view-control.su-view-control-mobile .hiddenOnMobile{
  display: none;
}
</style>
