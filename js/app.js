console.log('CAMPO MINATO')



document.querySelector('.play-button').addEventListener('click',function(){ //on click compare la griglia
  
  //scommenta qui giu per selettore livello difficolta'---------
  // let askLevel = 0
  
  // while (askLevel < 10 || askLevel > 20 || isNaN(askLevel)) {
  //   askLevel = parseInt(prompt('inserisci difficoltà da 10 a 20'))
  // }

  //variabili dei bottoni?
  // scommenta qua su-------
  let latoGriglia = 10
  let numeroCelle = latoGriglia * latoGriglia
  
  console.log(latoGriglia, numeroCelle)
  
  const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
  console.log(grigliaElement)

  grigliaElement.innerHTML = ('') // COMANDO CHE RESETTA IL GIOCO 
  
  //generare dentro il DIV con classe 'griglia' 100 celle con il loro stile
  
  for (let i = 0; i < numeroCelle; i++) {
    let num = i + 1 // numero che associa progressivamente ad ogni giro di for per 100 volte
    console.log(i + 1)
    const cellaElement = document.createElement('div'); //creo un tag div ad ogni ITERAZIONE(100 iteraz.)
    cellaElement.className = 'cella' // al tag div creto, ci associo la classe 'cella' che ha il suo stile in CSS
    console.log(cellaElement)//console per controllare se sono stati creati
    cellaElement.style.width = `calc(100% / ${latoGriglia})`
    cellaElement.innerHTML = num
    
    grigliaElement.append(cellaElement)
    
    cellaElement.addEventListener('click', function() { // A OGNI GIRO, SICCOME SIAMO DENTRO IL FOR, verra' creato un EVENTLISTENER CLICK ad ogni iterazione insieme ai numeri e ai vari div con la rispettiva classe
      console.log(`click ${num}`)     //con il backtick uso template literal, per scrivere stringhe, con il dollaro e graffe gli dico che non e' piu una stringa ma una VARIABILE
      cellaElement.style.backgroundColor = 'cornflowerblue'
      
    })
  }
  
  
})



function onClick(){}

function startGame(){}

function resetGame(){}

function generateGrid(){}



//GENERARE TOT BOMBE

//CREARE ARRAY DI BOMBE const bombe = [5,7,6,8,10]

// bombe.include('5')

//non dobbiamo avere numeri duplicati

//L'ARRAY CON LE BOMBE VA CONFRONTATO CON LA CASELLA CLICCATA, 
//comunque creare confronto da array e casella