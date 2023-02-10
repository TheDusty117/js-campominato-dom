console.log('CAMPO MINATO')

// VARIABILI LATOGRIGLIA ,MOLTIPLICATORE PER CREARE CELLE E ELEMENTO DOM GRIGLIA---------------------------
let latoGriglia = 10
let numeroCelle = latoGriglia * latoGriglia
console.log(latoGriglia, numeroCelle)

const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
console.log(grigliaElement)
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
      console.log(bombeArr)
      console.log(this.innerHTML)
    

      let valueNum = parseInt(this.innerHTML)
      console.log(valueNum)


      //CONFRONTARE valueNum CON array di BOMBE

  
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











