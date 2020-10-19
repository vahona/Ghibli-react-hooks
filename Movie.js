import React, { Component } from 'react'

class Movie extends Component {
   constructor(){
       super()
       this.state = {
           title: "",
           release_date: "",
           rt_score: "",
           description: "",
           director: "",
           producer: "",
           AllData: [],
       }
   }


    async componentDidMount() {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        console.log(response);
        const data = await response.json();

        console.log(data);

        this.setState({
            AllData: data.movie
        })

    }

    render(){
        return(
            <div className="movie-detail">
                <div className="information">
                    <div className="release_score">
                        <h2>{this.state.title}</h2>
                        <div className="movie_data_release">{this.state.release_date}</div>
                        <div className="movie_tr_score">{this.state.rt_score}</div>
                    </div>
                    <p className="description">{this.state.description}</p>
                    <ul className="list_of_responsible">
                        <li>
                            {this.state.director}
                        </li>
                        <li>
                            {this.state.producer}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Movie