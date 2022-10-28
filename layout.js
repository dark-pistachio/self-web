window.onload = function(){ 
    var topbar = document.getElementsByClassName('topbar')[0];
        document.onwheel= function(event){
            topbar.style.opacity = '75%';
            
            if(document.documentElement.scrollTop == 0){
                topbar.style.opacity = "100%";
                } 
        };
    
    var opArr = document.getElementsByClassName('op');
    var ghead = document.getElementsByClassName('galleryhead');
    var i;
    var head;
    for(i=0; i<opArr.length; i++){
        opArr[i].onmouseover = function(event){
            this.style.opacity = '30%';
            head = this.previousElementSibling;
            head.style.display = 'inline-block';  
        };
    }
     

    
};
//function move(obj, attr, target, speed, callback){
//        //在开启新的定时器之前就把上一个定时器关闭
//            clearInterval(obj.timer);
//            //获取元素目前的位置
//            var current = parseInt(getStyle(obj, attr));
//            //判断速度的正负值
//            if(current > target){
//                speed = -speed;
//            }
//            //开启定时器执行动画效果
//            //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识，这样就不会当两个元素同时调用这个函数时，必须要停止其中一个才能运行另外一个
//            obj.timer = setInterval(function(){
//                //获取box原来的left值(注意这里面用的getStyle是下面用来读取元素的函数，parseInt是因为函数回调出来有单位px，所以用parseint将字符串里有效数字读取出来)
//                var oldValue = parseInt(getStyle(obj, attr));
//                //在old value上自增
//                var newValue = oldValue + speed;
//                
//                if((speed<0 && newValue<target) || (speed>0 && newValue>target)){
//                    newValue = target;}
//                //将new value赋值给box
//                obj.style[attr] = newValue + 'px';
//                //当元素移动到800px时停止运动
//                if(newValue == target){
//                    //达到目标，关闭定时器，但是如果说你的newvalue里面加的不是整数不能正好等于800，则需要在newvalue处有一个判断
//                    clearInterval(obj.timer);
//                    //动画执行完毕，调用回调函数(下面的式子是为了判断有没有传回调函数，有就执行没有就不执行，这样不至于没有传就报错)
//                    callback && callback();
//                }
//            }, 30);
//        }