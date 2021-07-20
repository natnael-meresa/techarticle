<template>
  <div class="home">
    <div class="heads p-4 p-md-5 mb-4 text-white" id="heads">
      <div class="col-md-6 px-0 mx-auto">
        <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>
    <main class="container">
      <div class="row g-5">
        <div class="col-md-8">
              <div class="feed-toggle">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li v-if="isAuthenticated" class="nav-item" role="presentation">
                      <router-link
                        to="/home-my-feed"
                        class="nav-link"
                        id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"
                        active-class="active"
                      >
                        Your Feed
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        to="/"
                        exact
                        class="nav-link"
                        id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"
                        active-class="active"
                      >
                        Global Feed
                      </router-link>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> Global Feed</div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                </div>
              </div>
        </div>

        <div class="col-md-4">
          <div class="position-sticky" style="top: 2rem;">
            <h2>Popular Tags</h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style>
  .heads{
    /* background: #33B5CC; */
    background: #0B4C58;
  }
</style>
