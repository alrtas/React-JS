var campos= [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);
var tbody = document.querySelector('table tbody'); 

//Roda quando submeter o formulario
document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault(); //impede submeter forumlario para recarregar a página
    var tr = document.createElement('tr');

    //itera array de campos para criar tds dinamicas
    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });

    //Cria dado para coluna de volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    //Adiciona tabela criada na tela 
    tbody.appendChild(tr);

    //Zera valores para não ficar valores antigos digitados
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //Seta o foco no campo data
    campos[0].focus();
});
