# 01 - ultilizando if/else simular a operação de calculadora
# deverá receber 2 números e um operador
# se o operador for + (somar), - (subtrair), * (multiplicar) e / (dividir)
# e você terá que imprimir o resultado

# numero1 = float(input('Digite um número: '))
# numero2 = float(input('Digite outro número: '))

# operador = input('Digite uma operação, +, -, * e /: ')

# if operador == "+":
#     soma = numero1 + numero2
#     print('a soma do numero é', soma)

# elif operador == "-":
#     subtraçao = numero1 - numero2 
#     print("A subtração do número é :", subtraçao)

# elif operador == '*' :
#     multiplicaçao = numero1 * numero2
#     print('a multiplicaçao do número é: ', multiplicaçao)

# elif operador == "/":
#     divisão = numero1 / numero2
#     print("A divisão do número é: ", divisão)

# else:
#     print("operador inválido")

# 02 - ultilizando if/else simular a operação de calculadora
# deverá receber 2 números e um operador
# se o operador for + (somar), - (subtrair), * (multiplicar) e / (dividir)
# e você terá que imprimir o resultado
# você deverá validar se o divisor é igual a zero, se sim, colocar mensagem

# numero1 = float(input('Digite um número: '))
# numero2 = float(input('Digite outro número: '))

# operador = input('Digite uma operação, +, -, * e /: ')
# if operador == "+":
#     soma = numero1 + numero2
#     print('a soma do numero é', soma)

# elif operador == "-":
#     subtraçao = numero1 - numero2 
#     print("A subtração do número é :", subtraçao)

# elif operador == '*' :
#     multiplicaçao = numero1 * numero2
#     print('a multiplicaçao do número é: ', multiplicaçao)

# elif operador == "/":
#     if numero2 == 0:
#         print("Divisão por zero não é possível")

#     else:    
#         divisão = numero1 / numero2
#         print("A divisão do número é: ", divisão)

# else:
#     print("operador inválido")

# 03 - Receba as notas dos 4 bimestres de um aluno, calcule a média
#  informe se ele esta aprovado (média >= 6),
#  em recuperação (média >= 3 e média < 6)
#  ou reprovado (média < 3) 

Aluno = input('Qual seu nome: ')
nota1 = float(input('Digite a sua nota 1: '))
nota2 = float(input('Digite a sua nota 2: '))
nota3 = float(input('Digite a sua nota 3: '))
nota4 = float(input('Digite a sua nota 4: '))

média = (nota1 + nota2 + nota3 + nota4) /4

if média >= 6:
    print(Aluno,'você está aprovado!!')

elif média >= 3 and média < 6:
    print(Aluno,"você está em recuperaçã!")

else: 
    print(Aluno,'você está reprovado!')



