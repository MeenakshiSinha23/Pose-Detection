# Pose Detection with PoseNet (ml5.js + p5.js)

This project uses PoseNet via the ml5.js library to detect human poses in real-time from a webcam feed and overlays visual effects (actor image and smoke) at specific keypoints like the nose. It is built using p5.js for rendering and animation.

Live Demo

You can view the live demo at: https://MeenakshiSinha23.github.io/Pose-Detection/
Make sure to allow webcam access in your browser.

Technologies Used

ml5.js for pose detection using PoseNet

p5.js for drawing on canvas and rendering

HTML, CSS, and JavaScript for building the web interface

Features

Detects human pose in real-time using webcam feed

Tracks the position of the nose

Overlays actor and smoke images dynamically on the nose keypoint

Interactive and responsive experience

Project Structure

The project contains the following files:

index.html

sketch.js

style.css

images folder containing actor.png and smoke.png

How to Run Locally

Clone or download the repository.

Open the index.html file in a browser.

Allow access to the webcam when prompted.
Note: For proper webcam access, it's recommended to run the project on a local server.

How It Works

The webcam feed is passed to the PoseNet model using ml5.js. PoseNet detects the human pose and provides keypoints such as the nose. p5.js is used to render the canvas and draw the actor and smoke images on top of the nose keypoint in real-time.
