import React, {Component} from 'react';
import GetImageForm from './GetImageForm';


export default class ImageDisplay extends Component{
  constructor(props){
    super(props);
  }
  render(){


    let pictures = this.props.pics.map((pics, index) =>{
      return (
    <img key={index} className="satImage" src={pics.img_src} />


      );
    })
    return (

      <div className="picture_box">
        {pictures}
      </div>
    )
  }
}
