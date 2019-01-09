<template>
  <div class="container">
    <!--/sidebar-nav-fixed -->
    <div v-for="category in searchresults" class="myPanel" style="max-width: 42rem;">
      <div class="row">
        <div class="col-md-5">
          <img v-bind:src="category.logoURL">
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="lib-header-seperator"></div>
            <h2 class="header-font">{{category.name}}</h2>
          </div>
          <div class="row" style="padding-top: 20px">{{category.description}}</div>
        </div>
      </div>
                <div class="footer" style="margin-left:20px">
            <div class="row pull left"><div class="col-xs-10"></div>
              <div class="col-lg-4">
                <i class="now-ui-icons tech_mobile"></i>&nbsp;
                <span style="font-size:1em;"><strong>{{category.phone}}</strong></span>
              </div>
                <div class="col-lg-4">
                <i class="now-ui-icons business_globe"></i>&nbsp;
                <span style="font-size:1em"><strong>{{category.webUrl?category.webUrl:'No website'}}</strong></span>
              </div>
              <div class="col-lg-4">
                <span style="font-size:1em">
                  <i class="now-ui-icons location_pin"></i> &nbsp;<strong>{{category.address.zip}}</strong></span></div>
            </div>
          </div>
    </div>
    <!-- Container -->
  </div>
</template>
<script>
import http from 'axios';
import { Card } from '../components';

export default {
  components: {
    Card
  },
  props: {
    categoryId: String,
    cityName: String
  },
  data() {
    return {
      searchresults: {},
      errors: {},
      addressData: {},
      dummyResponse: {
        data: [
          {
            id: 1,
            categoryName: 'Sports',
            subCateGory: [
              {
                id: 1,
                name: 'Swimming',
                img: 'swim.jpg'
              },
              {
                id: 2,
                name: 'Tennis',
                img: 'tennis.png'
              },
              {
                id: 2,
                name: 'soccer',
                img: 'soccer.png'
              },
              {
                id: 4,
                name: 'Sketting',
                img: 'sket.jpg'
              }
            ]
          },
          {
            id: 2,
            categoryName: 'Music',
            subCateGory: [
              {
                id: 1,
                name: 'Gitar',
                img: 'gitar.png'
              },
              {
                id: 2,
                name: 'Piano',
                img: 'piano.png'
              }
            ]
          },
          {
            id: 3,
            categoryName: 'Other Activities',
            subCateGory: [
              {
                id: 1,
                name: 'Dance',
                img: 'dance.png'
              },
              {
                id: 2,
                name: 'Drama',
                img: 'drama.jpg'
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.loadData();
  },
  created() {
    this.addressData = this.$route.params.addressData;
  },
  methods: {
    loadData() {
      http
        .get(
          'https://slamsbox-server.herokuapp.com/api/categories/' +
            this.$props.categoryId +
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
    }
  }
};
</script>

<style>
body {
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  background-color: #f7f7f7;
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
</style>