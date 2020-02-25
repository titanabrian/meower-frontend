/* eslint-disable */
import axios from "axios";
import cookies from "vue-cookies";
import router from "@/router";
import {mapActions} from "vuex";
export default async function isLogin({next,to}) {
    
    if(cookies.get('jwt')){
        axios.defaults.headers={
            Authorization: cookies.get('jwt').token_type+" "+cookies.get('jwt').access_token
        }
    }else{
        router.push("/login")
    }
    await axios.get(process.env.VUE_APP_SERVICE_HOST+"/api/ping")
    .then(response=>{
        if(response.status!==200){
            router.push("/login")
        }else{
            return next();
        }
    })
    .catch(async err=>{
        let ref_token=cookies.get('jwt')
        if(ref_token){
            ref_token=ref_token.refresh_token
            await axios.post(process.env.VUE_APP_SERVICE_HOST+"/auth/refresh",{refresh_token:ref_token})
            .then(async response=>{
                if(response.status!==200){
                    router.push("/login")
                }else{
                    let data = response.data
                    await cookies.set("jwt",{access_token:data.access_token,refresh_token:data.refresh_token});
                    window.location.reload();                    
                    return next()
                }
            })
            .catch(err=>{
                router.push("/login")
            })
        }else{
            router.push("/login")
        }
        
    })

}