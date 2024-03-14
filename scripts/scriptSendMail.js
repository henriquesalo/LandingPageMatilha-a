document.getElementById('emailButton').addEventListener('click', sendMail);

function sendMail(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const cargo = document.getElementById('cargo').value;
  const mail = document.getElementById('email').value;
  const curso = document.getElementById('curso').value;
  const motivo = document.getElementById('motivo').value;

  if(nome && cargo && mail && curso && motivo) {
    Email.send({
      Host : "smtp.yourisp.com",
      Username : "enviaremailmatilhaca@gmail.com",
      Password : "26430274431CA893425C09EC80395BCF6221",
      To : 'matilhaca@gmail.com',
      From : "enviaremailmatilhaca@gmail.com",
      Subject : "INSCRIÇÃO PARA DIRETORIA",
      Body : `Nome: ${nome} \n cargo: ${cargo} \n email: ${mail} \n 
              curso: ${curso} \n motivo: ${motivo} `,
    }).then(() => {
      alert('Inscrição realizada com sucesso! Aguarde que entraremos em contato.');
      location.reload();
    });
  } else {
    alert('Preencha todos os campos!');
  }

}