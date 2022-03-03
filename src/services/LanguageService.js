import axios from 'axios';

const LANGUAGE_API_BASE_URL = 'http://localhost:8080/homepage/Languages'
const ADDLANGUAGE_API_BASE_URL = 'http://localhost:8080/homepage/addLanguages?name='
const DELETELANGUAGE_API_BASE_URL = 'http://localhost:8080/homepage/removeLanguages/'
class languageService{

    getLanguages(){
        return axios.get(LANGUAGE_API_BASE_URL);
    }

    addLanguage(language){
        return axios.post(ADDLANGUAGE_API_BASE_URL+language)
    }

    deleteLanguage(language_id){
        return axios.delete(DELETELANGUAGE_API_BASE_URL + language_id)
    }
}

export default new languageService()