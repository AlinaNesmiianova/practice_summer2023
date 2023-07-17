import logo from './logo.svg';
import './App.css';
import Canvas from "./Canvas";
import image from "./image.jpg";
import{makeWB} from "./Black and white";

function App() {
const processImage = (imageData)=>{
  return makeWB(imageData)
}
  return (
    <div className="App">
        <Canvas image ={image} processImage={processImage}/>
    </div>
  );
}

export default App;
