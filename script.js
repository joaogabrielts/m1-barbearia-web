const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  

function buscaCortePorId(id) {
for(let i = 0; i < barbearia.cortes.length; i++){
    let corteId = barbearia.cortes[i].id
    if( corteId === id){
        return barbearia.cortes[i] 
    }
  } 
   return  "Corte não encontrado"
}
console.log(buscaCortePorId(1));


 

function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length; i++){
    let barbaId = barbearia.barbas[i].id
    if(barbaId == id){
        return barbearia.barbas[i]
    }
  }
  return "Barba não encontrada"
}

console.log(buscaCortePorId(1));



function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return "Estamos abertos"
    }
    return "Estamos fechados"
}
console.log(verificaStatusBarbearia());

function retornaTodosCortes() {
   let todosOsCortes = []
   for(let i = 0; i < barbearia.cortes.length; i++){
    todosOsCortes.push(barbearia.cortes[i])
   }
 return todosOsCortes
}
console.log(retornaTodosCortes());


function retornaTodasBarbas() {
    let todasBarbas = []
    for(let i = 0; i < barbearia.barbas.length;i++){                     todasBarbas.push(barbearia.barbas[i])   
    }
   return todasBarbas
}
console.log(retornaTodasBarbas());



function criaPedido(nomeCliente, corteId, barbaId) {
       let nomeCli = nomeCliente
     let funcaoCortes = buscaCortePorId(corteId) 
      let funcaoBarbas  = buscaBarbaPorId(barbaId)
      let  pedido = {
        nome: nomeCli,
        pedidoCorte: funcaoCortes.tipo,
        pedidoCortePreco: funcaoCortes.valor,
        pedidoBarba: funcaoBarbas.tipo,
        pedidoBarbaPreco: funcaoBarbas.valor,
     }
     return pedido
}
console.log(criaPedido('davi',2,2));



function atualizarServico(lista, id, valor, tipo) {
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id){
          lista[i].tipo = tipo
          lista[i].valor = valor
        }
    }
    return lista
    }
   console.log(atualizarServico(barbearia.cortes,1,20,'eee'));
   


function calculaTotal(pedido) {
    let valorCorte = pedido.pedidoCortePreco
    let valorBarba = pedido.pedidoBarbaPreco
    let resultado = valorCorte + valorBarba
    return resultado
}

  
  
