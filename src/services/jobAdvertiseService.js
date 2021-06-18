import axios from "axios"

export default class JobAdvertiseService{

    getJobAdvertisesByIsActiveOrderByCreatedDateDesc(){
        return axios.get("http://localhost:8080/job_advertises/getbydateDesc")
    }
}