console.log('CAMPO MINATO')



document.querySelector('.play-button').addEventListener('click',function(){ //on click compare la griglia
  

  //APPENA GENERA GRIGLIA E INIZIA IL GIOCO,
  //1 GENERARE 16 NUMERI CASUALI (BOMBE)

  //2 INSERIRE QUESTI NUMERI A CASO IN UNA DELLE 100 CELLE

  //


  // VARIABILI LATOGRIGLIA ,MOLTIPLICATORE PER CREARE CELLE E ELEMENTO DOM GRIGLIA---------------------------
  let latoGriglia = 10
  let numeroCelle = latoGriglia * latoGriglia
  console.log(latoGriglia, numeroCelle)
  
  const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
  console.log(grigliaElement)
  // FINE VARIABILI---------------------------------------------------------------------------




  
  //  RESETTA IL GIOCO AL CLICK DEL PLAY--------------------------------------
  grigliaElement.innerHTML = ('') // COMANDO CHE RESETTA IL GIOCO 
  //  RESETTA IL GIOCO AL CLICK DEL PLAY--------------------------------------

  

  // CICLO CHE GENERA LE 100 CASELLE ------------------------------------------------------
  for (let i = 0; i < numeroCelle; i++) {
    let num = i + 1 
    console.log(i + 1)
    const cellaElement = document.createElement('div')
    cellaElement.className = 'cella'
    console.log(cellaElement)
    cellaElement.style.width = `calc(100% / ${latoGriglia})`
    cellaElement.innerHTML = num
    
    grigliaElement.append(cellaElement)
    
    cellaElement.addEventListener('click', function() { 
      console.log(`click ${num}`, typeof cellaElement)
      cellaElement.style.backgroundColor = 'cornflowerblue'
      
    })
  }
  // FINE CICLO CHE GENERA LE 100 CASELLE --------------------------------------------------------
 
  

})




// FUNZIONI PER FARE REFACTORING E RENDERE CODICE PIU' PARLANTE, e soprattutto includere,
//azione per azione tutto cio' che ho fatto, all'interno di una FUNCTION!

function startGame(){

}

function resetGame(){

}

function generateGrid(){

}

function onClick(){
  
}





//TASK     GIORNATA DI OGGI!!!!-------------------------

//1 GENERARE TOT BOMBE

//2 CREARE ARRAY DI BOMBE const bombe = [5,7,6,8,10]

//3 FAR SPAWNARE BOMBE CASUALMENTE DENTRO UNA DELLE 100 CASELLE
// bombe.include('5')
//non dobbiamo avere numeri duplicati