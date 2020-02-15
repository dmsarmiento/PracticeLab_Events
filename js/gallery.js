function upDate(previewPic)
{
    var picSource = previewPic.src;
    var altText = previewPic.alt;

    document.getElementById('image').style.backgroundImage = 'url(' + picSource + ')';
    document.getElementById('image').innerHTML = altText;
    
}
   
function unDo()
{
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}