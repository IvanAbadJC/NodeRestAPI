const paginator = (query) => {
    const { limite=5, paginaActual=0 } = query;
    let pagina = (limite*paginaActual)-limite;
    if(pagina < 0){ pagina = 0; }
    let obj = new Object();
    obj.limite = limite;
    obj.pagina = pagina;
    return obj;
}

module.exports = paginator;