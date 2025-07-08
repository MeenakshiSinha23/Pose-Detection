
# 🎯 Pose Detection with PoseNet (ml5.js + p5.js)

This project demonstrates real-time human pose detection using PoseNet via the [ml5.js](https://ml5js.org/) library. It leverages [p5.js](https://p5js.org/) to overlay dynamic visual effects—an actor image and smoke—on keypoints such as the nose, providing an interactive and creative augmented experience through your webcam.

---

## 🔗 Live Demo

👉 [Click here to try the live demo](https://MeenakshiSinha23.github.io/Pose-Detection/)
**Note:** Allow webcam access in your browser for the demo to function.

---

## 🛠️ Technologies Used

* **ml5.js** – For real-time pose estimation using PoseNet
* **p5.js** – For canvas rendering and visual overlays
* **HTML, CSS, JavaScript** – For structuring and styling the web interface

---

## ✨ Features

* 🎥 Real-time pose detection via webcam
* 👃 Tracks nose keypoint dynamically
* 🖼️ Overlays custom images (actor & smoke) on detected pose
* 🔁 Interactive, animated experience using PoseNet and p5.js

---

## 🚀 How to Run Locally

1. **Clone** or **download** this repository.
2. Open `index.html` directly in a browser.
3. Allow webcam access when prompted.

> ✅ **Tip:** For consistent webcam access and functionality, it's best to run the project using a local server (e.g., with VSCode Live Server or Python's HTTP server).

---

## 🧠 How It Works

1. The webcam stream is captured using p5.js.
2. ml5.js loads the PoseNet model and detects human keypoints in real-time.
3. The `nose` keypoint is extracted from the prediction results.
4. Images (`actor.png` and `smoke.png`) are drawn at the nose position on the canvas to create an augmented effect.




