<template>
  <div class=" py-5">
    <div class="col-md-8 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="d-flex align-items-end profile-head">
                    <div class="profile mr-3">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail">
                        <div class="">
                         <a v-if="isCurrentUser()" href="#" class="btn btn-outline-dark btn-sm">Edit profile</a>
                         <a  v-else href="#" class="btn btn-outline-dark btn-sm">Follow</a>

                        </div>
                    </div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">{{profile.username}}</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>New York</p>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">745</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Followers</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">340</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Following</small>
                    </li>
                </ul>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">Bio</h5>
                <div class="p-4 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">Web Developer</p>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { authComputed, username, profile} from "../store/helpers.js"
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from "@/store/actions.type";
// this.$route.params
export default {
    data() {
        return {
            usernameProfile: ''
        }
    },
    mounted() {
    this.$store.dispatch(FETCH_PROFILE,this.$route.params.username );   
    console.dir(this.profile)    
    },
  computed: {
    ...authComputed,
    ...username,
    ...profile,

  },
    methods: {
    isCurrentUser() {
      if (this.username && this.profile.username) {
        return this.username === this.profile.username;
      }
      return false;
    },
    follow() {
      if (!this.loggedIn) return;
      this.$store.dispatch(FETCH_PROFILE_FOLLOW, this.$route.params);
    },
    unfollow() {
      this.$store.dispatch(FETCH_PROFILE_UNFOLLOW, this.$route.params);
    }
    },
    //   created() {
    //     // this.$store.dispatch("loadSearchedJobs");
    //     this.usernameProfile = this.$route.params.username;
    //     console.log(this.usernameProfile)
    // },
}
</script>

<style scoped>

.profile-head {
    transform: translateY(5rem)
}

.cover {
    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
    background-size: cover;
    background-repeat: no-repeat
}

body {
    background: #654ea3;
    background: linear-gradient(to right, #e96443, #904e95);
    min-height: 100vh;
    overflow-x: hidden
}
</style>