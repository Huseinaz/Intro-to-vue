const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            details: ['50% cotton', '30% wool', '20% polyester'],
            inventory: 100,
            onSale: true,
            variants: [
                { id: 2234, color: 'green'},
                { id: 2233, color: 'blue'},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            url: 'https://www.vuemastery.com/'
        }
    }
})
