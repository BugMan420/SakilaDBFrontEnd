import React, { Component } from 'react';
import LanguageService from '../services/LanguageService';

class ListLanguageComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            languagePackage: []
        }
        this.addLanguage = this.addLanguage.bind(this)
        this.deleteLanguage= this.deleteLanguage.bind(this);
    }
    componentDidMount(){
        LanguageService.getLanguages().then((res) =>{
            this.setState({languagePackage : res.data});
        }
        )
    }

    deleteLanguage(language_id){
        LanguageService.deleteLanguage(language_id)
        .then ( res => {
            this.setState({languagePackage: this.state.languagePackage.filter(language => language.language_id !== language_id)})
        })
    }

    addLanguage(){
        this.props.history.push('/AddLanguage')
    }
    render() {
        return(
            <div>
            <h2 className="text-center">List of Languages</h2>
            <div className = "row">
               <button className='btn btn-primary' onClick={this.addLanguage}>Add Language</button> 
            </div>
            <div className = "row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Language ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.languagePackage.map(
                                language =>
                                <tr>
                                    <td>{language.language_id}</td>
                                    <td>{language.name}</td>
                                    <td>
                                        <button onClick={() => this.deleteLanguage(language.language_id)} className="btn btn-danger">Delete Language</button>
                                    </td>
                                </tr>
                            )
                        }

                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default ListLanguageComponent;