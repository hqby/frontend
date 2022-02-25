// import Vue from 'vue'
import Vue from "vue/dist/vue.common.js"
import App from './src/App.vue'
// const root=document.createElement('div')
// document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount("#app")