window.onload = function(){ 
    var topbar = document.getElementsByClassName('topbar')[0];
        document.onwheel= function(event){
            topbar.style.opacity = '75%';
            
            if(document.documentElement.scrollTop == 0){
                topbar.style.opacity = "100%";
                } 
        };
    
    var opArr = document.getElementsByClassName('box');
    var i;
    var head;

    for(i=0; i<opArr.length; i++){
        opArr[i].onmouseover = function(event){
            // opArr1[i].style.opacity = '30%';
            this.querySelector('.op').style.opacity = '30%';
            head = this.querySelector('.galleryhead');
            head.style.display = 'inline-block';  
        };
        opArr[i].onmouseout = function(event){
            // opArr1[i].style.opacity = '100%';
            this.querySelector('.op').style.opacity = '100%';
            head = this.querySelector('.galleryhead');
            head.style.display = 'none';  
        };
    }
    // var opArr = document.getElementsByClassName('op');
    // var ghead = document.getElementsByClassName('galleryhead');
    // var i;
    // var head;
    // for(i=0; i<opArr.length; i++){
    //     opArr[i].onmouseenter = function(event){
    //         this.style.opacity = '30%';
    //         head = this.previousElementSibling;
    //         head.style.display = 'inline-block';  
    //     };
    //     opArr[i].onmouseout = function(event){
    //         this.style.opacity = '100%';
    //         head = this.previousElementSibling;
    //         head.style.display = 'none';  
    //     };
    // }
//    ------------

        // const imgs = document.querySelectorAll('img');
        // const fullPage = document.querySelector('#fullpage');

        // imgs.forEach(img => {
        // img.addEventListener('click', function() {
        //     fullPage.style.backgroundImage = 'url(' + img.src + ')';
        //     fullPage.style.display = 'block';
        // });
        // });
    
};