var canvas = document.getElementById("myCanvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();


    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 0, 50, 50);

    ctx.beginPath();
    ctx.arc(150, 120, 20, 0, 2 * Math.PI);
    ctx.stroke();

  }
 