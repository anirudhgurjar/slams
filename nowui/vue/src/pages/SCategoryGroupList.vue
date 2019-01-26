<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-1">
        <span></span>
      </div>
      <div class="col">
        <div class="header">
          <h5
            style="font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,'Helvetica Neue', sans-serif !important;" >
            <!-- Found {{searchresults.length}} Activites Near :&nbsp; -->
           We have found {{searchresults.length}} {{(searchresults.length==1)?'Activity':'Activities'}} Near :&nbsp;
            <strong>{{this.addressData}}</strong>
          </h5>
        </div>
        <div v-for="(list, key) in Array.from(searchresultsGrouped)">
          <h4 style>
            <strong>{{list[0]}}</strong>
          </h4>
          <hr>
          <div class="card-deck">
          <div v-for="obj in list[1]">
                <div class="card" style="width: 18rem;">
                     <img class="card-img" src="https://picsum.photos/150" alt="Card image cap">
                     <div class="card-img-overlay  d-flex flex-column justify-content-end">
                         <h5 class="card-title">    
                             <a href="#" v-on:click.stop="navigate(obj.id,obj.categoryName)"><strong class="strong">{{obj.categoryName}}</strong></a>
                         </h5>
                     </div>
                </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="alertModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from 'axios';
import subCateGory from './SListing';
import dh from './endpoints.js';
import Mapper from './CategoryMapper.js';
import {API_HOST} from './endpoints.js';
import router from '../router.js'


export default {
  components: {
    subCateGory
  },

  data() {
    return {
      searchresults: {},
      searchresultsGrouped: {},
      allCategoryData :[],
      errors: {},
      addressData: {},
      categoryDispData:{}
    };
  },
  mounted() {
  if(!this.$route.params.statedata){
      this.loadData();
    }else{           
      this.searchresultsGrouped= this.$route.params.statedata;//Mapper.groupBy(this.$route.params.statedata, p=> p.parent_id,catData.data); 
       this.searchresults= this.$route.params.searchresults;//Mapper.groupBy(this.$route.params.statedata, p=> p.parent_id,catData.data); 
      
    }
  },
  created() {
    this.addressData = this.$route.params.addressData;
    this.allCategoryData=Mapper.getCategorydata();    
  },
  methods: {
    loadData() {

        http.get(API_HOST + '/api/categories/')
        .then(catData => {
          http
        .get(API_HOST +'/search/city/' + this.addressData)
        .then(response => {
          this.searchresults = response.data;
          this.searchresultsGrouped=Mapper.groupBy(this.searchresults, p=> p.parent_id,catData.data);
        console.log('Got data=');
        console.log(JSON.stringify(this.searchresultsGrouped));
        this.searchresultsGrouped.forEach(element => {
            console.log(JSON.stringify(element));
        });
        })
        .catch(e => {
          //this.errors.push(e);
          console.log('Errors' + e);
        });
        })
        .catch(e => {
          //this.errors.push(e);
          console.log('Errors' + e);
        });



      console.log('dh=' + this.addressData);
      Mapper.getCategorydata().then(catData=>{
 

      });



    },
    navigate(ctId,ctName){
      // alert(JSON.stringify(category));
       router.push({name: 'slisting', params: { categoryId: ctId , categoryName :ctName,cityName:this.addressData, statedata:this.searchresultsGrouped,searchresults:this.searchresults}});
    }
  }
};
</script>

<style>
.card-title {
  text-align: center;
}

.card {
  margin: 0.5rem;
  margin-bottom: 1px;
}

.container-fluid {
  background: none;
  margin-top: 0px;
}

.card-img-top {
  width: 50%;
  height: 10vw;
  object-fit: fill;
}

.h4 {
  font-family: 'Arial Black", Gadget, sans-serif';
}

.starter-page {
  min-height: calc(100vh - 95px);
}

.card-img{
  opacity: 0.8;
}

.strong{
  color: aliceblue;
}

</style>