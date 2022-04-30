import vue from 'vue'
import config from '../config/config.vue' //全局配置
import api from '../config/api.vue' //统一管理接口

const main = {
    install (vue) {
        vue.prototype.config = config //调用方式this.config.xxx
        vue.prototype.api = api //调用方式this.api.xxx()
    }
}
vue.use(main) //使用全局函数与变量