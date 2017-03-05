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
    var traLef=document.getElementById("traLef");
    var traRig=document.getElementById("traRig");
    var traTop=document.getElementById("traTop");
    var traBot=document.getElementById("traBot");
    var movLef=document.getElementById("movLef");
    var movRig=document.getElementById("movRig");
    var movTop=document.getElementById("movTop");
    var movBot=document.getElementById("movBot");
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
    traLef.onclick=function(){
        var left=parseInt(block.style.left);
        if(left>40){
            block.style.transition="left 1s";
            block.style.left=parseInt(left-40)+"px";
        }else{
            alert("不能再前进了！");
        }
    }
    traRig.onclick=function(){
        var left=parseInt(block.style.left);
        if(left<400){
            block.style.left=parseInt(left+40)+"px";
            block.style.transition="left 1s";
        }else{
            alert("不能再前进了！");
        }
    }
    traTop.onclick=function(){
        var top=parseInt(block.style.top);
        if(top>40){
            block.style.top=parseInt(top-40)+"px";
            block.style.transition="top 1s";
        }else{
            alert("不能再前进了！");
        }
    }
    traBot.onclick=function(){
        var top=parseInt(block.style.top);
        if(top<400){
            block.style.top=parseInt(top+40)+"px";
            block.style.transition="top 1s";
        }else{
            alert("不能再前进了！");
        }
    }
    movLef.onclick=function(){
        var left=parseInt(block.style.left);
        if(left>40){
            block.style.left=parseInt(left-40)+"px";
            block.style.transform="rotate(270deg)";
            block.style.transition="left 1s,transform 1s";
        }else{
            alert("不能再前进了！");
        }
    }
    movRig.onclick=function(){
        var left=parseInt(block.style.left);
        if(left<400){
            block.style.left=parseInt(left+40)+"px";
            block.style.transform="rotate(90deg)";
            block.style.transition="left 1s,transform 1s";
        }else{
            alert("不能再前进了！");
        }
    }
    movTop.onclick=function(){
        var top=parseInt(block.style.top);
        if(top>40){
            block.style.top=parseInt(top-40)+"px";
            block.style.transform="rotate(0deg)";
            block.style.transition="top 1s,transform 1s";
        }else{
            alert("不能再前进了！");
        }
    }
    movBot.onclick=function(){
        var top=parseInt(block.style.top);
        if(top<400){
            block.style.top=parseInt(top+40)+"px";
            block.style.transform="rotate(180deg)";
            block.style.transition="top 1s,transform 1s";
        }else{
            alert("不能再前进了！");
        }
    }
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
