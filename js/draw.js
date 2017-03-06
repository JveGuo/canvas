var draw = {
	"drawArc":function(obj,x,y,r,start,end,oStyle,color,bool){
				var bool = bool||false;
				obj.beginPath();
				obj.arc(x,y,r,start,end,bool);
				if(oStyle=="fill"){
					obj.fillStyle = color;
					obj.fill();
				}else if(oStyle=="stroke"){
					obj.strokeStyle = color;
					obj.stroke();
				}
				obj.closePath();
			},
	"drawSector":function(obj,x,y,r,start,end,oStyle,color,bool){
				var bool = bool||false;
				obj.beginPath();
				obj.arc(x,y,r,start,end,bool);
				obj.lineTo(x,y);
				if(oStyle=="fill"){
					obj.fillStyle = color;
					obj.fill();
				}else if(oStyle=="stroke"){
					obj.strokeStyle = color;
					obj.stroke();
				}
				obj.closePath();
			},
	"drawStar":function(obj,arcX,arcY,arcR,oStyle,color){
					obj.beginPath();
					obj.moveTo(point(arcX,arcY,arcR,-Math.PI/2).ox,point(arcX,arcY,arcR,-Math.PI/2).oy);
					for(var i=0;i<11;i+=2){
						obj.lineTo(point(arcX,arcY,arcR,(72/360)*2*Math.PI*i-Math.PI/2).ox,point(arcX,arcY,arcR,(72/360)*2*Math.PI*i-Math.PI/2).oy);
					}
					obj.closePath();
					if(oStyle=="fill"){
						obj.fillStyle = color;
						obj.fill();
					}else if(oStyle=="stroke"){
						obj.strokeStyle = color;
						obj.stroke();
					}
					function point(x,y,r,radian){
						var ox = x + r*Math.cos(radian);
						var oy = y + r*Math.sin(radian);
						return {
							"ox":ox,
							"oy":oy
						}
					}
				}
}


