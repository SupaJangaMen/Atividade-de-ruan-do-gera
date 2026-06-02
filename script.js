async function buscarCEP(){

    const cep = document.getElementById("cep");
    const mensagem = document.getElementById("mensagem");
    const resultado = document.getElementById("resultado");

    mensagem.innerHTML = "";
    resultado.style.display = "none";

    // Validação
    if(cep.value == ""){
        mensagem.innerHTML = "Digite um CEP.";
        mensagem.className = "erro";
        return;
    }

    try{

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep.value}/json/`
        );

        const dados = await resposta.json();

        if(dados.erro){

            mensagem.innerHTML = "CEP não encontrado!";
            mensagem.className = "erro";

            return;
        }

        document.getElementById("resCep").textContent = dados.cep || "-";
        document.getElementById("rua").textContent = dados.logradouro || "-";
        document.getElementById("bairro").textContent = dados.bairro || "-";
        document.getElementById("cidade").textContent = dados.localidade || "-";
        document.getElementById("estado").textContent = dados.uf || "-";
        document.getElementById("ddd").textContent = dados.ddd || "-";
        document.getElementById("complemento").textContent = dados.complemento || "-";
        document.getElementById("ibge").textContent = dados.ibge || "-";
        document.getElementById("gia").textContent = dados.gia || "-";
        document.getElementById("siafi").textContent = dados.siafi || "-";

        resultado.style.display = "block";

        mensagem.innerHTML = "CEP encontrado com sucesso!";
        mensagem.className = "sucesso";

    }catch(error){

        mensagem.innerHTML = "Erro ao consultar a API.";
        mensagem.className = "erro";
    }
}
