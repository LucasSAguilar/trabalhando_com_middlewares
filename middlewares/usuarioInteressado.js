const usuarioInteressado = (req, res, next) => {
    const dataAtual = new Date;
    const dataFormatada = dataAtual.toLocaleDateString()
    console.log(`Um usuário mostrou interesse em comprar no dia: ${dataFormatada}`);
    next();
}

export default usuarioInteressado;