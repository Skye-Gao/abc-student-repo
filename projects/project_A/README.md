# Project A: "In the Stream of Memory"

![alt text][demo]

[demo]: https://raw.githubusercontent.com/Skye-Gao/abc-student-repo/master/projects/project_A/images/demo.gif "Logo Title Text 2"

## Description
For project A, I aim to create a visual storytelling with parallax effet on website. The credit of images used in my project goes to Xiaoqing Wang, who is a photographer as well as an artist. This photo serires consists of nine photos of Wang and her son, taken once a year since her son's birth. The outstanding part of this work is that the photographer put the photo of last year in the new photo, and thus made the effect of "frame in a frame". I was really impressed by her way of documenting memory. Taking it as an inspiration, I made my own experiment based on her work: breaking the photo series up and remixing them. For me, such expression is aligned to the experience of memorizing and forgeting, and I would love to see how such experience can be further interpretated through the media of website.

[Link to project A](https://skye-gao.github.io/abc-student-repo/projects/project_A/index.html)

## Challenges

I met some significant challenges during the development of my project:

1) As I was using parallax scrolling to control various elements, it is challenging to structure my code in a way that each images will transform to certain points based on the scroll distance. Professor helped me a lot to organize the code, and introduced me an elegant way to organize all the variables using arrays:


`let planning = [
  {
    // source1
    slides: [
    variable1,
    variable2,
    variable3,
    ...
    ]
  },
  {
    // source2
    slides: [
    variable1,
    variable2,
    variable3,
    ...
    ]
  },
  ]
`
Based on that, the positions of images is mapped to scroll position using percentage.

2) After organizng the code, I added in the content images. However, even though I set all the images and divs with the same attibutes, the images appears not to be well aligned with each other. Some of them have some displacment. I am still trying to figure it out so that the matching effect can work fine.  

## Reference
[Image reference](https://3g.163.com/dy/article/ED2D76SS053779GK.html)

[Parallax Effect Tutorial](http://javascriptkit.com/dhtmltutors/parallaxscrolling/index.shtml)
