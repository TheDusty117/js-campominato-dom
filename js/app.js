console.log('CAMPO MINATO')

// VARIABILI LATOGRIGLIA ,MOLTIPLICATORE PER CREARE CELLE E ELEMENTO DOM GRIGLIA---------------------------
let latoGriglia = 10
let numeroCelle = latoGriglia * latoGriglia
console.log(latoGriglia, numeroCelle)

const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
console.log(grigliaElement)


//VARIABILI PUNTEGGIO GIOCATORE
//TASK creare contatore punti, che ad ogni click sulla casella senza bomba, aggiunga 100 punti al CONTATORE nell' html

//richiamare il contatore dall'html
let contatorePunti = document.getElementById('score').innerHTML = 0

contatorePunti = 0

console.log(contatorePunti)

let puntiPerClick = 100



// FINE VARIABILI---------------------------------------------------------------------------


document.querySelector('.play-button').addEventListener('click',function(){ // AL CLICK DI PLAY BUTTON, SI GENERA GRIGLIA, CASELLE E TUTTO IL RESTO
  





  
  //  RESETTA IL GIOCO AL CLICK DEL PLAY--------------------------------------
  grigliaElement.innerHTML = ('') // COMANDO CHE RESETTA IL GIOCO 
  //  RESETTA IL GIOCO AL CLICK DEL PLAY--------------------------------------

  // const casellaArr = [] //ARRAY VALORE DELLA CASELLA CHE DEVE ESSERE CONFRONTATO CON ARRAY BOMBE GIU SOTTO A TUTTO scommenta
  // console.log(casellaArr)

 
  // CICLO CHE GENERA LE 100 CASELLE ------------------------------------------------------
  for (let i = 0; i < numeroCelle; i++) {
    let num = i + 1 
    // console.log(i + 1)
    const cellaElement = document.createElement('div')
    cellaElement.className = 'cella'
    
    console.log(cellaElement)
    cellaElement.style.width = `calc(100% / ${latoGriglia})`
    cellaElement.innerHTML = num
    
    grigliaElement.append(cellaElement)
    
    cellaElement.addEventListener('click', function(event) { 
      cellaElement.style.backgroundColor = 'cornflowerblue'
      // console.log(bombeArr)
      console.log(this.innerHTML) // con this vedo che prendo il numero nel'HTML e visualizzo in console
    

      let valueNum = parseInt(this.innerHTML) //dichiaro var, che converte il valore this.innerHTML
      console.log(valueNum)
      console.log(bombeArr[1])


      //CONFRONTARE valueNum CON tutti gli indici in array di BOMBE
      if (bombeArr.includes(valueNum)){
        cellaElement.style.backgroundColor = 'red'
        cellaElement.style.backgroundImage = "url('img/BOMB.webp')"
        // alert('hai preso una bomba!')
      } else {
        console.log('salvo!')
        cellaElement.style.backgroundImage = "url('img/salvo.jpg')"
        contatorePunti += puntiPerClick
        // console.log(contatorePunti)
        document.getElementById('score').innerHTML = contatorePunti
      }
      
  
    })
  }
  // FINE CICLO CHE GENERA LE 100 CASELLE --------------------------------------------------------
  const bombeArr = [] //ARRAY BOMBE RANDOM X 16
  
  
  //FACCIO UN CICLO CHE CREA 16 NUMERI CASUALI(da 1 a 100), ed ognuno di loro verra' PUSHATO DENTRO bombeArr che si trova qui su----------------
  for (let i = 0; i < 16; i++) {
    const numRandom = Math.floor(Math.random(1)*100+1)
    // console.log(numRandom)
    bombeArr.push(numRandom)  //ogni numero random(da 0 a 100) viene pushato nell'array bombe sopra per 16 volte
  }
  console.log(bombeArr)
  
  
})





