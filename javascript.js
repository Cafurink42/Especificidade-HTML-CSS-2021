//var n1 = Number(prompt('Digite um numero:'));
//var n2 = Number(prompt('Digite outro numero:'));
//var total = (n1%n2);
//document.write('O resto da divisão é: ' + total)

//var n3 = Number(prompt('Digite um numero:'));
//var n4 = Number(prompt('Digite um outro numero:'));
//var total2 = (n3**n4);
//alert(total2);

//var date_1 = Number(prompt('Digite a sua primeira nota:'));
//var date_2 = Number(prompt('Digite a sua segunda nota:'));
//
//var  result = (date_1+date_2)/2
//
//if (result >=5 ){
//    alert('Você foi aprovado ! Nota: ' + result );
//
//}else{
//    alert('Você não foi aprovado :( Nota: ' + result);
//}

//####################################
//var player_1 = Number(prompt('Digite um número:'));
//var player_2 = Number(prompt('Digite um número:'))
//if (player_1 === player_2){
//    alert('Players empataram');
//}else{
//    var random = parseInt(Math.random()*2);
//    // se o numero sorteado for 0, ganha quem escolher o numero menor
//    if (random ===0){
//        if(player_1 < player_2){
//            alert('Player one win !')
//        }else{
//            alert('Player two win !')
//        }
////se o numero sorteado for 1, ganha quem escolher o numero maior
//    }else{
//        if (player_1 > player_2){
//            alert('Player one win !')
//        }else{
//            alert('Player two win ! ')
//        }
//
//    }
//}
//#####################################
//var n1 = Number(prompt('Digite a primeira nota:'));
//var n2 = Number(prompt('Digite a segunda nota:'));
//var media  = (n1+n2)/2;
//
//if (media > 5 && n1 || 0 || n2>0 ){
//    alert('Parabéns ! Você foi aprovado ')
//}else{
//    alert('Desculpe, tente novamente outra hora');
//}

//var n = prompt ('Digite  um numero');
//n = parseInt(n); 
//switch(n){
//    case 1:
//        alert('Boa escolha !');
//        break;
//    case 2:
//        alert('Numero par ! Legal !');
//        break;
//    case 3:
//        alert('Os três mosqueteiros !');
//        break;
//
//    default:
//        alert('Escolha de 1 a 3 :)');
//}
//outra maneira de trabalhar com condição quando se tem valores fechados.

//function show(){
//    var n = prompt('Digite um número:');
//    clean();
//    n = parseFloat(n);
//    var i = 1;
//    while (i<=1000){
//        msg += n + 'x' + i + ' = ' + (n*1) + '<br>';
//        i++;
//    }
//
//    output.innerHTML = msg;
//}
//function clean(){
//    msg = '';
//    output.innerHTML = msg;
//    
//}
//
//var output = document.querySelector('#output');
//
//var msg = '';

//var date  = prompt('Digite um numero: ');
//date = parseFloat(date);
//document.write(date);
//

//calculadora

//function calcular(dado){
//    var date_1 = Number(prompt('Digite um número:'));
//    var date_2 = Number(prompt('Digite outro número:'))
//
//    if (dado == "+"){
//        resp = date_1 + date_2;
//        alert(resp);
//        
//    }
//    if (dado == "-"){
//        resp  = date_1 - date_2;
//        alert(resp);
//    }
//    switch (dado){
//        case '*':  
//        resp = date_1 * date_2;
//        alert(resp);
//        break
//    }
//    switch (dado){
//        case '/':
//            resp = date_1 / date_2;
//            alert(resp);
//            break
//    }
//
//}
//
//function mostrarAreaAlert(){
//
//    var largura   = prompt('Digite a largura:');
//    largura = parseFloat(largura);
//    var altura  = prompt = ('Digite a altura:');
//    altura  = parseFloat(altura);
//    var area = calcularArea(largura, altura);
//    alert('A área total é: ' + area);
//
//    
//}
//
//function  mostrarAreaOutput(){
//        var largura   = prompt('Digite a largura:');
//    largura = parseFloat(largura);
//    var altura  = prompt = ('Digite a altura:');
//    altura  = parseFloat(altura);
//    var area  = calcularArea(largura, altura);
//    document.querySelector('.output').innerHTML =  'A área total é: ' + area;
//
//
//
//}
//
//function calcularArea(l, a){
//    return l* a;
//
//}

alert('hello world');

var n2  = prompt ('Digite um número:');
n2  = parseFloat(n2);


escreve(n2);

function iniciarCalculo(simbolo){
    var n1 = document.querySelector('#output').textContent;
    var n2  = prompt('Digite outro número');
    n2 = parseFloat(n2);

    var msg = calcular(simbolo, n1, n2);
    escreve (msg);
}

function escreve(mensagem){
    var output = document.querySelector('#output');
    output.innerHTML = mensagem;
}

function calcular (simbolo, n1, n2){
    var numerocalculado = null;

    switch (simbolo){
        case  '+':
            numerocalculado = n1+n2;
            break;
        case '-':
            numerocalculado = n1-n2;
        case  '*':
            numerocalculado = n1*n2;
        case '/':
            numerocalculado = n1/n2;

     
    }
    return numerocalculado;
}