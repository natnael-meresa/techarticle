import axios from 'axios'


let apiURl = 'http://localhost:8081/api/register'

export default {
   

    register(user) {
        console.log(user)
        axios.post(apiURl, user).then(() => {
            console.log('registered')
        }).catch(error => {
            console.log(error)
        });
    }
}