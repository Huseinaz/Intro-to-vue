const app = Vue.createApp({
    data: function () {
        return {
            cart: 0,
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            details: ['50% cotton', '30% wool', '20% polyester'],
            inStock: true,
            onSale: true,
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2233, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            url: 'https://www.vuemastery.com/'
        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        removeItem() {
            if(this.cart > 0) {
                this.cart -=1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    },
})
