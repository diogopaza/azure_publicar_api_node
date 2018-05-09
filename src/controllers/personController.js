const model = require("../models/personModels");


exports.get = (req, res, next) => {
    res.send('Requisição recebida com sucesso no get so com send!');
};

exports.post = (req, res, next) => {
    res.status(201).send('Estou no post');
        console.log(req.body.idade);
        var pessoa = new model({
            
                nome: req.body.nome,
                idade: req.body.idade
            
            }) 
            
            pessoa.save(function(err, beto){
            
                if(err) return console.log('Erro ao gravar pessoa');
                console.log(pessoa);
            })
    
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

