<template>
  <div class="container" style="background-image:none !important;">
    <!--/sidebar-nav-fixed -->
    <h5>{{cityNameFromRoute}}</h5>

    <h3>
      <strong>{{categoryNameFromRoute}}</strong>
    </h3>
    <hr>

    <div v-for="category in searchresults" class="myPanel" style="max-width: 42rem;">
      <div class="row">
        <div class="col-md-5">
          <img v-bind:src="category.logoURL">
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="lib-header-seperator"></div>
            <h2 class="header-font">
              <a href="#" v-on:click.stop="navigate(category)">{{category.name}}</a>
            </h2>
          </div>
          <div class="row" style="padding-top: 20px">{{category.description}}</div>
        </div>
      </div>
      <div class="footer" style="margin-left:20px">
        <div class="row pull left">
          <div class="col-xs-10"></div>
          <div class="col-lg-4">
            <i class="now-ui-icons tech_mobile"></i>&nbsp;
            <span style="font-size:1em;">
              <strong>{{category.phone}}</strong>
            </span>
          </div>
          <div class="col-lg-4">
            <a v-bind:href="category.webURL" target="_new">
              <i class="now-ui-icons business_globe"></i>&nbsp;
              <span style="font-size:1em">
                <strong>Website</strong>
              </span>
            </a>
          </div>
          <div class="col-lg-4">
            <span style="font-size:1em">
              <i class="now-ui-icons location_pin"></i> &nbsp;
              <strong>{{category.address.zip}}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-ceter">
      <button class="danger" @click="backToResukts()">Back to Results</button>
    </div>
    <!-- Container -->
    <div>
      <Modal
        :show.sync="modals.classic"
        headerClasses="justify-content-center"
        modal-classes="modal-lg" >
        
         <button class="btn btn-danger" @click="hideModal()">Close</button>
         
        <div class="container">
          <!-- Page Header -->
          <header class="masthead" style="background-image: url('img/post-bg.jpg')">
            <div class="overlay"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <div class="post-heading">
                    <h1>{{provider.name}}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="row d-flex justify-content-center" style="margin:2rem;">
              <img v-bind:src="provider.logoURL">
            </div>
          </header>

          <article>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-10">
                  <div class="col-lg-8 col-md-10 mx-auto">
                    <h2 class="section-heading">About Us</h2>
                    <p>{{provider.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <hr>
          <footer>
            <div class="row">
              <div class="col">
                <b>Contact Details:</b>
                <br>
                Phone: {{provider.phone}}
                <br>
                <a href="mailto:support@mysite.com">{{provider.email}}</a>
                <br>
                <br>
              </div>
              <div class="col">
                <strong>Address:</strong>
                <br>
                {{provider.address.streetAddress1}}
                <br>
                {{provider.address.streetAddress2}}
                <br>
                {{provider.address.city}}
                <br>
                {{provider.address.state}} ,{{provider.address.zip}}
              </div>
              <div class="col">
                <b>Website:</b>
                <br>
                <a href="provider.webURL">{{provider.webURL}}</a>
                <br>
              </div>
            </div>
          </footer>
          <hr>

          <footer>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <ul class="list-inline text-center">
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import http from 'axios';
import { Card } from '../components';
import router from '../router.js';
import { API_HOST } from './endpoints.js';
import { Modal } from '../components';

export default {
  components: {
    Card,
    Modal
  },
  props: {
    categoryId: String,
    cityName: String,
    statedata: {}
  },
  data() {
    return {
      searchresults: {},
      errors: {},
      providerDetails: {},
      addressData: {},
      categoryIdFromRoute: {},
      categoryNameFromRoute: {},
      cityNameFromRoute: {},
      statedata: {},
      modals: {
        classic: false
      },
      provider: {
        address: {}
      }
    };
  },
  mounted() {
    this.loadData();
  },
  created() {
    this.addressData = this.$route.params.addressData;
    this.categoryIdFromRoute = this.$route.params.categoryId;
    this.categoryNameFromRoute = this.$route.params.categoryName;
    this.cityNameFromRoute = this.$route.params.cityName;
  },
  methods: {
    loadData() {
      http
        .get(
          // 'http://localhost:3000/api/categories/' +
          API_HOST +
            '/api/categories/' +
            this.categoryIdFromRoute +
            '/providers'
        )
        .then(response => (this.searchresults = response.data))
        .catch(e => {
          this.errors.push(e);
          console.log('Errors' + e);
        });
    },
    getImgUrl(pic) {
      return require('../../public/img/' + pic);
    },
    navigate(category) {
      // alert(JSON.stringify(category));
      // let routeData = router.resolve({name: 'spvdetails', params: { providerDetails: category }});
      // alert(routeData.href);
      // window.open(routeData.href, '_blank');

      //  router.push({name: 'spvdetails', params: { providerDetails: category }});
      this.provider = category;
      this.modals.classic = true;
    },
    backToResukts() {
      router.push({
        name: 'scategorygroup',
        params: {
          statedata: this.$route.params.statedata,
          searchresults: this.$route.params.searchresults
        }
      });
    },
    showmodel() {
      this.modals.classic = true;
    },
    hideModal(){
      this.modals.classic = false;
    }
  }
};
</script>

<style>
/* body {
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  /* background-color: #f7f7f7; }*/
*/ .container1 {
  background: none !important;
}

.container-fluid {
  background: none !important;
  background-repeat: no-repeat;
  background-size: cover;
}

.panel {
  margin-bottom: 20px;
}
.lib-panel img {
  width: 200px;
  background-color: transparent;
}

.lib-panel .row,
.lib-panel .col-md-6 {
  padding: 0;
  background-color: #ffffff;
}

.lib-panel .lib-row {
  padding: 0 20px 0 20px;
}

.lib-panel .lib-row.lib-header {
  background-color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 0 20px;
}

.lib-panel .lib-row.lib-header .lib-header-seperator {
  height: 2px;
  width: 26px;
  background-color: #d9d9d9;
  margin: 2px 0 2px 0;
}

.lib-panel .lib-row.lib-desc {
  position: relative;
  height: 100%;
  display: block;
  font-size: 13px;
}
.lib-panel .lib-row.lib-desc a {
  position: absolute;
  width: 100%;
  bottom: 10px;
  left: 20px;
}

.row-margin-bottom {
  margin-bottom: 20px;
}

.box-shadow {
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 5px 10px 8px #888888;
}
.col-md-6 {
  margin-right: 0px;
}

.no-padding {
  padding: 0;
  margin-left: 0px;
}

.myPanel {
  position: relative !important;
  color: rgb(72, 72, 72) !important;
  height: 100% !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  border-image: initial !important;
  border-radius: 3px !important;
  margin-bottom: 20px;
}

.title-font {
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;
  overflow-wrap: break-word !important;
  font-size: 18px !important;
  font-weight: 800 !important;
  line-height: 1.44444em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
}

.header-font {
  padding-top: 15px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;
  overflow-wrap: break-word !important;
  font-size: 18px !important;
  font-weight: 800 !important;
  line-height: 1.44444em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
}

.starter-page {
  min-height: calc(100vh - 95px);
}

.modal-lg{
  max-width: 70% !important;
}

</style>