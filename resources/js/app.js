/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';

window.Form = Form;

import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

/**
 * Routes imports and assigning
 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
});
// Routes End


 
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#42b883',
  failedColor: 'red',
  height: '4px'
})


// Filter Section

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY, h:mm:ss a');
});


import Swal from 'sweetalert2/src/sweetalert2.js'

//import Swal from 'sweetalert2'

 
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
window.Swal = Swal;
window.Toast = Toast;



import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('post-component', require('./components/Post.vue').default);
 
 

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


 

Vue.component('dashboard', require('./components/Dashboard.vue'));
 

Vue.component(
    'not-found',
    require('./components/NotFound.vue').default
);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


window.Fire =  new Vue();


const app = new Vue({
    el: '#app',
    router,
    data:{
        search: ''
    },
    methods:{
        searchit: _.debounce(() => {
            Fire.$emit('searching');
        },1000),

        printme() {
            window.print();
        }
    }
});

