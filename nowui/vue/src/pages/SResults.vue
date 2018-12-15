<template>
      <div class="container">
          <div class="card" v-for="category in dummyResponse.data"> 
          <div class="card-body">
          <div class="panel-heading">
            <h2>{{category.categoryName}}</h2>
          </div>
          <div v-for="subCategory in category.subCateGory" class="card" style="width: 12rem;padding:2px;">
            <img class="card-img-top" v-bind:src="getImgUrl(subCategory.img)" alt="desc">
            <div class="card-footer">
              <h5 class="card-title">{{subCategory.name}}</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
</template>
<script>
import http from 'axios';

export default {
  
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
  },
  created() {
            this.addressData = this.$route.params.addressData;
        },
  methods: {
    loadData() {
      http
        .psot('https://slamsbox.com/api/find_activities')
        .then(response => (this.searchresults = response.data))
        .catch(e => {
          this.errors.push(e);
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
</style>