function fetchData(){

    let knapp1 = document.getElementById('knapp1')
    let bild1 = document.getElementById('bild1');
    
    knapp1.addEventListener('click', function(){
        fetch('https://dog.ceo/api/breed/hound/images')
        .then(response => response.json())
        .then(result => {
         bild1.src = result.message[0] 
         bild2.src = result.message[1] 
         bild3.src = result.message[2] 
         bild4.src = result.message[3] 
         bild5.src = result.message[4] 
         bild6.src = result.message[5] 
         bild7.src = result.message[6] 
         bild8.src = result.message[7] 
         bild9.src = result.message[8] 
         bild10.src = result.message[9] 

         console.log(result)

         
    })
    .catch(error=>console.log (error))
    
    })

    let slumpa = document.getElementById('slumpa')
    let slumpbild = document.getElementById('slumpbild');
    
    slumpa.addEventListener('click', function(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(result => {

            console.log(result)
         slumpbild.src = result.message

         
         
    })
    .catch(error=>console.log (error))
    
    })
    }

    fetchData();