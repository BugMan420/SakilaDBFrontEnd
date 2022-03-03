import axios from 'axios';

const ACTOR_API_BASE_URL = 'http://localhost:8080/homepage/Actors'
const GET_ACTORID_BASE_URL = 'http://localhost:8080/homepage/findActors/'
const UPDATE_ACTOR_BASE_URL = 'http://localhost:8080/homepage/updateActor/'

class ActorService{

    getActors(){
        return axios.get(ACTOR_API_BASE_URL);
    }

    getActorbyID(actor_id){
        return axios.get(GET_ACTORID_BASE_URL + actor_id)
    }

    updateActor(first_name,last_name, actor_id){
        return axios.put(UPDATE_ACTOR_BASE_URL +actor_id+'?first_name='+first_name+'&last_name='+last_name);
    }
}

export default new ActorService()