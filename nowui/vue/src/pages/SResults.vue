<template>
      <div class="container-fluid">
           <div class="header">
      <h5 style="font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;">Found {{searchresults.length}} Activites Near :&nbsp;<strong>{{this.addressData}}</strong></h5>

    
    </div>
          <div v-for="category in searchresults"> 
          <div class="card-body">
          <div class="panel-heading">
            <h4><strong>{{category.categoryName}}</strong></h4>
          </div>
          <subCateGory v-bind:categoryId="category.id"/>

        </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="alertModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
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


export default {
  components: {
    subCateGory
  },
  
  data() {
    return {
      searchresults: {},
      errors: {},
      addressData:{},
      dummyResponse: {
        data: [
          {
            id:1,
            categoryName: 'Sports',
            subCateGory: [
              {
                id:1,
                name: 'Swimming',
                img: 'swim.jpg'
              },
              {
                id:2,
                name: 'Tennis',
                img: 'tennis.png'
              },
              {
                id:2,
                name: 'soccer',
                img: 'soccer.png'
              },
              {
                id:4,
                name: 'Sketting',
                img: 'sket.jpg'
              }
            ]
          },
          {
            id:2,
            categoryName: 'Music',
            subCateGory: [
              {
                id:1,
                name: 'Gitar',
                img: 'gitar.png'
              },
              {
                id:2,
                name: 'Piano',
                img: 'piano.png'
              }
            ]
          },
          {
            id:3,
            categoryName: 'Other Activities',
            subCateGory: [
              {
                id:1,
                name: 'Dance',
                img: 'dance.png'
              },
              {
                id:2,
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
    if(!this.searchresults || this.searchresults.length==0){
      $('#alertModal').modal('show');
    }
  },
  created() {
            this.addressData = this.$route.params.addressData;
        },
  methods: {
    loadData() {
      console.log('dh=' + (this.addressData));
      http
        .get('https://slamsbox-server.herokuapp.com/search/city/' + this.addressData)
        .then( (response)=> {
          this.searchresults = response.data;
        })
        .catch(e => {
          //this.errors.push(e);
          console.log("Errors" + e);
        });
    },getImgUrl(pic) {
         return require('../../public/img/'+pic)
}
  }
};
</script>

<style>
.card-title {
  text-align: center;
}

.card{
  margin: 0.5rem;
  margin-bottom: 1px;
}



.card-img-top{
   width: 50%;
    height: 10vw;
    object-fit: fill; 
}

.h4{
  font-family: 'Arial Black", Gadget, sans-serif';
}

.starter-page {
  min-height: calc(100vh - 95px);
}
</style>