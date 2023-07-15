import image from "./image.png";
import Canvas from "./Canvas";

function App() {
  const processImage = (imageData) => {
    return imageData
  }
  return (
    <>
      <div className='App'>
        <Canvas image={image} processImage={processImage} />
      </div>
    </>
  )
}

export default App;
