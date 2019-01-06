<template>
    <div class="wrapper">
        <div class="page-header clear-filter" filter-color="orange">
            <parallax class="page-header-image">
            </parallax>
            <div class="container-fluid"><br><br><br><br>
                <div class="text-center brand">
                    <h1 class="h1">Explore.Discover.Learn</h1>
                    <h5>Slamsbox helps you to find great activities around you</h5>
                     <label for="address" class="btn btn-info" >Near</label>
                    <!-- <gmap-autocomplete class="btn btn-neutral" ref="autocomplete" id="address" size="50" style="padding-right: 30px" placeholder="Postal code">
                    </gmap-autocomplete> -->
                      <input on type="text" class="btn btn-neutral"  v-model="address" size="50" style="padding-right: 30px" placeholder="Postal code"/>
                   
                 <router-link :to="{ name: 'sresults', params: { addressData: this.address } }" class="btn btn-primary" tag="button">Search</router-link>
 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          address:"", 
          autocomplete:{},

        }
    },
    methods :{
        submitForm(){
            console.log(JSON.stringify(JSON.stringify(this.autocomplete)));
        }
    },
    mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );
    }
}
</script>

<style>
.wrapper{
    background:url('../../public/img/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}



</style>