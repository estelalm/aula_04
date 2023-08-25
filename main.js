'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarTriplo = document.getElementById('botao-mostrar-numeros-triplo')
const botaoMostrarProximoImpar = document.getElementById('botao-mostrar-proximo-impar')
const botaoMostrarMultiplo = document.getElementById('botao-mostrar-multiplos')
const botaoMostrarMultiploOu = document.getElementById('botao-mostrar-multiplos-ou')
const botaoMostrarProximoPrimo = document.getElementById('botao-mostrar-proximo-primo')

function mostrarNumeros() {

    const numeros = document.getElementById('numeros').value.split(',') //conteúdo do input em um vetor, com a String separada pela vírgula
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    //criar os spans para o indice do número digitado
    for (let contador = 0; contador < ultimoIndice; contador++) {

        if (numeros[contador] != '') {
            const novoSpan = document.createElement('span')  //
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan) //anexar os span no container
        }

    }

}

function mostrarNumerosPares() {

    const numeros = document.getElementById('numeros').value.split(',') //conteúdo do input em um vetor, com a String separada pela vírgula
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0 && numeros[contador] != '') {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}

function mostrarTriplo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = (numeros[contador] * 3)
        container.appendChild(novoSpan)
    }
}

function mostrarProximoImpar() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-impar')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0 && numeros[contador] != '') {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = (Number(numeros[contador]) + 1)
            container.appendChild(novoSpan)
        } else {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = (Number(numeros[contador]) + 2)
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 5 == 0 && numeros[contador] % 3 == 0 && numeros[contador] != '') {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}

function mostrarMultiploOu() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos-ou')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 5 == 0 && numeros[contador] != '' || numeros[contador] % 3 == 0 && numeros[contador] != '') {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}
function mostrarProximoPrimo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-primo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {

        let primo
        // let divide = 0;
        // for (const nextprimo = Number(numeros[contador]) + 1; primo == false;nextprimo++) {
        //     for (let termo = 1; termo <= nextprimo; termo++) {
        //         if(nextprimo%termo == 0 ){
        //             divide++
        //         }
        //     }
        //     if(divide == 2){
        //         primo = true
        //     }
        // }
        let divisor = 2;
        while(numeros[contador]%divisor != 0)
            divisor++;
        
        if(numeros[contador] == divisor)
            primo = true
        else
            primo = false

        if(primo = true){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}

botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarTriplo.addEventListener('click', mostrarTriplo)
botaoMostrarProximoImpar.addEventListener('click', mostrarProximoImpar)
botaoMostrarMultiplo.addEventListener('click', mostrarMultiplo)
botaoMostrarMultiploOu.addEventListener('click', mostrarMultiploOu)
botaoMostrarProximoPrimo.addEventListener('click', mostrarProximoPrimo)