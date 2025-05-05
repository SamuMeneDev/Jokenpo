const btnPedra = document.querySelector('#pedra');
const btnPapel = document.querySelector('#papel');
const btnTesoura = document.querySelector('#tesoura');
const optionsDiv = document.querySelector(".options");
//const arrayBotoes = [btnPedra, btnPapel, btnTesoura];
const menuElement = document.querySelector('.menu');

let vitJogador = 0;
let vitComp = 0;

function resultado() {
    optionsDiv.style.visibility = "hidden";

    const btnReset = document.createElement("button");
    btnReset.innerText = "Jogar Novamente";
    btnReset.setAttribute("id", "reset");
    btnReset.addEventListener("click", function() {
        vitComp = 0;
        vitJogador = 0;
        optionsDiv.style.visibility = "visible";
        menuElement.innerHTML = "-";

        
    });
    menuElement.appendChild(btnReset);
}


function jogar(opcao) {
    let computador = Math.floor(Math.random() * 3);
    let jogador = opcao
    const opcaoArray = ["Pedra", "Papel", "Tesoura"]
    if (computador === jogador) {
        menuElement.innerHTML = `<h2>Empate</h2>
            <p>Jogador escolheu ${opcaoArray[jogador]}</p>
            <p>Computador escolheu ${opcaoArray[computador]}</p>
            <p>Jogador ${vitJogador} x ${vitComp} Computador</p>
            <p>Continue Jogando!</p>`;

    } else if (
        jogador == 0 && computador == 2 ||
        jogador == 1 && computador == 0 ||
        jogador == 2 && computador == 1) {
            vitJogador++;
            menuElement.innerHTML = `<h2>Vitória do Jogador</h2>
            <p>Jogador escolheu ${opcaoArray[jogador]}</p>
            <p>Computador escolheu ${opcaoArray[computador]}</p>
            <p>Jogador ${vitJogador} x ${vitComp} Computador</p>
            <p>Continue Jogando!</p>`;
            
    } else {
        vitComp++;
        menuElement.innerHTML = `<h2>Vitória do Computador</h2>
            <p>Jogador escolheu ${opcaoArray[jogador]}</p>
            <p>Computador escolheu ${opcaoArray[computador]}</p>
            <p>Jogador ${vitJogador} x ${vitComp} Computador</p>
            <p>Continue Jogando!</p>`;
    }
    if (vitJogador >=3 || vitComp >=3) {
        if (vitJogador >= vitComp) {
            menuElement.innerHTML = `
            <h2>Fim de jogo</h2>
            <p>Jogador escolheu ${opcaoArray[jogador]}</p>
            <p>Computador escolheu ${opcaoArray[computador]}</p>
            <p>Vitória do Jogador</p>
            <p>Placar final: Jogador ${vitJogador} x ${vitComp} Computador</p>`;
            
            resultado();
        } else {
            menuElement.innerHTML = `
            <h2>Fim de jogo</h2>
            <p>Jogador escolheu ${opcaoArray[jogador]}</p>
            <p>Computador escolheu ${opcaoArray[computador]}</p>
            <p>Vitória do Computador</p>
            <p>Placar final: Jogador ${vitJogador} x ${vitComp} Computador</p>`;
            resultado();
        }
    }

}


btnPedra.addEventListener("click", ()=> {
    jogar(0);
});
btnPapel.addEventListener("click", ()=> {
    jogar(1);
});
btnTesoura.addEventListener("click", ()=>{
    jogar(2);
});