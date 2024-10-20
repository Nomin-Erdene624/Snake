let canvas = document.querySelector('.canvas');
console.log(canvas);
let ctx = canvas.getContext('2d');
console.log(ctx);
let snake = [{x:10,y:5}];
let food = {x:5,y:3};
let dx=1,dy=0;
let Count=0;
function drawFood(){
    ctx.fillStyle="red";
    ctx.fillRect(food.x*20,food.y*20,20,20);
}
function drawSnake(snakeEl){
	snakeEl.forEach(segment=>{
		ctx.fillStyle="green";
		ctx.fillRect(segment.x*20,segment.y*20,20,20);
	});
}
function moveSnake(){
	let head={x:snake[0].x+dx,y:snake[0].y+dy}
	//.unshift()->massive utga nemne
	//.pop()->massive utga hasna
	snake.unshift(head);
	if(head.x==food.x&&head.y==food.y){
		food= {
			x:Math.floor(Math.random()*20),
			y:Math.floor(Math.random()*20)
		};
		Count++;
		document.querySelector('.Point').innerText="Point:"+Count;	
	}else{
		snake.pop();
	}
	
	if(head.x<0 || head.x==20 || head.y<0 || head.y==20){
		alert("Game Over");
		snake=[{x:5,y:5}];
	}
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawFood();
	drawSnake(snake);
}
setInterval(moveSnake,300);
// click->darah, keydown->ymar useg darah
// . ->object ruu . ashiglaj handana
document.addEventListener('keydown',(e)=>{
	console.log(e.key);
	if(e.key=="ArrowDown"){
		if(dy!==-1){
		dx=0;
		dy=1;
		}
	}else if(e.key=="ArrowUp"){
		dx=0;
		dy=-1;
	}else if(e.key=="ArrowLeft"){
		dx=-1;
		dy=0;
	}else if(e.key=="ArrowRight"){
		dx=1;
		dy=0;
	}
});