// Author:			Dytlief Moller
// Project:			HTML5 only
// Description:		Thank you for purchasing! Use or modify these 10 styles to your liking.

// Reused functions
function Deg2Rad(_deg) 
{ 
	return _deg * (Math.PI / 180.0); 
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- custom 02
function HTML5_loadscreen02(_graphics, _width, _height, _total, _current, _loadingscreen)
{
// Load bar
    var barwidth = (_width * 0.7);
    var barheight = 35;
    var x = (_width - barwidth) / 2;
    var y = (_height/2) + 50;
    var w = (barwidth / _total) * _current;
    var border = 1;
    var border_color = "rgb(128,128,128)";
    var bar_bg = "rgb(20,20,20)";
    var progress_bg = "rgb(255,159,28)";
// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 1280;
    var imgwidth = 720;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

    if (_current != 0)
    {
        _graphics.fillStyle = border_color;
        _graphics.fillRect(x-border, y-border, barwidth+(border*2), barheight+(border*2) );
        _graphics.fillStyle = bar_bg;
        _graphics.fillRect(x, y, barwidth, barheight);
        _graphics.fillStyle = progress_bg;
        _graphics.fillRect(x, y, w, barheight);
	}
	_graphics.fillStyle = "rgb(0,0,0)";
	_graphics.font = "40px Arial";
	_graphics.textAlign = "center";
	_graphics.fillText("L O A D I N G", (_width*0.5), (_height*0.5) );
	_graphics.canvas.style.left = (window.innerWidth/2)-(_width/2) + "px";
	_graphics.canvas.style.top = (window.innerHeight/2)-(_height/2) + "px";
}