import './App.css'
import Canvas from "./Canvas"
import image from "./image.jpg"
import image2 from "./image2.jpg"
import { makeWB } from "./utils"
import { inversionFilter, brightness } from "./utils"
import { flipHorizontal, flipVertical } from "./utils"

function App() {
  const processImage = (imageData) => {
    return makeWB(imageData)
  }
  const processImage2 = (imageData) => {
    return inversionFilter(imageData)
  }
  const processImage3 = (imageData) => {
    return brightness(imageData, 5)
  }
  const processImage4 = (imageData) => {
    return flipHorizontal(imageData)
  }
  const processImage5 = (imageData) => {
    return flipVertical(imageData)
  }
  return (
    <>
      <div className="Indent">
        Черно-белый:
      </div>
      <div className="App">
        <Canvas image={image} processImage={processImage} />
      </div>
      <div className="Indent">
        Инверсия:
      </div>
      <div className="App">
        <Canvas image={image2} processImage={processImage2} />
      </div>
      <div className="Indent">
        Яркость:
      </div>
      <div className="App">
        <Canvas image={image} processImage={processImage3} />
      </div>
      <div className="Indent">
        Отражение по горизонтали:
      </div>
      <div className="App">
        <Canvas image={image} processImage={processImage4} />
      </div>
      <div className="Indent">
        Отражение по вертикали:
      </div>
      <div className="App">
        <Canvas image={image} processImage={processImage5} />
      </div>
    </>
  );
}

export default App;
