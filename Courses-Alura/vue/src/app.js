const myNameApp = {
    data() {
        return {
            nome : "Andrew",
            idade : 22
        }
    }
}

Vue.createApp(myNameApp).mount("#app");