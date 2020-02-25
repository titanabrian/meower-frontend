/* eslint-disable */
import axios from "@/config/axios.js";

const state = {
    messages:[],
    detail_message:{}
}

const actions={
    async fetchMessages({commit}){
        axios.get("message")
        .then(response=>{
            commit("setMessages",response.data)
        })
        .catch(err=>{

        })
    },

    async fetchReplies({commit},params){
        axios.get("message?parent="+params)
        .then(response=>{
            commit("setMessages",response.data);
        })
        .catch(err=>{

        })
    },


    async fetchDetail({commit},params){
        await axios.get("message?id="+params)
        .then(response=>{
            commit("setDetails",response.data);
        })
        .catch(err=>{

        })
    },

    addMessage({commit},payload){
          axios.post("message",payload)
          .then(res=>{
            if(res.status==200){
              commit("pushMessage",res.data)
            }
          })
          .catch(err=>{

          })
    }
}

const mutations={
    setMessages(state,messages){
        state.messages=messages;
    },

    setDetails(state,message){
        state.detail_message=message;
    },
    pushMessage(state,message){
        state.messages.unshift(message);
    }
}

const getters = {
    allMessages:(state)=>state.messages,
    detailMessage:(state)=>state.detail_message
}

export default {state,getters,actions,mutations}