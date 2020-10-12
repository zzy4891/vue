<template>
  <div id="app">
    <div id="nav">
      <RedStar :data="data"/>
      
    </div>
    <router-view />
  </div>
</template>

<script>
import RedStar from './components/RedStar'

export default {
  data(){
    return{
      data:{},
      data2:{}
     
    }
  },
 
  components:{
    RedStar,
  }
}
</script>>

<style lang="scss" scoped>
 
</style>>
