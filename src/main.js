import { createApp } from 'vue'
import { ElButton, ElBacktop, ElContainer, ElHeader, ElMain, ElFooter, ElRow, ElCol, ElCarousel, ElCarouselItem, ElImage } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)

const components = [ElButton, ElBacktop, ElContainer, ElHeader, ElMain, ElFooter, ElRow, ElCol, ElCarousel, ElCarouselItem, ElImage ]

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router).mount('#app')
