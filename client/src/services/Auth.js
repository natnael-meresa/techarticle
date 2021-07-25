import axios from 'axios'


let apiURl = 'http://localhost:8081/api/login'

export default {
   

    Login(user) {
        console.log(user)
        axios.post(apiURl, user).then(() => {
            console.log('registered')
            alert('loged in')
        }).catch(error => {
            console.log(error)
            alert(error)
        });
    }
}