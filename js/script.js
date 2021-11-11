/*
  1. creo un array che contenga tutte le img
  2. utilizzo il scr per richiamare le immagini con un counter settato a [0] che rappresenta la prima foto dell'array
  3. aggiungo ai pulsati il click 
  4. questo click richiamerà una funzione 
  5. nella funzione dedicata al pulsante next incrementerò il contantore in modo tale da cambiare l'indice dell'array
  6. stessa cosa per il pulsante prev unica differenza che il counter deve decrescere
*/




const app = new Vue({

el: '#app',

data: {
  //costruisco dentro il data l'array con tutte le immagini
  images: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'
  ],
  //setto il mio contatore
  counter: 0,
  //creo un array con le città
  citta: ['Zurigo', 'Lichtstein', 'Londra', 'Mosca', 'Bali']

},

methods: {


  //creo la funziona attraverso la quale incrementerò il contatore al click di next
  nextImage(){
    //incremento il contatore
    this.counter++;
    //condizione oltre la quale il counter deve ricominciare da capo
    if(this.counter > this.images.length - 1){
      this.counter = 0;
    }
  },
  //stessa cosa farò per il pulsante prev
  
  prevImage(){
    //decremento il contatore
    this.counter--;
    //conzione
    if(this.counter < 0){
      this.counter = this.images.length - 1;
    }
  }
}

});