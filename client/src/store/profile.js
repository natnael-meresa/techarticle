import ApiService from "@/services/apiService";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from "./actions.type";
import { SET_PROFILE } from "./mutations.type";

export const profile = {
    state: {
        errors: {},
         profile: {}
    },
    getters: {
        profile(state) {
            return state.profile;
          }
    },
    actions: {
        [FETCH_PROFILE](context, payload) {
          
            return ApiService.get("/api/profile", payload)
              .then(({ data }) => {
                context.commit(SET_PROFILE, data);
                return data;
              })
              .catch((err) => {

                console.log(err)
                // #todo SET_ERROR cannot work in multiple states
                //context.commit(SET_ERROR, response.data.errors)
              });
          },
          [FETCH_PROFILE_FOLLOW](context, payload) {
            const { username } = payload;
            return ApiService.post(`/api/profile/${username}/follow`)
              .then(({ data }) => {
                context.commit(SET_PROFILE, data.profile);
                return data;
              })
              .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
              });
          },
          [FETCH_PROFILE_UNFOLLOW](context, payload) {
            const { username } = payload;
            return ApiService.delete(`/api/profile/${username}/follow`)
              .then(({ data }) => {
                context.commit(SET_PROFILE, data.profile);
                return data;
              })
              .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
              });
          }
    },
    mutations: {

        [SET_PROFILE](state, profile) {
          state.profile = profile;
          state.errors = {};
        }
      }
}
