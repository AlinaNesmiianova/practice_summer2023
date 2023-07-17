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