import React from "react";
export default class App extends React.Component{
    state={
            loading:true,
            person:null
        };

    async componentDidMount()
    {
        const url='https://www.themealdb.com/api/json/v1/1/search.php?f=a';
        const response=await fetch(url); // Fetching data from API
        const data=await response.json(); // converting fetch data into json format
        this.setState({person:data.meals,loading:false}) //upadating states
        console.log(data.meals[0]);
    }
    render()
    {
      return(
        <div>
         {this.state.loading ? <div>loading..</div>:
         <div className="wrapper">
          <div className="card">
            <div className="cardBody1">
              <img src={this.state.person[0].strMealThumb} className="img"/>
              <h3>{this.state.person[0].strMeal}</h3>
            </div>
          </div>
          <div className="card">
            <div className="cardBody2">
              <img src={this.state.person[1].strMealThumb} className="img"/>
              <h3>{this.state.person[1].strMeal}</h3>
            </div>
          </div>
          <div className="card">
            <div className="cardBody3">
              <img src={this.state.person[2].strMealThumb} className="img"/>
              <h3>{this.state.person[2].strMeal}</h3>
            </div>
          </div>
          <div className="card">
            <div className="cardBody4">
              <img src={this.state.person[3].strMealThumb} className="img"/>
              <h3>{this.state.person[3].strMeal}</h3>
            </div>
          </div>
         </div>
         }
        </div>
      );
    }
}