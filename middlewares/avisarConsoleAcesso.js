const avisarConsoleAcesso = (req, res, next) => {
    console.log(`Alguém acessou a rota: http://localhost:${process.env.PORT}${req.url}`);
    next()
}

export default avisarConsoleAcesso;