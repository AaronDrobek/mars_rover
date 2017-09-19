import React, {Component} from 'react';
import ImageDisplay from './ImageDisplay';
const API_KEY = 'NUN4M3hAiJUekLTQkEA1zr0pCKiILMdsDvNWDYnz';



// 'https://api.nasa.gov/planetary/apod?api_key=NUN4M3hAiJUekLTQkEA1zr0pCKiILMdsDvNWDYnz'

export default class GetImageForm extends Component{
  constructor(props){
    super(props);

    this.handleRover=this.handleRover.bind(this);
    this.handleCamera=this.handleCamera.bind(this);
    this.handleSol=this.handleSol.bind(this);
    this.fetchRoverImage=this.fetchRoverImage.bind(this);
    this.state={
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    };
  }

    handleRover(event){
      this.setState({rover: event.target.value})
    }
    handleCamera(event){
      this.setState({camera: event.target.value})
    }
    handleSol(event){
      this.setState({sol: event.target.value})
    }



fetchRoverImage = (event) => {
    event.preventDefault();
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`).then(results => {
      return results.json();
    }).then(data => {
      console.log(data.photos,'this is data');
      this.setState({images: data.photos});
    });
  }

  render(){
    return(
  <div className="form_div">
  <label className="headlines">Choose Your Rover</label>
  <select  onChange={this.handleRover} id="rover" value={this.state.value}>
    <option value="Curiosity">Curiosity</option>
    <option value="Opportunity">Opportunity</option>
    <option value="Spirit">Spirt</option>
  </select>
  <label className="headlines">Select Camera Type</label>
  <select onChange={this.handleCamera} id="rover" value={this.state.value}>
    <option value="fhaz">FHAZ (Front Hazard)</option>
    <option value="rhaz">RHAZ (Rear Hazard)</option>
    <option value="navcam">NAVCAM (Navigation Cam)</option>
  </select>
  <label className="headlines">Select Martian Sol Range: 1000-2000</label>
  <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
  <button className="button" onClick={this.fetchRoverImage}> Get Rover Image </button>

  <div className="photo_box">
  <ImageDisplay pics={this.state.images}/>
  </div>
  </div>
    )
  }

}
