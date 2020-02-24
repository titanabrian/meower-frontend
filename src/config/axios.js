/* eslint-disable */
import axios from "axios";
import cookie from "vue-cookies";
import notifications from "vue-notification";
import Vue from "vue";
import router from "../router";
Vue.use(notifications);

let headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: ""
};

let instance=axios.create({
    baseURL: process.env.VUE_APP_SERVICE_HOST + "/api/",
    headers: headers
});

instance.interceptors.request.use((config)=>{
    let jwt = cookie.get('jwt');
    if(jwt){ 
      let authorization = "Bearer"+" "+jwt.access_token;
      config.headers.Authorization=authorization;
    }
    return config;
},(error)=>{

})

instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      let response = error.response;
      if (response.status === 401) {
        try{
            window.location.replace("/login");
        }catch (err){

        }
      } else if (response.status === 404) {
        Vue.notify({
          group: "error",
          title: "Error Notification",
          text: "Ops, Request Url Not Found"
        });
      }else if(response.status === 500){
        Vue.notify({
          group: "error",
          title: "Error Notification",
          text: "Ops, Internal Server Error"
        });
      } else if (response.status === 422) {
        Vue.notify({
          group: "error",
          title: "Validation Error",
          text: response.data.errors[0].msg
        });
      }
      return error;
    }
);

export default instance;