import './App.css';
import Canvas from "./Canvas";
import image from "./image.jpg";
import image2 from "./image2.jpg"
import{makeWB} from "./Black and white";
import {inversionFilter, brightness} from "./utils"

function App() {
const processImage = (imageData)=>{
  return makeWB(imageData)
}
  const processImage2 = (imageData)=>{
    return inversionFilter(imageData)
  }
  const processImage3 = (imageData)=>{
    return brightness(imageData,5)
  }
  return (
    <>
    <div className="Indent">
        Черно-белый:
    </div>
    <div className="App">
        <Canvas image ={image} processImage={processImage}/>
        
    </div>
    <div className="Indent">
        Инверсия:
    </div>
    <div className="App">
      <Canvas image ={image2} processImage={processImage2}/>
    
    </div>
    </>
  );
}

export default App;
