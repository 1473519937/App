<template>
  <div class="container">
    <div class="search">
      <input  v-model="value" placeholder="搜索课程/老师"/>
      <img class="search-img" src="@/assets/images/search.png" alt="">
      <div class="mess">
        <img src="@/assets/images/message.png" alt="">
      </div>
    </div>
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/images/lunbo.png" alt="">
        </van-swipe-item>
        <van-swipe-item><img src="@/assets/images/lunbo1.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="@/assets/images/lunbo.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="@/assets/images/lunbo1.png" alt=""></van-swipe-item>
    </van-swipe>
    </div>
   <div class="content">
      <div class="category">
      <a href="#">
        <img src="@/assets/images/zjxx.png" alt="">
        <span>最近学习</span>
      </a>
      <a href="#">
        <img src="@/assets/images/sckc.png" alt="">
        <span>收藏课程</span>
      </a>
      <a href="#">
        <img src="@/assets/images/wjdy.png" alt="">
        <span>问卷调研</span>
      </a>
      <a href="#">
        <img src="@/assets/images/kczb.png" alt="">
        <span>课程直播</span>
      </a>
      <a href="#">
        <img src="@/assets/images/jfpm.png" alt="">
        <span>积分排名</span>
      </a>
    </div>
    <van-swipe class="my-swipe sx-swipe" :loop="false" :autoplay="3000" indicator-color="white">
    <van-swipe-item class="sx-swipe-item">
      <div class="sx">
        <span class="biaoqian">速学</span>
       <img class="defaluimg" src="@/assets/images/sx.png" alt="">
      <a style="text-align:left">
        <span>PS入门基础教程</span>
        <span> <img src="@/assets/images/rs.png"  style=" width: .36rem;height: .333333rem;" alt=""> 12390</span>
        <div><span>免费</span></div>
      </a>
      <div class="sc">
        <img src="@/assets/images/sc.png" alt="">
        <img src="@/assets/images/sc.png" alt="">
        <img src="@/assets/images/sc.png" alt="">
        <img src="@/assets/images/sc.png" alt="">
      </div>
    </div>
    </van-swipe-item>
    <van-swipe-item class="sx-swipe-item">
      <div class="sx">
        <span class="biaoqian">速学</span>
        <img class="defaluimg" src="@/assets/images/sx.png" alt="">
        <a style="text-align:left">
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt="" style=" width: .36rem;height: .333333rem;"> 12390</span>
          <div><span>￥269</span> <span style="text-decoration:line-through;margin-left:10px">￥369</span> <span class="yh">限时优惠</span> </div>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
    
    
    <div class="baseLearn">
      <div class="title">零基础学习</div>
      <a><img src="@/assets/images/ps.png" alt=""> </a>
      <div class="learn">
        <a href=""><img src="@/assets/images/ai.png" alt=""></a>
        <a href=""><img src="@/assets/images/ui.png" alt=""></a>
      </div>
    </div>
    <div class="recommCourse">
      <div class="title"><span>推荐课程</span> <a><img src="@/assets/images/more.png" alt=""> </a></div>
      <div class="sx">
        <span class="biaoqian">线下</span>
        <img  class="defaluimg" src="@/assets/images/sx.png" alt="">
        <a>
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt=""> 12390</span>
          <span>免费</span>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
    </div>
    <div class="newCourse">
      <div class="title"><span>最新课程</span> <a><img src="@/assets/images/more.png" alt=""> </a></div>
      <div class="sx">
        <img src="@/assets/images/sx.png" alt="">
        <a>
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt=""> 12390</span>
          <div><span>共8章</span> <span>共16节</span> <span class="yh">张天</span></div>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
      <div class="sx">
        <img src="@/assets/images/sx.png" alt="">
        <a>
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt=""> 12390</span>
          <span>免费</span>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
      <div class="sx">
        <img src="@/assets/images/sx.png" alt="">
        <a>
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt=""> 12390</span>
          <div><span>￥269</span> <span style="line-through">￥369</span> </div>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
      <div class="sx">
        <img src="@/assets/images/sx.png" alt="">
        <a>
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt=""> 12390</span>
          <span>免费</span>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
      <div class="sx">
        <img src="@/assets/images/sx.png" alt="">
        <a>
          <span>PS入门基础教程</span>
          <span> <img src="@/assets/images/rs.png" alt=""> 12390</span>
          <div><span>免费</span></div>
        </a>
        <div class="sc">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
          <img src="@/assets/images/sc.png" alt="">
        </div>
      </div>
    </div>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  created(){
    //获取课程信息
    this.getfindOrgInfo()
  },
  methods:{
    async getfindOrgInfo(){
      const res = await this.$http.post('advertisement/findAppAdvert' ,{orgid: "ab3323e5-4b0d-4a4f-bde7-e27e730fcca4", number:10})
      console.log(res);
      
    }

  }
}
</script>
<style lang="less" scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: .506667rem;
  padding: 0 .533333rem;

  .search-img {
    position: absolute;
    width: .333333rem;
    height: .333333rem;
    top: .223333rem;
    left: 1.1rem;
  }
  input {
    width: 70%;
    height: .773333rem;
    border: none;
    font-size: .32rem;
    border-radius: .4rem;
    padding-left: 1.226667rem;
  }
  div {
    width: .613333rem;
    height: .573333rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.lunbo {
  padding: 0 .533333rem;
  position: absolute;
  top:  1.773333rem;
  width: 8.933333rem;
  height: 3.773333rem;
}
.content {
  background-color: #fff;
  padding: 0 .533333rem;
  margin-top: 2.666667rem;
  border-radius: .2rem;
}
.my-swipe .van-swipe-item {
    width: 8.933333rem;
    height: 3.733333rem;
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
.category {
  margin-top: .8rem;
  margin-bottom: .986667rem;
  height: 1.533333rem;
  display: flex;
  padding-top: 2.5rem;
  background-color: #fff;
  flex: 1;
  a {
    display: flex;
    width: 25%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  img {
    display: block;
    width: .826667rem;
    height: .826667rem;
    margin-bottom: .4rem;
    border-radius: .133333rem;
  }
}
.sx-swipe {
  width: 100%;
  height: 2.133333rem;
}
.sx-swipe-item .sx {
   width: 8.933333rem;
   height: 2.133333rem;
   .defaluimg {
     width: 3.48rem;
     height: 2.106667rem;
    border-radius: .133333rem;
   }
}
.sx {
  width: 8.933333rem;
  height: 2.133333rem;
  display: flex;
  position: relative;
  .biaoqian {
    position: absolute;
    display: inline-block;
    background-color: #0094ff;
    width: .666667rem;
    font-size: .266667rem;
    color: #fff;
    border-radius: .133333rem 0 .093333rem 0 ;
    padding:.066667rem .093333rem;
    letter-spacing: .002667rem;
  }
  .sx-title {
    position: absolute;
    top: 0;
    left: 0;
  }
  .sc {
    position: absolute;
    right: 0;
    top:50%;
    transform: translateY(-30%);
    img {
      width: .36rem;
      height: .333333rem;
      margin-left: .213333rem;
      border-radius: .133333rem;
      border-radius: .133333rem;
    }
  }
  img {
    height: 100%;
    border-radius: .133333rem;
  }
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: .4rem;
    span {
      font-size: .4rem;
      &:nth-child(2){
        font-size: .346667rem;
      }
    }
    div {
      span {
        font-size: .4rem;
      }
    }
    img {
      width: .36rem;
      height: .36rem;
    }
  }
}
.baseLearn {
  margin:.826667rem 0;
  .title {
    font-size: .48rem;
    margin-bottom: .426667rem;
    color: #535353;
  }
  a{
    display: block;
    width: 100%;
    height: 2.106667rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: .133333rem;
    }
    margin-bottom: .28rem;
  }
  .learn {
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      width: 4.266667rem;
      height: 2.24rem;
      margin: 0;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: .133333rem;
    }
  }
}
.recommCourse,.newCourse {
  .title {
    font-size: .48rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: block;
      width: .426667rem;
      height: .426667rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .sx {
    margin-top: .426667rem;
    .yh {
      border:1px solid #ff0000;
      display:inline-block;
      width:1.506667rem;
      height:.4rem;
      font-size: 0.31rem;
      color: #ff0000;
      border-radius: .2rem;
      padding: 0 .053333rem;
      text-align: center;
      margin-left: .4rem;
      line-height: .413333rem;
    }
  }
}
.newCourse {
  .title {
    margin: .426667rem 0;
  }
}

.sx-swipe .van-swipe__indicator {
 display: none!important;
}
</style>