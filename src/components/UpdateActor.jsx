import React, { Component } from 'react';
import ActorService from '../services/ActorService';

class UpdateEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            actor_id: this.props.match.params.id,
            first_name:'',
            last_name:''
        }
        this.updateFirstNameHandler = this.updateFirstNameHandler.bind(this);
        this.updateLastNameHandler = this.updateLastNameHandler.bind(this);
        this.updateActor = this.updateActor.bind(this)
        this.returnToList = this.returnToList.bind(this)
    }

    componentDidMount(){
        ActorService.getActorbyID(this.state.actor_id).then((res) =>{
            let actor = res.data;
            this.setState({first_name: actor.first_name,
            last_name: actor.last_name})
        })
    }

    updateActor = (e) => {
        e.preventDefault();
        let first_name = this.state.first_name
        let last_name = this.state.last_name;
        let actor_id = this.state.actor_id;
        console.log('ID => ' + this.state.actor_id)
        console.log('Actor =>'+ JSON.stringify(first_name+' '+ last_name))
        ActorService.updateActor(first_name, last_name,actor_id)
        .then(res => {
            this.props.history.push('/Actors')
        })

    }

    updateFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    updateLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    returnToList(){
        this.props.history.push('/Actors')
    }


    render() {
        return (
  <div>
                <div className='container'>
                <div className = "row"> 
                </div>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Update an Actor</h3>
                    <div className='card-body'>
                        <form>
                        <div className = "form-group">
                        <label>Insert first name:</label>
                        <input placeholder='First Name' name='first_name' className='form-control' 
                        value={this.state.first_name} onChange={this.updateFirstNameHandler}/>
                        </div>
                        <div className = "form-group">
                        <label>Insert last name:</label>
                        <input placeholder='Last Name' name='last_name' className='form-control' 
                        value={this.state.last_name} onChange={this.updateLastNameHandler}/>
                        </div>
                        

                        <button className='btn btn-success' onClick={this.updateActor}>Update the actor</button>
                        <button className='btn btn-primary' onClick={this.returnToList}>Return to actor list</button> 
                        </form>
                    </div>                        
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployee;