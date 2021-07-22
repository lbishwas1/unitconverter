import React,{Component} from 'react';
import img from '../img/image.jpg'
import Style from './Landing.module.css'
class Landing extends Component {
        
    render() { 
       
        return (<>
        <h1>Nepali Units Converter</h1>
        <img src={img} className={Style.img}/> 
 </>
 );
 
               }}
 
export default Landing;