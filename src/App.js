import "./App.css"
import React, { useState } from 'react';

const App = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{
            opacity: 10,
            width: '250px',
            height: '30px',
            cursor: 'pointer',
            background: 'white',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {image && <img src={image} alt="Uploaded Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
      </div>
    </div>
  );
};

export default App;
