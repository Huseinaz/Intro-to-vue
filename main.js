const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale: true,
            url: 'https://www.vuemastery.com/'
        }
    }
})
