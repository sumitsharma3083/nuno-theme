
var class_minute    = document.querySelector('.class-minute')
var webdev_number   = document.querySelector('.webdev-number')
var support_number  = document.querySelector('.support-number')
var resource_number = document.querySelector('.resource-number')
var body            = document.querySelector('body')
var showcase_area   = document.querySelector('.showcase_area')

class_minute.innerHTML    = 0;
webdev_number.innerHTML   = 0;
support_number.innerHTML  = 0;
resource_number.innerHTML = 0;

var terminate1 = setInterval(() => {
      class_minute.innerHTML = Number(class_minute.innerHTML) + 1 

      if(Number(class_minute.innerHTML) == 75){
          clearInterval(terminate1)

             var terminate2 = setInterval(() => {
             webdev_number.innerHTML = Number(webdev_number.innerHTML) + 1      
            if(Number(webdev_number.innerHTML) == 45)
              {
                 clearInterval(terminate2)
                 var terminate3 = setInterval(() => {
                    support_number.innerHTML = Number(support_number.innerHTML) + 1
                        
                    if(Number(support_number.innerHTML) ==86)
                      {
                      clearInterval(terminate3)
                      var terminate4 = setInterval(() => {
                        resource_number.innerHTML = Number(resource_number.innerHTML) + 1
                            
                        if(Number( resource_number.innerHTML) == 24)
                          {
                          clearInterval(terminate4)
                          }
                    }, 60);
                    
                      }
                }, 60);
                
              }
           }, 60);
        
      }
}, 60);








window.addEventListener('scroll', function(){
      if(Number(window.scrollY) > (showcase_area.clientHeight / 2)){
          console.log("Hello world")
      }
})

