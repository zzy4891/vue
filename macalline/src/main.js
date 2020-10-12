import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vant from './vant.config.js'
import './assets/font_7ra8vjqjuvu/iconfont.css'
/**引入element框架 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Button} from 'element-ui';
/*
 * 引入轮播图组件，swiper-bundle.css 6版本以上支持，
 * swiper/css/swiper.css 5版本以上支持
 */
import { Swipe, SwipeItem,Icon,Lazyload  } from 'vant';

Vue.config.productionTip = false

Vue.use(VueAxios,axios) 

Vue.use(vant)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Icon);

Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
