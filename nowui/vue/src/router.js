import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import SLanding from './pages/SLanding.vue';
import Sresults from './pages/SResults.vue';
import Slisting from './pages/SListing.vue';
import Menu from './pages/Menu.vue';
import SPVDetails from './pages/SProviderDetails.vue';
import Scategorygroup from './pages/SCategoryGroupList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
       components: { default: SLanding },
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile,  MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },    
    {
      path: '/slanding',
      name: 'slanding',
      components: { default: SLanding },
     
    }, {
      path: '/sresults',
      name: 'sresults',
      components: { default: Sresults, header:Menu },
      props : {
        addressData:{},
        statedata:{}
      },
    }, {
      path: '/slisting',
      name: 'slisting',
      components: { default: Slisting, header:Menu },
      props : {
        addressData:{},
        categoryId:{},
        categoryName:{},
        cityName:{},
        statedata:{},
        searchresults:{}
      }
    },{
      path: '/spvdetails',
      name: 'spvdetails',
      components: { default: SPVDetails, header:Menu },
      props : {
        providerDetails:{},        
    },
  },{
    path: '/scategorygroup',
    name: 'scategorygroup',
    components: { default: Scategorygroup, header:Menu },
    props : {
      addressData:{},
      statedata:{},
      searchresults:{}
    },
  },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
