
  document.querySelector('#form-input')
    .addEventListener('submit', function(event){
    // removendo o evento de reload
    event.preventDefault();

    // buscando o valor do campo cep
    const cep = document.querySelector('#cep').value;
    // validação simples do cep
    const validaCep = cep.replace(/\D/g, '');

    if(validaCep != ''){
      fetch(`https://viacep.com.br/ws/${validaCep}/json/`)
        .then((response) => {
          return response.json()
        })
        .then((data) =>{
          document.getElementById('uf').value = data.uf;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('endereco').value = data.logradouro;
        });
    };
  });
