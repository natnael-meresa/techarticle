<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <my-header/> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img class="" src="/techarticlelogo.png" alt="" width="170" height="50">
        </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div  v-if="!isAuthenticated"  class="collapse  navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" exact to="/" >
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
       <div  v-else>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link" active-class="active" exact to="{ name: 'home' }">
                Home
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="{ name: 'article-edit' }">
                <i class="ion-compose"></i>&nbsp;New Article
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact to="{ name: 'settings' }">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </router-link>
            </li>
            <li class="nav-item" v-if="currentUser.username">
              <router-link class="nav-link" active-class="active" exact to="{ 
                name: 'profile',
                params: { username: currentUser.username }
                }">
                {{ currentUser.username }}
              </router-link>
            </li>
          </ul>
        </div>
        
      </div>
      
    </nav>
    
   <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  Components: {
    'my-header': Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
