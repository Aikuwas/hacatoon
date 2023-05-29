const categoriesGlobal=()=>{
    const data = {
        food: [
            {
                name: 'Чай от кролика',
                img: './chai.webp'
            },
            {
                name: 'Кусочек "съешь меня',
                img: './siesh.webp'
            },
            {
                name: 'Торт червонной королевы',
                img: './tort.webp'
            },
        ],
        stuff: [
            {
                name: 'Шляпа',
                img: './images/shlyapa.webp'
            },
            {
                name: 'Часы кролика',
                img: './images/chasy.webp'
            },
            {
                name: 'Платье Алисы',
                img: './images/platie.webp'
            },
    
        ],
        artifact: [
            {
                name: 'Кальян гусеницы',
                img: './images/dfghj.jpg'
            },
            {
                name: 'Говорящая роза',
                img: './images/rosa.webp'
            },
        ]
    }
    
    const food=data.food
    const stuff=data.stuff
    const artifact=data.artifact
    const all=[...food,...artifact,...stuff]
    
    const categories=(data)=>{
        const output=document.querySelector('.output')
        output.innerHTML=''
        data.forEach(el=>{
            const col=document.createElement('div')
            const box=document.createElement('div')
            const img=document.createElement('img')
            const name=document.createElement('p')
    
            col.className='col-3'
            box.className='categories__box'
    
            img.src=el.img
            name.textContent=el.name
    
            box.append(name,img)
            col.append(box)
            output.append(col)
        })
    }
    categories(all)
    
    const buttonClickRender=()=>{
        const btn=document.querySelectorAll('.btn')
        btn.forEach(el=>{
            el.addEventListener('click',()=>{
                if(el.classList.contains('food')){
                    categories(food);
                }else if(el.classList.contains('stuff')){
                    categories(stuff);
                }else if(el.classList.contains('artifact')){
                    categories(artifact);
                }else{
                    categories(all);
                }
            })
           
        })
    
    }
    buttonClickRender()
    
    const click =()=>{
        const btn=document.querySelectorAll('.btn')
        for(let i =0;i<btn.length;i++){
            btn[i].addEventListener('click',()=>{
                btn.forEach((el,index)=>{
                    if(i===index){
                        el.classList.add('active')
                    }else{
                        el.classList.remove('active')
                    }
                })
            })
        }
    }
    click()
    
    
    
    
    }
    categoriesGlobal()