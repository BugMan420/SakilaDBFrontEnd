import React, { Component } from 'react';
import LanguageService from '../services/LanguageService';

class AddLanguage extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
        }
        this.allLanguages = this.allLanguages.bind(this)
        this.addLanguageHandler = this.addLanguageHandler.bind(this);
        this.saveLanguage = this.saveLanguage.bind(this);
    }

    saveLanguage = (e) => {
        e.preventDefault();
        let language = this.state.name;
        

        LanguageService.addLanguage(language)
        .then(res =>{
            this.props.history.push('/Languages')
            console.log(res.data)
        })
        //console.log('Language =>' + JSON.stringify(language))
    }

    addLanguageHandler=(event) => {
        this.setState({name: event.target.value})
    }

    allLanguages(){
        this.props.history.push('/Languages')
    }

    render() {
        return (
            <div>
                <div className='container'>
                <div className = "row"> 
                </div>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add a Language</h3>
                    <div className='card-body'>
                        <form>
                        <div className = "form-group">
                        <label>Insert language name:</label>
                        <input placeholder='Language' name='name' className='form-control' 
                        value={this.state.name} onChange={this.addLanguageHandler}/>
                        </div>

                        <button className='btn btn-success' onClick={this.saveLanguage}>Save language to the list</button>
                        <button className='btn btn-primary' onClick={this.allLanguages}>Return to language list</button> 
                        </form>
                    </div>                        
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default AddLanguage;