<template>
  <div class="container">
    <div class="banner">
      <!-- banner部分 -->
      <template>
      <div class="block">
        <el-carousel  height="736px" :interval="3000" arrow="always" >
          <el-carousel-item v-for="(item,index) in data.data" :key="index">
            <img class="swipe_img" v-lazy="item.mobileImage" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </template>

      <!-- header部分 -->
      <div class="black" style="background: rgba(255, 255, 255, 0);">
        <div class="logo">
          <a href="#/" class="router-link-exact-active router-link-active">
            <img src="//static3.mmall.com/hm-m-h5/static/img/img_logo@3x.0cbd36b.png" />
          </a>
        </div>
        <a href="#">
          <span class="iconfont icon-erji"></span>
        </a>
        <div class="menu">
          <a href="#">
            <van-icon name="wap-nav" class="icon"/>
            <van-icon name="cross" class="icon" style="display:none"/>
            
            <!-- <span class="iconfont icon-menu" style="display:block"></span> -->
            <!-- <span class="el-icon-close" style="display:none"></span> -->
          </a>
        </div>
      </div>
      <div class="sliderdown">
        <a href="#">
          <img src="../assets/images/sliderDown.png" alt />
        </a>
      </div>
    </div>

    <!-- about部分 -->
    <div class="about_star">
      <h2 class="about_main">
        关于红星美凯龙
        <i class="el-icon-arrow-right about_right"></i>
      </h2>
      <p class="p1">“</p>
      <p class="p3">
        美好的生活需要诗和远方，更需要沙发和床。
        <br />
        <span class="fr">—— 红星美凯龙董事长 车建新</span>
      </p>
      <p class="p2">”</p>

      <div class="about_video">
        <a href="https://m-file.chinaredstar.com/static/video/更好的日常.MP4" class="about_newday">
          <img src="//static3.mmall.com/hm-m-h5/static/img/zuihao.e2f3676.jpg" />
          <p>更好的日常</p>
          <span></span>
        </a>

        <a href="https://m-file.chinaredstar.com/static/video/车总.MP4" class="about_newday">
          <img src="//static3.mmall.com/hm-m-h5/static/img/img_video1@3x.0745e40.png">
          <p>三十周年纪念片</p>
          <span></span>
        </a>

      </div>

    </div>

    <!--新闻部分  -->
    <div class="news">
      <div class="newheader">
         <h2 class="newheader_main">
        新闻
        <i class="el-icon-arrow-right newheader_right"></i>
        </h2>
      </div>
       <div class="newcontain" v-for="(item1,index1) in data.data2" :key='index1'>
            <div class="newtime">{{item1.createTime}}</div>
            <div class="newdetail">
                {{item1.newsTitle}} 
            </div>
            <img :src="item1.mobileImage" alt="">
       </div>
      
    </div>

    <!-- 设计尖货部分 -->
    <div class="design">
        <div class="design_goods">
          <h2 class="design_tit">
           设计尖货
          <i class="el-icon-arrow-right design_right"></i>
          </h2>
        </div>
          <div class="design_container">
              <img src="//static3.mmall.com/hm-m-h5/static/img/img_zhizhu20180504.58ac898.png" alt="">
              <p>挑战高难度工艺的10款功夫派</p>
              <p class="sm_text">陪伴你每一个早晨的，除了阳光，还有它。</p>
              <div class="look_detail">
                <span>查看详情</span>
                <i class="el-icon-arrow-right design_right ld"></i>
              </div>
          </div>
          <div class="design_container">
              <img src="//static3.mmall.com/hm-m-h5/static/img/img_tabl310180504.8c0d2a3.png" alt="">
              <p>听说，它们都获得过家居界的“奥斯卡”</p>
              <p class="sm_text">平铺直叙的坦荡，是一蔬一饭的本真模样。</p>
              <div class="look_detail">
                <span>查看详情</span>
                <i class="el-icon-arrow-right design_right ld"></i>
              </div>
          </div>
          <div class="design_container">
              <img src="//static3.mmall.com/hm-m-h5/static/img/img_bed@2x.1edcd01.png" alt="">
              <p>魔都惊现假演唱会，为尖货疯狂打call</p>
              <p class="sm_text">躺得舒服，美得张扬，让灵魂自由奔放。</p>
              <div class="look_detail">
                <span>查看详情</span>
                <i class="el-icon-arrow-right design_right ld"></i>
              </div>
          </div>
    </div>

    <!--全国商场  -->
    <div class="national_mall">
        <div class="design_goods">
          <h2 class="design_tit">
           全国商场
          <i class="el-icon-arrow-right design_right"></i>
          </h2>
        </div>
        <div class="rank">
          <div class="rank_number">
            <p class="rank_color">No.1</p>
            <p class="rank_size">中国经营面积最大的家具商场运营商</p>
          </div>
          <div class="rank_number">
            <p class="rank_color">180+</p>
            <p class="rank_size">覆盖城市</p>
          </div>
          <div class="rank_number">
            <p class="rank_color">300+</p>
            <p class="rank_size">全国商场</p>
          </div>
        </div>
    </div>
    <!-- 页脚部分 -->
    <div class="redstar_footer">
      <div class="footer_1">
            <div class="iphone">
              <p>全国热线&nbsp;&nbsp;4008-213-213 
                <a href="https://wap.mmall.com/QR_code/?version=30015&amp;channel=null&amp;share=app" class="APP">APP下载</a>
              </p>
             <p>智能客服&nbsp;<span class="iconfont icon-erji"></span>24小时在线</p>
            </div>
            <div class="footer_nav">
              <a href="#">投诉与建议</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#">法律声明</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#">网站地图</a>
              <span class="iconfont icon-weiboheibai weibo"></span>
              <div style="clear:both;"></div>
            </div>
      </div>
      <div class="footer_2">
        <p class="foot_model">©2017 red star CO,LTD.All rights reserved </p>
        <span class="foot_model">
        <img src="../assets/images/fanzha.png" alt="图片未加载">
          沪ICP备12018312号-1 沪公网安备 31010702002586号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      data2:{},
      
    };
  },
  created() {
    this.getData();
    
  },
  methods: {
    getData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      //设置延迟执行
      setTimeout(() => {
        //关闭加载轻提示
        this.$toast.clear();

        this.$http("/api/data").then((res) => {
          if (res.data.code === 200) {
            this.data = res.data;
            this.data2= res.data2
            
          } else {
            this.$toast.fail({
              message: "网络异常...",
              duration: 2000,
            });
          }

          console.log(res.data.data);
          console.log(res.data.data2);
        
        });
      }, 1500);
    },
  },
  
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
.container {

  .block{
    .el-carousel__item {
      color: #475669;
      font-size: 14px;
      opacity: 1;
      line-height: 736px;
      margin: 0;
      height: 736px;
      font-size: 20px;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .swipe_img {
        height: 736px;
        max-width: 100%;
    }
  }

  @keyframes start-data {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0.53333rem);
      transform: translateY(0.53333rem);
    }
    100% {
      opacity: 0.3;
      -webkit-transform: translateY(-0.53333rem);
      transform: translateY(-0.53333rem);
    }
  }
  .banner {
    padding: 0;
    max-width: 100%;
    height: 735px;
    background-color: #F6F6F6;
    position: relative;

    .banner_left,
    .banner_right {
      position: absolute;
      top: 50%;
      width: 0.36rem;
      height: 0.58667rem;
      margin-top: -0.29333rem;
      z-index: 10;
      cursor: pointer;
      color: #0274f0;
      font-size: 32px;
    }
    .lr {
      left: 0;
    }
    .lf {
      right: 27px;
    }
    .sliderdown a img {
      position: absolute;
      z-index: 199;
      animation: start-data 1s ease-in-out infinite alternate;
      -webkit-animation: start-data 1s ease-in-out infinite alternate;
      width: 3.5rem;
      height: 3.1rem;
      bottom: 4.8rem;
      left: 46%;
      margin-left: -0.66667rem;
    }

    .black {
      padding: 4.4204px 0 0 8.2888px;
      height: 3rem;
      position: fixed;
      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 3;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -ms-flex-align: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      .logo img {
        width: 102.76px;
        height: 41.99px;
      }

      a {
        text-decoration: none;
        flex: 1;
        padding-top: 0px;
        margin-right: 0;

        span {
          float: right;
          display: block;
        }
      }

      .menu {
        margin-right: 1.32667rem;
        margin-top: 0.16rem;
        padding: 0.13333rem 0.13333rem 0.13333rem 1.33333rem;

        .icon{
          font-size: 30px;
          color: white;
        }
      }
      a span {
        font-size: 30px;
        color: white;
      }
    }
  }

  .about_star {
    position: relative;
    background: url(//static3.mmall.com/hm-m-h5/static/img/img_earth@3x.126b82e.png)
      no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    width: 100%;
    height: 100vh;

    .about_main {
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.13rem;
      text-align: left;
      height: 0.48rem;
      font-size: 1.2rem;
      padding: 2.8rem 0 0 1.66667rem;
      line-height: 0.48rem;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        bottom: -0.4375rem;
        left: 0.76667rem;
        height: 1.38rem;
        width: 0.25667rem;
        background: #208bfe;
      }

      .about_right {
        float: right;
        margin-right: 20px;
      }
    }

    .p1 {
      font-weight: 700;
      font-size: 3.06667rem;
      color: #fff;
      float: left;
      margin-top: -.8rem;
      height: 0.26667rem;
      margin-left: 1.53333rem;
      margin-right: -0.26667rem;
    }

    .p2 {
      font-weight: 700;
      font-size: 3.06667rem;
      color: #fff;
      float: left;
      width: 24.56667rem;
      line-height: 0.8rem;
      text-align: right;
      padding-top: 0.4rem;
      margin: -22px auto;
    }

    .p3 {
      font-weight: 400;
      font-size: 1rem;
      color: #fff;
      float: left;
      width: 20.26667rem;
      line-height: 2rem;
      text-align: right;
      padding-top: 0.4rem;
      margin: -9px auto;

      span {
        margin-right: 1rem;
      }
    }

    .about_video{
      max-width: 100%;
      height:45.9375rem;
      margin-top:6.0rem;
      

      .about_newday{
        padding:0 3.125rem;
        display: block;
        position: relative;
        margin-top: 1.025rem;

        img{
        max-width: 100%;
        width: 100%;
        }

        p{
        position: absolute;
        bottom: -.2rem;
        left: 4.0rem;
        font-size: 1.08rem;
        color: #fff;
        }

        span{
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjUiIGN4PSIyMi41IiBjeT0iMjIuNSIgcj0iMjIuNSIvPjxwYXRoIGQ9Ik0yOC43MDggMjMuOTY4bC05Ljk1NSA0Ljk3N2EuNTMuNTMgMCAwMS0uNzY3LS40NzV2LTkuOTU0YS41My41MyAwIDAxLjc2Ny0uNDc0bDkuOTU1IDQuOTc3YS41My41MyAwIDAxMCAuOTQ5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=) no-repeat;
        background-size: 100% 100%;
        width: 3.2rem;
        height: 3.2rem;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -1.6rem 0 0 -1.6rem;
        z-index: 6;

        }
      }
      
    }
  }

  .news{
    max-width: 100%;
    padding:1.25rem 1.25rem;
    background-color: #F6F6F6;

    .newheader_main{
      margin-top: 0;
      padding-left: .3rem;
      font-size: 1.4375rem;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        bottom: 0.225rem;
        left: -0.23333rem;
        height: 1.38rem;
        width: 0.25667rem;
        background: #208bfe;
      }
    }

    .newcontain{
      margin-top: 0.9375rem;
      background-color: skyblue;
      max-width: 100%;
      height:28.5vh;
      position: relative;

      img{
        width: 100%;
        height:28.5vh;
      }
      .newtime{
        position: absolute;
        font-size:.9rem;
        color: #fff;
        margin-left: .8rem;
        margin-top: .13333rem;
        line-height: 2.74667rem;
        height: 1.74667rem;
      }

      .newdetail{
          position: absolute;
          font-size: 1.03rem;
          text-align: left;
          color: #fff;
          width: 23.1rem;
          margin-left: .8rem;
          line-height: 1.74667rem;
          position: absolute;
          bottom: 0.56rem;
      }
    }
    .newheader_right {
      float: right;
      font-size: 1rem;
      margin-right: -0.1875rem;
      margin-top: 0.5rem;
    }
}
 
  .design{
    max-width: 100%;
    padding:0 20px;
    margin-top: 20px;
    padding-bottom: 20px;
    
    .design_goods{
      margin-top: 0;
      padding-left: .7rem;
      font-size: 14px;
      position: relative;

       &:before {
        content: "";
        position: absolute;
        bottom: .225rem;
        left: -0.23333rem;
        height: 1.38rem;
        width: 0.25667rem;
        background: #208bfe;
      }
    }

    .design_container{
      margin-top:1.875rem ;
      padding-bottom: 0.9375rem;
      box-shadow: 0 0.06667rem 0.26667rem 0 #dfdfdf;
      img{
        width:100%;
        max-width: 100%;
        display: block;
      }

      p{
        font-size: 18px;
        text-align: center;
        margin-bottom: 0;
      }

      .sm_text{
        color:#929292;
        font-size: 14px;
      }

      .look_detail{
        display: block;
        width: 21.37333rem;
        height: 1.30667rem;
        border: 0.0625rem solid #efefef;
        margin: 1.32rem auto 0;
        padding:0.9375rem 0;
        
        span{
          display: block;
          float: left;
          line-height: .45333rem;
          font-size: 0.875rem;
          height: .45333rem;
          color: #232323;
          margin-top: .45333rem;
          margin-left: .4rem;
          padding-left: 0.3125rem;
        }

        .ld{
          margin-top: 0.25rem;
          margin-right:0.625rem;
        }
      }
    }
    
    .design_right {
        float: right;
        font-size: 1rem;
        color: #2E2E2E;
        margin-right: -0.1875rem;
        margin-top: 0.5rem;
    }

  }

  .national_mall{
    max-width: 100%;
    background-color: skyblue;
    background: url(../assets/images/map.png) 0 0 no-repeat;
    padding-top: 1.86667rem;
    width: 100%;
    background-size: cover;
    height:44rem;
    position: relative;
    // border-bottom: 0.5px solid #fff;

    .design_goods{
      margin-block-start: 0em;
      margin-block-end: 0em;
      padding-left: 1.9rem;
      font-size: 14px;
      position: relative;
      color: white;

       &:before {
        content: "";
        position: absolute;
        bottom: .225rem;
        left: 1rem;
        height: 1.38rem;
        width: 0.25667rem;
        background: #208bfe;
      }
    }

    .design_right {
      float: right;
      font-size: 1rem;
      color:white;
      margin-right: 1rem;
      margin-top: 0.5rem;
    }

    .rank{
      position: absolute;
      padding:0px 15px 0px 30px;
      width: 22.8rem;
      height: 16rem;
      top: 54%;
      // background-color: yellow;

      .rank_number{
        
        margin-bottom: 15px;
        width: 100%;
        height:80px;
        // background-color: skyblue;

        .rank_color{
          margin-block-start: 0em;
          margin-block-end: 0em;
          color: #208bfe;
          line-height: 2.01333rem;
          height: 1.24rem;
          font-size: 2.51333rem;
        }

        .rank_size{
          color: #fff;
          font-size: 1.0rem;
          line-height: 3.01333rem;

        }
      }

    }

  }

  .redstar_footer{

    .footer_1{
      padding-bottom: 5px;
      background: #31353a;

      .iphone{
        padding:15px 15px 0px 15px;
        max-width: 100%;

        p{
          color: #afbac8;
          font-size:14px;
          margin-block-start: 0em;

          .APP{
            display: block;
            float: right;
            display: block;
            float: right;
            line-height: 1.69333rem;
            height: 1.64rem;
            font-size: .26667rem;
            color: #29292e;
            background: #afbac8;
            width: 4.97333rem;
            text-align: center;
            border-radius: 50px;
          }
        }
      }

      .footer_nav{
        padding:0 15px;

        a{
          font-size:10px;
          color:#afbac8;
        }

        .weibo{
          font-size:30px;
          color:#afbac8;
          float: right;
        }

      }
    }

    .footer_2{
      padding:18px 0;
      background:#2b2e33 ;
      margin-top: -1px;

      img{
        width: 19.89px;
        height: 13.25px;
        background-size: contain;
        position: relative;
        top: 0.15667rem;
        border-radius: 3px;
      }

      .foot_model{
        padding: auto;
        font-size:10px;
        color:#afbac8 ;
        background:#2b2e33 ;
        display: block;
        text-align: center;
      }
    }
  }
}
</style>