var senorita = "";
var shape_of_you = "";

function preload() {
    senorita = loadSound("Senorita.mp3");
    shape_of_you = loadSound("Shape_of_You.mp3");
}

function setup() {
    var canvas = createCanvas(600, 500);
    canvas.center();
    var video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}