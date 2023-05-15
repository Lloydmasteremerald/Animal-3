function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Sdouo3u9l/model.json", modelready);
}

function modelready() {
    classifier.classify(gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        Lloyd = Math.floor(Math.random() * 255) + 1;
        Cole = Math.floor(Math.random() * 255) + 1;
        Kai = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can Hear: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + Lloyd + "," + Cole + "," + Kai + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + Lloyd + "," + Cole + "," + Kai + ")";

     Listen = document.getElementById("Listen");

        if (results[0].label == "Dog") {
            Listen.src = "giphy.gif";
        }
        else if (results[0].label == "Dolphin") {
            Listen.src = "Dol.gif";
        }

        else if (results[0].label == "Lion") {
            Listen.src = "Lion.gif";
        }

        else {
            Listen.src = "love-fast.gif";
        }

    }
}




