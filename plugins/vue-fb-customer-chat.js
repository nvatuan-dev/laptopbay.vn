import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
    page_id: 107799984821708, //  change 'null' to your Facebook Page ID,
    theme_color: '#0055b7', // theme color in HEX
    locale: 'vi_VN', // default 'en_US'
})