// Text And Button Get

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let text = document.getElementById('text');

// Variables

let hours = 0 ;
let minutes = 0 ;
let seconds = 0 ;
let miliseconds = 0 ;
let timer;

// Start Button Function


start.addEventListener('click' , function(){

     timer = setInterval(() => {
        
        miliseconds++

        if( miliseconds === 100 ){

            miliseconds = 0

            seconds++

            if(seconds < 10){

                seconds = "0" + seconds ;
            }
            
        }else if( seconds === 60){

            seconds = 0

            minutes++

            if(minutes < 10){

                minutes = "0" + minutes ;

            }

        }else if( minutes === 60){

            minutes = 0

            hours++

            if(hours < 10){

                hours = "0" + hours ;

            }

            }
           
        {

        }

        text.innerText = hours +' : '+ minutes +' : '+ seconds

    }, 10);


    
});

//Pause Button Function

pause.addEventListener('click' , function(){

    clearInterval(timer);
});


// Reset Button Function  

reset.addEventListener('click' , function(){


    location.reload()

});