/**
 * Created by asusa on 2017/3/4.
 */
window.onload=function(){
    var block=document.getElementById("block");
    block.style.top="200px";
    block.style.left="200px";
    block.style.transform="rotate(0deg)";
    var input=document.getElementById("input");
    var order=document.getElementById("order");
    order.onclick=function(){
        var value=input.value;
        switch(value.toUpperCase()){
            case "TUN LEF":
                turnLeft();break;
            case "TUN RIG":
                turnRight();break;
            case "TUN BAC":
                turnBack();break;
            case "GO":
                go();break;
            default:
                alert("请按要求输入");
        }
    }
    console.log(parseInt(block.style.top));
    console.log(parseInt(block.style.top)+40+"px");
}
function degree(data){
    var degree=0;
    if(data.length==13){
        degree=parseInt(data.slice(7,9));
    }else if(data.length==14){
        degree=parseInt(data.slice(7,10));
    }
    return degree;
}
function turnRight(){
    var rotate=0;
    if(degree(block.style.transform)==270){
        rotate=0;
    }else{
        rotate=parseInt(degree(block.style.transform))+90;
    }
    block.style.transform="rotate("+rotate+"deg)";
}
function turnLeft(){
    var rotate=0;
    if(degree(block.style.transform)==0){
        rotate=270;
    }else{
        rotate=parseInt(degree(block.style.transform))-90;
    }
    block.style.transform="rotate("+rotate+"deg)";
}
function turnBack(){
    var rotate=0;
    if(degree(block.style.transform)==270){
        rotate=90;
    }else if(degree(block.style.transform)==180){
        rotate=0;
    }else{
        rotate=parseInt(degree(block.style.transform))+180;
    }
    block.style.transform="rotate("+rotate+"deg)";
}
function go(){
    var top=parseInt(block.style.top);
    var left=parseInt(block.style.left);
    switch(degree(block.style.transform)){
        case 0:
            if(top>40){
                block.style.top=parseInt(top-40)+"px";
            }else{
                alert("不能再前进了！");
            }
            break;
        case 90:
            if(left<400){
                block.style.left=parseInt(left+40)+"px";
            }else{
                alert("不能再前进了！");
            }
            break;
        case 180:
            if(top<400){
                block.style.top=parseInt(top+40)+"px";
            }else{
                alert("不能再前进了！");
            }
            break;
        case 270:
            if(left>40){
                block.style.left=parseInt(left-40)+"px";
            }else{
                alert("不能再前进了！");
            }
            break;
        default:
            alert("出错了");
    }
}