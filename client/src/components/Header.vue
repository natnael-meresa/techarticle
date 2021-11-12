<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container-fluid ml-4">
        <router-link class="navbar-brand" to="/">
          <img class="" src="/techarticlelogo.png" alt="" width="170" height="50">
        </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            

        <div  v-if="!loggedIn"  class="collapse  navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link" active-class="active" exact  to="/">
                Home
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
                <router-link class="nav-link" active-class="active" exact to="/login" >
                    <i class="ion-compose"></i>Sign in
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" exact to="/register" >
                    <i class="ion-compose"></i>Signup
                </router-link>
            </li>
          </ul>
        </div>
       <div  v-else class="collapse  navbar-collapse ml-4" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link" active-class="active" exact to="/">
                Home
              </router-link>
            </li>
          </ul>
          
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/article-create">
                New Article
              </router-link>
            </li>
            
            <li class="nav-item">
                <ul class="navbar-nav ml-4 pl-4 mb-2 mb-lg-0">
                    <li class="nav-item dropdown ">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ userName }}</span>
                          <!-- <img class="img-profile rounded-circle" src="../assets/img/undraw_profile.svg"> -->
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                          <li>
                             <a class="dropdown-item">
                               <router-link class="nav-link" active-class="active" exact to="/settings">
                                Settings
                              </router-link>
                            </a>    
                          </li>
                          <li>
                             <a class="dropdown-item">
                               <router-link class="nav-link" active-class="active" exact to="/profile">
                                Profile
                              </router-link>
                            </a>    
                          </li>
                          <li>
                            <a class="dropdown-item pl-2" @click="logout">
                                Logout
                            </a>
                          </li>
                        
                      </ul>
                    </li>
                    
                  </ul>
            </li>

            
          </ul>
        </div>
        
      </div>
      
    </nav>
    </div>
</template>

<script>

import { authComputed, username} from "../store/helpers.js"

export default {
  name: 'Header',
  data() {
    return {
        name: null,
    };
},
  computed: {
    ...authComputed,
    ...username,
},

 methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
      this.$forceUpdate()
    },

    check(){
        console.log(`UserName: ${this.userName}`)
    }
  },

}
</script>
