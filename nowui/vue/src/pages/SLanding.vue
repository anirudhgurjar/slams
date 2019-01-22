<template>
  <div class="container-fluid1">
    <div class="page-header clear-filter">
      <div class="jumbotorn">
        <div class="text-center brand">
          <h1 class="h1">Explore.Discover.Learn</h1>
          <h5>Slamsbox helps you to find great activities around you</h5>
          <form class="col-lg-12 d-flex justify-content-center">
            <div class="form-group form-inline">
              <span class="btn btn-info">Near</span>
              <input
                type="text"
                class="form-control"
                v-model="address"
                size="30"
                style="border:none!important; border-radius: 0px !important;background-color:white!important"
                placeholder="Postal code"
              >
              <router-link
                :to="{ name: 'scategorygroup', params: { addressData: this.address } }"
                class="btn btn-primary btn"
                tag="button"
              >Search</router-link>
            </div>
          </form>
          <div class="form-group d-flex justify-content-center">
           
              <button class="btn btn-icon  btn-round btn-info">
                <i class="fab fa-twitter"/>
              </button>
           
           
              <button class="btn btn-icon btn-round btn-info">
                <i class="fab fa-facebook"/>
              </button>
           
           
              <button class="btn btn-icon btn-round btn-danger">
                <i class="fab fa-google"/>
              </button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
          address:""
        }
    },
};
</script>

<style>
.jumbotorn {
  margin-top: 15rem;
  align-content: center;
}

.container-fluid1 {
  background: url('../../public/img/background.jpg') !important;
  background-repeat: no-repeat;
  background-size: cover; 
}
h2 {
  font-size: 24px;
  text-transform: uppercase;
  color: #303030;
  font-weight: 600;
  margin-bottom: 30px;
}
h4 {
  font-size: 19px;
  line-height: 1.375em;
  color: #303030;
  font-weight: 400;
  margin-bottom: 30px;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(70%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@-webkit-keyframes slide {
  0% {
    opacity: 0;
    -webkit-transform: translateY(70%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
  }
}
@media screen and (max-width: 768px) {
  .col-sm-4 {
    text-align: center;
    margin: 25px 0;
  }
  .btn-lg {
    width: 100%;
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 480px) {
  .logo {
    font-size: 150px;
  }
}
</style>