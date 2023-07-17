export const makeWB = (imageData) => {
    let pixels = imageData.data;
    for(var i = 0; i < pixels.length; i+=4){
        var r=pixels[i];
        var g=pixels[i+1];
        var b=pixels[i+2];
        var brightness=(r+g+b)/3;
        pixels[i]=brightness;
        pixels[i+1]=brightness;
        pixels[i+2]=brightness;
    }
    return imageData;
}
