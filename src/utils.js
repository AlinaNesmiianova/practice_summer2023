export const inversionFilter = (imageData) =>{
    let pixels = imageData.data
    for(var i = 0; i < pixels.length; i+=4){
        pixels[i] = 255 - pixels[i]
        pixels[i+1] = 255 - pixels[i+1]
        pixels[i+2] = 255 - pixels[i+2]
    }
    return imageData
}

export const brightness=(ImageData, value)=>{
    const pixels=ImageData.data;
    for(let i=0; i<pixels.length; i+=4){
        pixels[i]+=value;
        pixels[i+1]+=value;
        pixels[i+2]+=value;
    }
    return ImageData;
}

export const flipHorizontal = (imageData) => {
    for (let row = 0; row < imageData.height; row++) {
        for (let col = 0; col < imageData.width / 2; col++) {
            const index = (row * imageData.width + col) * 4
            const flippedCol = imageData.width - col - 1
            const flippedIndex = (row * imageData.width + flippedCol) * 4
            for (let i = 0; i < 4; i++) {
                const temp = imageData.data[index + i]
                imageData.data[index + i] = imageData.data[flippedIndex + i]
                imageData.data[flippedIndex + i] = temp
            }
        }
    }
    return imageData
}

export const flipVertical = (imageData) => {
    for (let row = 0; row < imageData.height / 2; row++) {
        const flippedRow = imageData.height - row - 1
        for (let col = 0; col < imageData.width; col++) {
            const index = (row * imageData.width + col) * 4
            const flippedIndex = (flippedRow * imageData.width + col) * 4
            for (let i = 0; i < 4; i++) {
                const temp = imageData.data[index + i]
                imageData.data[index + i] = imageData.data[flippedIndex + i]
                imageData.data[flippedIndex + i] = temp
            }
        }
    }
    return imageData
}
