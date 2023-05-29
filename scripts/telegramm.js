funcModal=()=>{
    const modal =document.querySelector('.modal')
    const backdrop =document.querySelector('.backdrop')
    const content=document.querySelector('.modalContent')
    const modalCloseButton = document.querySelector('.modalCloseButton')
    content.innerHTML=''
    modal.classList.add('modalActive')
    backdrop.classList.add('backdropActive')
    const text =document.createElement('h3')
    text.textContent='Мы рассмотрим вашу заявку'
    content.append(text)
    
}


    
    const form=document.querySelector('#fr__form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        let company=document.querySelector('#inputCompany')
        let num=document.querySelector('#inputNum')
        let email=document.querySelector('#inputEmail')

        let bot = {
            TOKEN: '5720716158:AAFNgfjA2vL60UPjNrHsCAtk1JIkCOKvAZk',
            chatId: '-977379026'
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (company.value || num.value || email.value) {
              const telegrammessage = `${company.value} ${num.value} ${email.value}`
              const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegrammessage}`;
              fetch(TELEGRAM_API)
                .then((response) => {
                  if (response.ok) {
    
                    clearinputs();
                  }
                })
                .catch((error) => {
                  clearinputs();
                });
            } else {
              clearinputs();
            }
          });
            
       
        
    })


    function clearinputs() {
        company.value = "";
        num.value = "";
        email.value = "";
      }
