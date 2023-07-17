import logo from './logo.svg';
import './App.css';
import Canvas from "./Canvas";
import image from "./image.jpg";
import image2 from "./image2.jpg"
import{makeWB} from "./BW";
import {inversionFilter} from "./utils"

function App() {
const processImage = (imageData)=>{
  return makeWB(imageData)
}
  const processImage2 = (imageData)=>{
    return inversionFilter(imageData)
  } 

  return (
    <div className="App">
        <Canvas image ={image} processImage={processImage}/>
        <Canvas image ={image2} processImage={processImage2}/>
    </div>
  );
}

export default App;
