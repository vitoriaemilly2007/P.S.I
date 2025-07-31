# 01 - Se o usuário tiver + de 18 anos (imprimir mensagem)
#          se menor de 18 anos (imprimir mensagem)
#          menor de 18 e maior de 16, e e estiver acompanhado ele pode entrar
#          se idade negativa (imprimir mensagem)
#          checar a idade da companhia, precisa ser maior de 18

idade = int(input('digite sua idade: '))
acompanhado = True

if idade >= 18:
    print('É de maior, pode entrar!')

elif idade < 18 and idade >= 16 and acompanhado == True:
    acompanhado = int(input('Digite a idade do seu acompanhante: '))

    if acompanhado >=18:
         print('pode entrar')
    else: 
        print('Não pode entrar')


elif idade < 0:
    print('Valor inválido')


else:
    print('É de menor, não pode entrar')