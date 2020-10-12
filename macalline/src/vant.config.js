import  {Toast} from 'vant'

const vants = [Toast]
export default{

    /**
 * Install vant conponent plugin
 * @param Vue
 */

install(Vue) {
   vants.forEach(Component =>  {
       Vue.use(Component)
    })
  }
  
}