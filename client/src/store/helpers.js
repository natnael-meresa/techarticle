import { mapGetters } from 'vuex'

export const authComputed = {
    ...mapGetters(['loggedIn'])
}

export const username = {
    ...mapGetters(['userName'])
}

export const Article = {
    ...mapGetters(['article'])
}

export const articlesCount = {
    ...mapGetters(['articlesCount'])
}

export const articles = {
    ...mapGetters(['articles'])
}
export const tags = {
    ...mapGetters(['tags'])
}

export const isLoading = {
    ...mapGetters(['isLoading'])
}
export const profile = {
    ...mapGetters(['profile'])
}

export const comments = {
    ...mapGetters(['comments'])
}
// export const currentUser = {
//     ..mapGetters([])
// }