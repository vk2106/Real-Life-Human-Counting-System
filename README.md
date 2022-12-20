# Real-Life-Human-Counting-System
Before starting the project,make sure you have certain libraries installed by typing these commands in the terminal : 

### `pip install opencv-python`

### `pip install random2`

### `pip install persons`

### `pip install times`

### `pip install numpy`

### `pip install imutils`

### `pip install argparse`

#

After installing all the libraries,execute :
### `webgo1.py`
#
You should get the output as :

<img width="1440" alt="img1" src="https://user-images.githubusercontent.com/85490506/208642756-ae5cf233-4947-4c14-9c8e-d0d6a73a4ff4.png">
With this,You are able to detect the moving objects and count the number of objects and classify the count as going up or down.
For processing on image I have used OpenCV functionalities such as VideoWriter(), VdeoWriter_fourcc(), and designed the window size and frame rate for encoding the video input.


<img width="1440" alt="img2" src="https://user-images.githubusercontent.com/85490506/208643039-1eb8e4cc-4843-40f2-95df-a22634cf9847.png">
Add on to this provision, for smooth ongoing of the program and for better efficiency I have added a method to eliminate shadows using Binarization technique to get more precise output. I have done the same using OpenCV function named createBackgroundSubtractorMOG2().



<img width="1440" alt="img3" src="https://user-images.githubusercontent.com/85490506/208643149-ed7e7fc7-04c0-45bf-8d9a-a23cd5c66c4e.png">


#

This software program has applications in security, analysis and surveillance, etc.

