//01
let apartamento = {
    quartos: 2,
    tipo: 'apartamento',
    endereço: 'avenida principal, 456 - centro',
    andar: 7
}

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}  andar  da${apartamento.endereço}`)

//02
let produtoEmbalado = {
    nome:'laptop hp',
    categoria: 'eletronico',
    peso: 1.5,
    preço: 3500.00
}

console.log(`o produto ${produtoEmbalado.nome}, de categoria${produtoEmbalado.categoria}, pesando 1.5kl está à venda por R$}.`)

//3
class Imovel {
    constructor(quartos, tipo, endereço){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereço = endereço;
    }
    exibirinformaçoes(){
        return`$(this.tipo) com ${this.quartos} quartos, localizado(a) na ${this.endereço}.`;
    }
}

let casa = new Imovel(3, 'Sobrado', 'Rua da chuva, bairro alagado, n°5354');
    console.log(casa.exibirinformaçoes());

    let ap = new Imovel(2, 'apartamento', 'rua do amor, bairro florido, n°9384');
    console.log(ap.exibirinformaçoes());


//4


