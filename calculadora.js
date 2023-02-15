document.addEventListener("DOMContentLoaded", function (event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');

    let DarkModeBtn = document.querySelector('.dark_mode_btn');
    let clear = document.querySelector('#clear');
    let history = document.querySelector('#history');
    let EqualTo = document.querySelector('#equalTo');
    let DeleteSingleNum = document.querySelector('#delete_single_num');

    let Normal_btn = document.querySelectorAll('#Normal_btn');


    let InitialValue = "";
    /* Concatena o conteúdo contido no botão conforme o usuário for clicando*/
    /*O foreach vai passar por cada botão selecionado e associar uma função à ser ativada quando clicar nele*/
    Normal_btn.forEach((Normal_btn, index) => {
        Normal_btn.addEventListener('click', function () {
            let text = this.innerHTML;
            InitialValue += text;
            result.innerHTML = InitialValue;
        });
    });

    /*Utilizando a função eval() para gerar os resultados quando o botão de igual é clicado*/
    /* A função eval() computa um código JavaScript representado como uma string*/
    EqualTo.addEventListener('click', function () {
        if (result.innerHTML != "") {
            history.innerHTML = result.innerHTML;
            result.innerHTML = eval(result.innerHTML);
            InitialValue = eval(result.innerHTML);
        } else {
            alert('Insira um número!');
        }
    });

    /*dark_mode*/
    let DarkModeStatus = false;
    DarkModeBtn.addEventListener('click', function () {
        body.classList.toggle('dark_mode_active');
        if (DarkModeStatus == false) {
            this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
            DarkModeStatus = true;
        } else {
            this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            DarkModeStatus = false;
        }
    });


    /*Limpar todos os números*/
    clear.addEventListener('click', function () {
        result.innerHTML = "";
        InitialValue = "";
    });

    /*Deletar único número*/
    DeleteSingleNum.addEventListener('click', function () {
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
        InitialValue = result.innerHTML;
    });

});