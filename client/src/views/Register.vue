<template>
    <main class="form-signin">
        <form>
            <img class="mb-4" src="/techarticlelogo.png" alt="" width="170" height="57">
            <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
            <p>Already have an account?
                <router-link to="/login">
                  Sign in
                </router-link>
            </p>
            <div class="form-floating">
            <input type="text"  v-model="user.username" class="form-control" id="username" name="username" placeholder="name">
            <label for="floatingInput">User Name</label>
            </div>
            <div class="form-floating">
            <input type="email" v-model="user.email" class="form-control" id="email" name="email" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" v-model="user.password" class="form-control" id="password" name="password" placeholder="Password">
            <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" v-on:click="register" type="submit">Sign Up</button>
        </form>
    </main>
</template>

<script>
import ArticleService from '@/services/Auth'

export default {
    data(){
        return {
            user: {
                email:undefined,
                username:null,
                password:null,
            },
            repns:null
        }
    },
        methods: {
        register(){
            console.log(this.user)
            ArticleService.register(this.user)
            .then(response => {
                this.repns = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    .form-signin {
    width: 100%;
    max-width: 430px;
    padding: 15px;
    margin: auto;
    }

    .form-signin .checkbox {
    font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
    z-index: 2;
    }

    .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    }
</style>