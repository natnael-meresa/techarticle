import axios from 'axios'


let apiURl = '/api/auth/login'

export default {
   

    Login(user) {
        console.log(user)
        axios.post(apiURl, user).then(() => {
            console.log('registered')
            alert('loged in')
        }).catch(error => {
            console.log(error.response)
            alert(`erro:${error.response.data.msg}, and the response: `)
            return(error.response.data.msg)
        });
    },
    register(user){
        axios.post('/api/auth/register', user).then((res) => {
            console.log('registered')
            console.log(`response: ${res}`)
        }).catch(error => {
            console.log(error.response)
            return(error)
        })
    }
} 