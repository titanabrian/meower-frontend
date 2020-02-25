/* eslint-disable */
import cookies from "vue-cookies";
import jwt from "jsonwebtoken";
const state = {
    current_user:{}
}

const actions={
    async fetchCurrentUser({commit}){
        let jt = cookies.get("jwt")
        if(jt){
            let user=jwt.decode(jt.access_token);
            commit("setCurrentUser",user);
        }
    },
}

const mutations={
    setCurrentUser(state,user){
        state.current_user=user;
    },
}

const getters = {
    currentUser:(state)=>state.current_user,
}

export default {state,getters,actions,mutations}