var song1 = "";
var song2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function preload(){
    song1 = loadSound("Harry Potter.mp3");
    song2 = loadSound("Dream Song.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded('PoseNet is Now ready to run!'));
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video , 0 , 0 , 600 , 500);
}

function playSong(){
    
}

function modelLoaded(text){
    console.log(text);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log('rightWrist X and Y = ' + rightWristX + ',' + rightWristY);
        console.log('leftWrist X and Y = ' + leftWristX + ',' + leftWristY);
    }
}