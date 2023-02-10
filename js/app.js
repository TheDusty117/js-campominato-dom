console.log('CAMPO MINATO')



document.querySelector('.play-button').addEventListener('click',function(){ // AL CLICK DI PLAY BUTTON, SI GENERA GRIGLIA, CASELLE E TUTTO IL RESTO
  

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



//CREARE UN ARRAY DI 16 NUMERI CHE SONO SEMPRE CASUALI (DA 1 A 100) quindi (array= [1,30,22,8,6,13,50,99,35,23.....])

