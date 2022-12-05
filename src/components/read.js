import React from "react";
import { Books } from "./books"; // Books Component from Books.js
import axios from "axios"; // Importing axios to work as our web client

export class Read extends React.Component { //Accessing the React Functionality & marked for export
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this); 
    }

    ReloadData(){ // Reload data when data has changed
        axios.get('http://localhost:4000/api/books') 
        .then((response)=>{
            this.setState({books:response.data}) 
        }) 
        .catch((error)=>{ 
            console.log(error);
        })
    }

    componentDidMount(){ // When component becomes active in the view it will tell it what to do 
        axios.get('http://localhost:4000/api/books') // Promise // My API
        .then((response)=>{
            this.setState({books:response.data}) // My JSON mybooks
        }) // if everything works correctly, html response comes back and set the state
        .catch((error)=>{  //used if errors occur
            console.log(error);
        })
    }

    state = {// Holding the components data
        books: [ ]  // An array of books
    }

    render() {
        return ( // Where the visual content of this component will be added
            <div>
                <h3>Hello from my Read Component!</h3>
                <Books books={this.state.books} ReloadData={this.ReloadData}></Books> {/* Imported from the Books Component & state  is used to contain data or information about the component*/}
            </div>
        );
    }
}