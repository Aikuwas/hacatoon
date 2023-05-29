const accordion = () =>{
    const accordion = document.querySelectorAll('.accordion__wrap')
    const content=document.querySelectorAll('.accordion__content')
   
    for(let i=0; i<accordion.length;i++){
      
            accordion[i].addEventListener('click',()=>{
                accordion.forEach((el,index)=>{
                    if(i===index){
                        el.classList.toggle('accordion__active')
                    }else{
                        el.classList.remove('accordion__active')
                    }
                })
             }) 
        
        content.forEach(el=>{
            el.addEventListener('click',(e)=>{
                e.stopPropagation()
            })
        })
        }
    }
accordion()