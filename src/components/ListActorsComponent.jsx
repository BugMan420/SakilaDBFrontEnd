import React, { Component } from 'react';
import ActorService from '../services/ActorService';


class ListActorsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            actorPackage:[],
        }
        this.editActor = this.editActor.bind(this);
    }
    

    editActor(actor_id){
        this.props.history.push(`/UpdateActor/${actor_id}`)        
    }

    componentDidMount(){
        ActorService.getActors().then((res) =>{
            this.setState({actorPackage : res.data});
        }
        )
    }
    render() {
        return (
            <div>
                <h2>Actor List</h2>
                <div className = "row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Actor ID</th>
                                <th>Actor First Name</th>
                                <th>Actor Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.actorPackage.map(actor =>
                        <tr>
                        <td>{actor.actor_id}</td>
                        <td>{actor.first_name}</td>
                        <td>{actor.last_name}</td>
                        <button onClick={() => this.editActor(actor.actor_id)} className='btn btn-info'>Update</button>
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListActorsComponent;