function aluno(nome, idade) {
  if (!nome || !idade) {
    console.log("Erro: Nome e idade são obrigatórios para o cadastro!");
    return;
  }

  console.log("Usuário cadastrado com sucesso!");
  console.log("Nome:", nome);
  console.log("Idade:", idade);
}


aluno("", 30);
module.exports = aluno
