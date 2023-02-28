function pulaLinha(){
    document.write("<br>");
}

function validaFormulario(){
    var nome = document.getElementById("nome")
if(nome.value == ""){
    alert("Nome não informado!")
}

var celular = document.getElementById("cel");
if(celular.value == ""){
    alert("Número de telefone não informado!");
    };

var email = document.getElementById("mail")
if(email.value == ""){
    alert("Email não informado!")
}

var data = document.getElementById("nasc")
    if(data.value == ""){
        alert("Data não informada!")
    }

}
