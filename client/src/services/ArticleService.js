import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'localhost:8081/api',
    withCredentials:false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

let apiURl = 'http://localhost:8081/api'

export default {
   
    getArticles(){
        return apiClient.get('/events')
    },
    postArticles(article) {
        console.log(article)
        axios.post(apiURl, article).then(() => {
            console.log('posted')
        }).catch(error => {
            console.log(error)
        });
    }
}