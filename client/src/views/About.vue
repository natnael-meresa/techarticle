<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click='click'>click me</button>
  </div>
</template>

<script>
import axios from 'axios'
	
	export default {
		methods: {
			async click(){
				let response = await axios.get('//localhost:8081/api/auth/me')
				console.log(`username:- ${response.data.username}`)
				console.log(`names:- ${response.data.email}`)
				console.log(`emial:- ${response.user}`)
			}
		}
	}
</script>