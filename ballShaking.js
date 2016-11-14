<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<canvas id="canvas" width="500" height="500" style="background:#000009;">
    your browser not support canvas!
</canvas>
<script src="tool.js"></script>
<script src="ball.js"></script>
<script>
    window.onload = function () {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var ball = new Ball();
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        var angle = 0,
                range = 50,
                speed = 0.1;
        (function drawFrame() {
                    window.requestAnimationFrame(drawFrame);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    ball.x = canvas.width / 2 + Math.sin(angle) * range;
                    angle += speed;
                    ball.draw(context);
                })
        ()
    }
</script>
</body>
</html>
