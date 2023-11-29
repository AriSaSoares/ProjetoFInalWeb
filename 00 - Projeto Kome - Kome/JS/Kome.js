function CalcB() {
    QuantB = 0;
    TempB = 0;
    var Bot = prompt("Digite a quantidade que deseja: ");
    QuantB = Bot * 2;
    TempB = Bot * 15;
    alert ("Seu pedido custa: " + QuantB + " Reais" + "\n" + "O tempo de preparo é de: " + TempB + " Minutos");
}
function CalcE() {
    QuantE = 0;
    TempE = 0;
    var Bot = prompt("Digite a quantidade que deseja: ");
    QuantE = Bot * 5;
    TempE = Bot * 70;
    alert ("Seu pedido custa: " + QuantE + " Reais" + "\n" + "O tempo de preparo é de: " + TempE + " Minutos");
}
function CalcP() {
    QuantP = 0;
    TempP = 0;
    var Bot = prompt("Digite a quantidade que deseja: ");
    QuantP = Bot * 13;
    TempP = Bot * 20;
    alert ("Seu pedido custa: " + QuantP + " Reais" + "\n" + "O tempo de preparo é de: " + TempP + " Minutos");
}
function CalcS() {
    QuantS = 0;
    TempS = 0;
    var Bot = prompt("Digite a quantidade que deseja: ");
    QuantS = Bot * 7;
    TempS = Bot * 35;
    alert ("Seu pedido custa: " + QuantS + " Reais" + "\n" + "O tempo de preparo é de: " + TempS + " Minutos");
}
function CalcA() {
    QuantA = 0;
    TempA = 0;
    var Bot = prompt("Digite a quantidade que deseja: ");
    QuantA = Bot * 3;
    TempA = Bot * 15;
    alert ("Seu pedido custa: " + QuantA + " Reais" + "\n" + "O tempo de preparo é de: " + TempA + " Minutos");
}
function CalcCv() {
    var QuantB = 0;
    var QuantE = 0;
    var QuantP = 0;
    var QuantS = 0;
    var QuantA = 0;
    
    var TempB = 0;
    var TempE = 0;
    var TempP = 0;
    var TempS = 0;
    var TempA = 0;
    
    var Cv = 0;
    var Ct = 0;
    
        Cv = QuantB + QuantE + QuantP + QuantS + QuantA;
        alert("Valor total dos pedidos: " + Cv + Ct);
    }
    
    function CalcCt() {
        Ct = TempB + TempE + TempP + TempS + TempA;
        alert("Tempo total dos pedidos: " + Ct);
    }
    
    function CalcCc() {
        QuantB = 0;
        QuantE = 0;
        QuantP = 0;
        QuantS = 0;
        QuantA = 0;
        TempB = 0;
        TempE = 0;
        TempP = 0;
        TempS = 0;
        TempA = 0;
        Cv = 0;
        Ct = 0;
        alert("Seus pedidos foram cancelados !!!");
    }
    


function Op() {
    var Nome = document.getElementById("NomeId");
    var Op = document.getElementById("OpinId");
    if (Nome.value != "" && Op.value != "") {
        alert("Obrigado: " + Nome.value + ", sua opinião foi encaminhada com sucesso.");
    }
    else {
        alert("Preencha os campos ( NOME ) e (OPINIÃO) !!!");
    }
}
function Cad() {
    var Nome = document.getElementById("NomeId");
    var Sobre = document.getElementById("SobreId");
    var Idade = document.getElementById("IdadeId");
    var Email = document.getElementById("EmailId");
    var Senha = document.getElementById("SenhaId");
    var SenhaC = document.getElementById("SenhaCId");
    if (Nome.value != "" && Sobre.value != "" && Email.value != "" && Idade.value != "" && Senha.value != "" && SenhaC.value != "") {
        if (Idade.value >= 18) {
            if (Senha.value == SenhaC.value) {
                alert ("Caro(a): " + Nome.value + " " + Sobre.value + ", Você Foi cadastrado com sucesso !!!");
            }
            else {
                alert ("Suas senhas não coincidem ( Coloque a mesma pra ambos os campos ) !!!");
            }
        }
        else {
            alert ("Sua idade tem que ser superior/igual a ( 18 ) anos para se cadastrar !!!");
        }    
    }
    else {
        alert("Preencha os campos ( NOME ), ( SOBRENOME ), ( Idade ), ( Email ), ( Senha ) e (Confirma) !!!");
    }
}