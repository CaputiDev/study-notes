
def busca_binaria(lista,alvo):
    count = 0
    baixo = 0
    alto = len(lista) -1
    print("tamanho do array: " + str(len(lista))) # 400000

    while baixo <= alto:
        count+=1
        meio = (baixo + alto) // 2
        chute = lista[meio]
        if chute == alvo:
            print ("n de operacoes " + str(count)) # 18
            return meio


        if chute > alvo:
            alto = meio -1

        else:
            baixo = meio +1

    print ("n de operacoes " + str(count))
    return None



lista_grande = list(range(1, 400001)) # simulacao de 400 mil elementos

print ("indice:" + str(busca_binaria(lista_grande,1))) # 0