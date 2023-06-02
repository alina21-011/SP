
 
    const TOKEN='5924992534:AAEeiwtGX31l6F6oEAzRQICK8Fe5Pj6-k3M';
    const CHAT_ID='-1001835400744';
    const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const form_test = document.querySelector(".formsection__form")
    document.getElementById('telegram').addEventListener('submit', function(e){
      e.preventDefault();
      let message = `<b>По общим вопросам</b>\n`;
      message += `<b>Отправитель:</b> ${this.name.value}\n`;
      message += `<b>Телефон:</b> ${this.phone.value}`;


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
