function preload(){

}
    function setup()
    {
        canvas = createCanvas(640 , 480);
        canvas.position(110 , 250);
        video = createCapture(VIDEO);
        video.hide();
    }
    
    function draw()
    {
        image(video , 0 , 0 , 640, 480);
        circle(20, 10, 50)
        rect(20,10, 25, 50)
    }
    function take_snapshot()
    {
        save('student_name.png')
    }