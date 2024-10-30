const p = document.querySelector('#parágrafo')
const divImg = document.querySelector('#divImg');
const txt= document.querySelector('#txt');

    // divImg.addEventListener('click', () =>{
    //     divImg.style.border = '2px solid black'
    // })


    function pMouse(){
      divImg.style.border = '2px solid black';
    }

    function sMouse(){
        divImg.style.border = 'none';
     }


    divImg.addEventListener('mouseover' ,pMouse);
    divImg.addEventListener('mouseout' ,sMouse);

       


p.onclick = ()=>{
    alert('parágrafo clicado!')
}


const clique = () => {
    console.log('Botão clicado!')
    alert('Botão clicado!')
}

// function pressTecla(){
//     if (divImg.style.backgroudColor);
// }

function pressTecla(){
    if (window.getComputedStyle(divImg, null).getPropertyValue
    ('backgroud-color')=== 'rgb(0, 0, 0)'){
        divImg.style.backgroudColor = 'rgb(255, 255, 255)'
    }else{
        divImg.style.backgroudColor = 'rgb(0, 0, 0)'

    }
}

// console.log (window.getComputedStyle(divImg, null).getPropertyValue
//     ('backgroud-color')
// console.log(txt.style.backgroudColor)