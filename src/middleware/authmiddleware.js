/* eslint-disable */
import axios from "@/config/axios";
import router from "@/router";
export default async function isLogin({next,to}) {
    await axios.get(process.env.VUE_APP_SERVICE_HOST+"api/ping")
    .then(response=>{
        if(response.status!==200){
            router.navigate("/");
        }
    })
    .catch(err=>{
        try{
            router.push("/");     
        }catch (e){
            
        }
    })
    return next();
}