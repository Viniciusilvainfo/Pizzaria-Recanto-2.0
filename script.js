let valor = 0;
let html;
let opcao;
let imagens = ['imagens/foto-1.jpg','imagens/foto-2.jpg','imagens/foto-3.jpg'];
let i = 0;
let c = 0;
var sabores = [];
var precos = [];
function clicado() {
    if(valor == 0 ) {
        document.querySelector('#collapse').className="content visivel opacidade";
        valor = 1;
        return valor;
    }else if(valor == 1) {
        document.querySelector('#collapse').className="oculto";
        valor = 0;
        return valor;
    }
}

function hover(num) {
    if(num == 0 || num == 2 ) {
        document.querySelector('#navegação').className="barra-navegação opacidade";
        if(valor == 0) {
            document.querySelector('#collapse').className="oculto";
        }else if(valor == 1) {
            document.querySelector('#collapse').className="content visivel opacidade";
        }
    }   else if(num == 1 || num == 3) {
            document.querySelector('#navegação').className="barra-navegação";
            if(valor == 0) {
                document.querySelector('#collapse').className="oculto";
            }else if(valor == 1) {
                document.querySelector('#collapse').className="content visivel";
            }
        }
}

function pedidos(obj, preco) {
    if(obj.style.backgroundColor != 'green') {
        obj.style.backgroundColor = 'green';
        sabores[c] = obj.id;
        precos[c] = preco;
        c++;
    }else {
        obj.style.backgroundColor = 'white';
        for(let contador = 0; contador <= sabores.length; contador++) {
            if(obj.id = sabores[contador]) {
                sabores[contador] = '';
                precos[contador] = '';
            }
        }
    }
}

function cardapio(num) {
    switch(num) {
        case 1:
            html = `<h1 onclick="pedidos(this, 35.90)" id='frango'>Frango<span>R$ 35,90</span></h1>
            <p>Catupiry, Frango e Tomate</p>
            
            <h1 onclick="pedidos(this, 30.90)" id='calabresa'>Calabresa<span>R$ 30,90</span></h1>
            <p>Muçarela, Calabresa, Cebola e Tomate</p>
            
            <h1 onclick="pedidos(this, 32.90)" id='quatroqueijos'>4 Queijos<span>R$ 32,90</span></h1>
            <p>Muçarela, Provolone, Catupiry e Gorgonzola</p>
            
            <h1 onclick="pedidos(this, 42.90)" id='file'>Filet Mignon<span>R$ 42,90</span></h1>
            <p>Muçarela, Filet e Cebola</p>
            
            <h1 onclick="pedidos(this, 34.90)" id='portuguesa'>Portuguesa<span>R$ 34,90</span></h1>
            <p>Muçarela, Polpa de Tomate, Cebola e Azeitonas</p>
            
            <h1 onclick="pedidos(this, 30.90)" id='napolitana'>Napolitana<span>R$ 30,90</span></h1>
            <p>Muçarela, Manjericão e Tomate</p>`;

            opcao = document.querySelector('#conteudo-cardapio');
            opcao.innerHTML= html;

            document.querySelector('#btn1').className = 'cardápio-botão active';
            document.querySelector('#btn2').className = 'cardápio-botão';
            document.querySelector('#btn3').className = 'cardápio-botão';

            break;

        case 2:
            html = `<h1 onclick="pedidos(this, 38.90)" id='brigadeiro'>Brigadeiro <span>R$ 38,90</span></h1>
            <p>Chocolate ao Leite, Chocolate Granulado e Muçarela</p>
            
            <h1 onclick="pedidos(this, 35.90)" id='goiabada'>Goiabada<span>R$ 35,90</span></h1>
            <p>Goiabada e Muçarela</p>
            
            <h1 onclick="pedidos(this, 38.90)" id='banana'>Banana C/canela <span>R$ 38,90</span></h1>
            <p>Banana, Canela, Açúcar e Muçarela</p>
            
            <h1 onclick="pedidos(this, 39.90)" id='bombom'>Bombom<span>R$ 39,90</span></h1>
            <p>Bombom, Leite Condensado e Muçarela</p>
            
            <h1 onclick="pedidos(this, 37.90)" id='chocolate'>Chocolate branco <span>R$ 37,90</span></h1>
            <p>Chocolate Branco e Muçarela</p>
            
            <h1 onclick="pedidos(this, 49.90)" id='california'>Califórnia <span>R$ 39,90</span></h1>
            <p>Abacaxi, Figo, Pêssego e Muçarelaa</p>`;

            opcao = document.querySelector('#conteudo-cardapio');
            opcao.innerHTML= html;

            document.querySelector('#btn2').className = 'cardápio-botão active';
            document.querySelector('#btn1').className = 'cardápio-botão';
            document.querySelector('#btn3').className = 'cardápio-botão';

            break;

        case 3:
            html = `<h1>Lasagna Bolonhesa<span>R$ 45,90</span></h1>
            <p>Molho Vermelho, Carne Moída, Muçarela e Presunto</p>
            
            <h1>Lasanha de Frango<span>R$ 40,90</span></h1>
            <p>Frango, Molho de Tomate, Milho e Cenouras</p>
            
            <h1>Lasanha de Brócolis<span>R$ 37,90</span></h1>
            <p>Molho Branco, Brócolis e Bacon</p>
            
            <h1>Massa a Carbonara<span>R$ 46,90</span></h1>
            <p>Bacon, Ovo, Creme de Leite e Queijo Parmesão</p>
            
            <h1>Massa a Bolonhesa<span>R$ 41,90</span></h1>
            <p>Molho de Tomate, Carne Moída, Manjerição e Cebola</p>
            
            <h1>Massa Alho e Óleo<span>R$ 36,90</span></h1>
            <p>Alho, Manteiga e Pimenta</p>`;

            opcao = document.querySelector('#conteudo-cardapio');
            opcao.innerHTML= html;

            document.querySelector('#btn3').className = 'cardápio-botão active';
            document.querySelector('#btn2').className = 'cardápio-botão';
            document.querySelector('#btn1').className = 'cardápio-botão';

            break;

        default:
            break;
    }
}

let x = 0;
let reserva = document.getElementById('reserva');
let pedido = document.getElementById('pedido');
let pedido1 = document.getElementById('pedido1');

try {

    reserva.addEventListener('click', function(){
        window.open('reservas.html');
    });
    pedido.addEventListener('click', function(){
        window.open('pedidos.html');
    });
    
    pedido1.addEventListener('click', function() {
        window.open('pedidos.html');
    });
    
    
setInterval(function(){
    if(x == 0) {
        reserva.className = 'hidden';
        pedido.className = 'button';
        x = 1;
    }else if(x == 1) {
        pedido.className = 'hidden';
        reserva.className = 'button';
        x = 0;
    }
},2000);
} catch(e) {
    
}
function play() {
    let img = document.querySelector('#imageSlide');
    let x = setInterval(() => {
        if(i < 3) {
            img.src = imagens[i];
        } else {
            i = 0;
            img.src = imagens[i];
        }
        i++;
    }, 5000);
}