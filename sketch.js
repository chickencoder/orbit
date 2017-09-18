var scale = 2;
var speed = 1;

var radius = scale * 10;

var satOneAngle = 0;
var satOneDist = (radius * 6);

var satTwoAngle = 0;
var satTwoDist = satOneDist * 2;

var satThreeAngle = 0;
var satThreeDist = satOneDist * (3/2);

var satFourAngle = 0;
var satFourDist = satOneDist * 3;

var satFiveAngle = 0;
var satFiveDist = satOneDist * (4);

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(40);
    smooth();
}

function draw() {

    background(5, 5, 10);
    translate(width/2, height/2);

    strokeWeight(2);

    // Draw planet
    noStroke();
    fill(255, 50, 50);
    ellipse(0, 0, radius + 10);

    // Sat One
    noFill();
    stroke(160);
    arc(0, 0, satOneDist, satOneDist, satOneAngle + radians(15), satOneAngle + radians(100));
    arc(0, 0, satOneDist, satOneDist, satOneAngle + radians(112), satOneAngle + radians(220));
    arc(0, 0, satOneDist, satOneDist, satOneAngle + radians(232), satOneAngle + radians(345));

    noStroke();
    fill(50, 255, 50);
    ellipse(cos(satOneAngle) * (satOneDist / 2), sin(satOneAngle) * (satOneDist / 2), radius);

     // Sat Two
    noFill();
    stroke(160);
    arc(0, 0, satTwoDist, satTwoDist, satTwoAngle + radians(15), satTwoAngle + radians(100));
    arc(0, 0, satTwoDist, satTwoDist, satTwoAngle + radians(112), satTwoAngle + radians(220));
    arc(0, 0, satTwoDist, satTwoDist, satTwoAngle + radians(232), satTwoAngle + radians(345));

    noStroke();
    fill(50, 50, 255);
    ellipse(cos(satTwoAngle) * (satTwoDist / 2), sin(satTwoAngle) * (satTwoDist / 2), radius*0.7);

    // Sat Three
    noFill();
    stroke(160);
    arc(0, 0, satThreeDist, satThreeDist, satThreeAngle + radians(15), satThreeAngle + radians(100));
    arc(0, 0, satThreeDist, satThreeDist, satThreeAngle + radians(112), satThreeAngle + radians(220));
    arc(0, 0, satThreeDist, satThreeDist, satThreeAngle + radians(232), satThreeAngle + radians(345));

    noStroke();
    fill(50, 255, 255);
    ellipse(cos(satThreeAngle) * (satThreeDist / 2), sin(satThreeAngle) * (satThreeDist / 2), radius);


    // Sat Four
    noFill();
    stroke(160);
    arc(0, 0, satFourDist, satFourDist, satFourAngle + radians(15), satFourAngle + radians(100));
    arc(0, 0, satFourDist, satFourDist, satFourAngle + radians(112), satFourAngle + radians(220));
    arc(0, 0, satFourDist, satFourDist, satFourAngle + radians(232), satFourAngle + radians(345));

    noStroke();
    fill(255, 255, 50);
    ellipse(cos(satFourAngle) * (satFourDist / 2), sin(satFourAngle) * (satFourDist / 2), radius);

    // Sat Five
    noFill();
    stroke(160);
    arc(0, 0, satFiveDist, satFiveDist, satFiveAngle + radians(15), satFiveAngle + radians(100));
    arc(0, 0, satFiveDist, satFiveDist, satFiveAngle + radians(112), satFiveAngle + radians(220));
    arc(0, 0, satFiveDist, satFiveDist, satFiveAngle + radians(232), satFiveAngle + radians(345));

    noStroke();
    fill(255, 50, 255);
    ellipse(cos(satFiveAngle) * (satFiveDist / 2), sin(satFiveAngle) * (satFiveDist / 2), radius*2);

    satOneAngle += speed * 0.04;
    satTwoAngle += speed * 0.02;
    satThreeAngle += speed * 0.015;
    satFourAngle += speed * 0.01;
    satFiveAngle += speed * 0.005;
}