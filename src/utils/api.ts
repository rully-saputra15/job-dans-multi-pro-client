import axios from "axios";
import Cookies from "js-cookie";
import { LoginPayload } from "../interfaces";

const instance = axios.create({
    baseURL: "http://localhost:3000"
})

const api = {
    login(loginPayload:LoginPayload){
        return instance.post("/login", {
           username: loginPayload.username,
           password: loginPayload.password
        })
    },
    getAllJob(params:string){
        const url = params ? `/jobs${params}` : "/jobs"
        return instance.get(url, {
            headers: {
                access_token: Cookies.get("access_token")
            }
        })
    },
    getJobById(id:string){
        return instance.get(`/jobs/${id}`, {
            headers: {
                access_token: Cookies.get("access_token")
            }
        })
    }
}

export default api