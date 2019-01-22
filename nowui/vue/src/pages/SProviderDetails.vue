<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
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
      <div class="container">          
        <div class="row">
           <div class="col-lg-10">
           <div class="col-lg-8 col-md-10 mx-auto">
            <h2 class="section-heading">About Us</h2>
            <p>{{provider.description}}</p>
          </div>
        </div>
        <div class="col-lg-2">
<b>Contact Details:</b> <br />
    Phone: {{provider.phone}}<br />
     <a href="mailto:support@mysite.com">{{provider.email}}</a><br /><br />
    <strong>Address:</strong><br />{{provider.address.streetAddress1}} <br />
    {{provider.address.streetAddress2}} <br />{{provider.address.city}} <br />{{provider.address.state}} ,{{provider.address.zip}} 
    <br /><br />
    <b>Website:</b><br />  
    <a href="provider.webURL">{{provider.webURL}}</a><br />
        </div>
        </div> 
      </div>
    </article>
     
<button v-on:click="goBack()">Back</button>
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
</template>
<script>
import http from 'axios';
import router from '../router.js'

export default {
  props: {
    providerDetails: {}
  },
  data() {
    return {
      provider: {}
    };
  },
  created() {
    this.provider = this.$route.params.providerDetails;
  },
  methods:{
    goBack(){
      router.back();
    }
  }
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
</style>
