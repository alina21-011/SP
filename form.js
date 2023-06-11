
const btnSubmit = document.querySelector('.table__order_mk')
const popupSubmit = document.querySelector('#popup_submit');

btnSubmit.addEventListener('click',  function() {
  popupSubmit.classList.add("popup_opened"); }
  )


 
    const TOKEN='5924992534:AAEeiwtGX31l6F6oEAzRQICK8Fe5Pj6-k3M';
    const CHAT_ID='-1001835400744';
    const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const form_test = document.querySelector(".formsection__form")
    document.getElementById('telegram').addEventListener('submit', function(e){
      e.preventDefault();
      
      let message = `<b>Заявка</b>\n`;
      message += `<b>Отправитель:</b> ${this.name.value}\n`;
      message += `<b>Телефон:</b> ${this.phone.value}\n`;
      message += `<b>URL</b> ${this.url.value}`;



      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
      .then((res)=> {
        this.name.value = '';
        this.phone.value = '';
      })
      .catch((res) => {

      })
     
    })


const url = window.location.href;

const el = document.querySelector(".hidenform");

el.setAttribute("value", url);


