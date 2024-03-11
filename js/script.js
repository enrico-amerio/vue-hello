const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: 'Ciao Vue!',
      img: 'https://cdn.iconscout.com/icon/free/png-256/free-vuejs-1175052.png'
    }
  }
}).mount('#app');