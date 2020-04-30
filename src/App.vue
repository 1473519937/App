<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" inactive-color="#777777" active-color="#000000">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
      <span>{{item.title}}</span>
      <template  slot="icon" slot-scope="props" >
        <img :src="props.active ? item.active : item.normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:0,
      tabbars:[
        {
          name:'/',
          title:'首页',
          normal:require('@/assets/images/home.png'),
          active: require('@/assets/images/homeActive.png')
        },
        {
          name:'/course',
          title:'课程中心',
          normal:require('@/assets/images/course.png'),
          active: require('@/assets/images/courseActive.png')
        },
        {
          name:'/assign',
          title:'学习任务',
          normal:require('@/assets/images/learn.png'),
          active: require('@/assets/images/learnActive.png')
        },
        {
          name:'/user',
          title:'我的',
          normal:require('@/assets/images/user.png'),
          active: require('@/assets/images/userActive.png')
        }
      ]
    }
  },
  created(){
     if (this.$route.name == "home") {
      this.active = 0;
    } else if (this.$route.name == "power") {
      this.active = 1;
    } else if (this.$route.name == "personal") {
      this.active = 2;
    }
  }
}
</script>
<style lang="scss">
.van-tabbar {
  height: 1.973333rem;
  width: 100%;
  font-size: .266667rem;
  background-color: #f4f4f4!important;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.van-nav-bar--fixed {
  background-color: #f4f4f4!important;
  border: none;
}
.van-nav-bar__left {
  align-items: center;
  margin-top: .4rem;
  height: .4rem;
  img {
    height: 100%;
  }
  span {
    margin-left: .4rem;
    font-size: .4rem;
    font-weight: 700;
    color: #535353;
  }
}
.van-nav-bar__right {
  line-height: .666667rem;
  span {
    display: inline-block;
    width: .106667rem;
    height: .106667rem;
    background-color: #535353;
    border-radius: .04rem;
    margin-right: .133333rem;
  }
}
</style>
