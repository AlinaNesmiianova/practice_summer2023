export const brightness=(ImageData, value)=>{
    const pixels=ImageData.data;
    for(let i=0; i<pixels.length; i+=4){
        pixels[i]+=value;
        pixels[i+1]+=value;
        pixels[i+2]+=value;
    }
    return ImageData;
}