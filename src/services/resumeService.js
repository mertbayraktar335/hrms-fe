import axios from "axios"

export default class ResumeService{

    getResumeByCandidateAndResume(id,candidateId){
        return axios.get("http://localhost:8080/resumes/findbycandidateandresume?candidateId="+id+candidateId)
    }
    addResume(){

        return axios.get("http://localhost:8080/resumes/addresume")
    }
}