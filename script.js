let num = document.querySelector('input#fnum')
let list = document.querySelector('select#sellist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true
    } else
        return false
}

function adicionar() {
    if (!isNumero(num.value)) {
        alert('Valor inválido!')
    } else if (inLista(num.value, valores)){
        alert('Valor ja encontrado na lista.')
    } else {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        list.appendChild(item)
        res.innerHTML = '' //Limpa a análise caso seja adicionado outro número
    }
    num.value = '' //Apaga o valor do input após adicionar na lista para não termos que apagar manualmente
    num.focus() //Automaticamente seleciona o input com o mouse para podermos adicionar mais valores logo em seguida
}

function finalizar() {
    if (valores.length == 0) {
        alert(`[ERRO] Não existem valores à serem analisados`)
    } else {
        let length = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            media += valores[pos]/valores.length
            if (valores[pos] > max) 
                max = valores[pos]
            if (valores[pos] < min)
                min = valores[pos]
        }
    

        res.innerHTML = ''
        res.innerHTML += `<p><strong>Total de números:</strong> Ao todo, temos ${length} números cadastrados</p>`
        res.innerHTML += `<p><strong>Valor máximo:</strong> O maior valor informado foi ${max}</p>`
        res.innerHTML += `<p><strong>Valor mínimo:</strong> O menor valor informado foi ${min}</p>`
        res.innerHTML += `<p><strong>Soma total:</strong> A soma dos valores informados é ${soma}</p`
        res.innerHTML += `<p><strong>Média:</strong> A média dos valores informados é ${media}</p>`

    }
    msg.innerHTML = ''
}