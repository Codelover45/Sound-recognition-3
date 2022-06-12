function soundstart()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tTEPViTCb/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
       random_number_r = Math.floor(Math.random() * 255) + 1;
       random_number_g = Math.floor(Math.random() * 255) + 1;
       random_number_b = Math.floor(Math.random() * 255) + 1;
 
       document.getElementById("result").innerHTML =  'I can hear - '+results[0].label;
       document.getElementById("result-confidence").innerHTML =  'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
 document.getElementById("result").style.color = "rgb("
 +random_number_r+","+random_number_g+","+random_number_b+")";
 document.getElementById("result-confidence").style.color = "rgb("
 +random_number_r+","+random_number_g+","+random_number_b+")";
 
 img = document.getElementById('mainpicture');

 if (results[0].label == "meowing") {
    img.src = "meowing.gif";
   
} else if (results[0].label == "Mooing") {
    img.src = "";
  
 }else if (results[0].label == "Roar") {
    img.src = "roaring.gif";

 }else if (results[0].label == "Background Noise") {
    img.src = "background music.gif";

 }else if (results[0].label == "Barking") {
    img.src = "barking.gif";

 }

   } }
