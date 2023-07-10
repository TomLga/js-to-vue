<template>
    <div>

        <nav class="navbar navbarnavbar navbar-expand-lg">
            <div class="container-fluid navbar-itself">
              <img class="logo" src="https://i.postimg.cc/9QMB3PWq/Mysterious-gamer-esport-mascot-logo-design-on-transparent-background-PNG.png">
              <a class="navbar-brand" href="#">Tech 4 &gt; less</a>
    
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler"  style="background-image:url(https://i.postimg.cc/9QMB3PWq/Mysterious-gamer-esport-mascot-logo-design-on-transparent-background-PNG.png) ;"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav" >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link> |
                  </li>
                  <li class="nav-item">
                    <router-link to="/products">products</router-link>|
                  </li>

                  <li class="nav-item">
                    <router-link to="/checkout">checkout</router-link>|
                  </li>

                  <li class="nav-item">
                    <router-link to="/about">About</router-link>| </li>
                  <li class="nav-item">
                    <router-link to="/admin">admin</router-link>
                </li>
                </ul>
              </div>
            </div>
          </nav>
    
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>