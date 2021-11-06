import Loader from "react-loader-spinner";
import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default class Preloading extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight ,
       behavior: 'instant',
     });
  }
  //other logic
  render()

{
    return (
     <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
   
    );
  }
}