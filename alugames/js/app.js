
function exibeTextoTela(tag, texto){
    let mensagem = document.querySelector(tag)
        mensagem.innerHTML = texto;
}

function alterarStatus(id){
    
   let gameSelecionado = document.getElementById(`game-${id}`);

   let butao = gameSelecionado.querySelector(".dashboard__item__button");

   let imagem = gameSelecionado.querySelector(".dashboard__item__img");
   
   let NomeJogo = gameSelecionado.querySelector(".dashboard__item__name");
  

    if( imagem.classList.contains("dashboard__item__img--rented")){
        
        imagem.classList.remove("dashboard__item__img--rented");
       
        butao.classList.remove("dashboard__item__button--return");
        
        butao.textContent = 'Alugar'       
      
    }else{
        imagem.classList.add("dashboard__item__img--rented");
       
        butao.classList.add("dashboard__item__button--return");
       
        butao.textContent = 'Devolver';       

       }
    
 }
