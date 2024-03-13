document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Inscrição realizada com sucesso! Aguarde que entraremos em contato.");
        
        document.getElementById("nome").value = "";
        document.getElementById("cargo").value = "";
        document.getElementById("email").value = "";
        document.getElementById("curso").value = "";
        document.getElementById("motivo").value = "";
    });
});