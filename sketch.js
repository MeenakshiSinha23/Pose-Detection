let capture;
let posenet;
let singlePose, skeleton;
let actor_img, smoke;

function setup() {
  createCanvas(800, 500);
  capture = createCapture(VIDEO);
  capture.size(800, 500);
  capture.hide();

  posenet = ml5.poseNet(capture, modelLoaded);
  posenet.on('pose', receivedPoses);

  actor_img = loadImage('images/jin1.png');
  smoke = loadImage('images/jin.png');
}

function receivedPoses(poses) {
  if (poses.length > 0) {
    singlePose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('PoseNet ready');
}

function draw() {
  background(0);
  image(capture, 0, 0, 800, 500);

  if (singlePose) {
    fill(255, 0, 0);
    for (let i = 0; i < singlePose.keypoints.length; i++) {
      ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 8);
    }

    stroke(255);
    strokeWeight(2);
    for (let j = 0; j < skeleton.length; j++) {
      line(
        skeleton[j][0].position.x, skeleton[j][0].position.y,
        skeleton[j][1].position.x, skeleton[j][1].position.y
      );
    }

    // Overlay actor image and smoke
    image(actor_img, singlePose.nose.x - 25, singlePose.nose.y - 50, 50, 50);
    image(smoke, singlePose.nose.x - 10, singlePose.nose.y + 20, 30, 30);
  }
}
