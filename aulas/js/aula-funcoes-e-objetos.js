            // var var1 = "pouco utilizado" // var pode ser redeclarada e gerar problemas
            // let var2 = "muito utilizado" // let não pode ser redeclarada
            // var2 = "outro valor"
            const nome = "Renan" // const não pode ser redeclarada e nem ter seu valor alterado
            
            var titulo = "teste"

            let titulo = 'oi'

            titulo = "ola"

            const sobreNome = "Cavichi"
            //const nomeCompleto = nome + " " + sobreNome // concatenar

            const campoEscolhido = 'altura'

            function nomeCompleto(nome, sobreNome) {   
                return `${nome} ${sobreNome}`
            }

            const nCompleto = function (nome, sobreNome){
                return `${nome} ${sobreNome}`
            }

            const nmCompleto = (nome, sobreNome) => {
                return `${nome} ${sobreNome}`
            }

            const user = { // objeto
                nome: "Paulo",
                sobreNome: "da Silva",
                email: "paulo@gmail.com",
                altura: 1.75,
                id: 10,
                'Nome Completo': 'Paulo da Silva',
                idAdmins: [4, 20, 30, 33],
                endereco: {
                    rua: "Rua dos Bobos",
                    numero: 0
                },
                nomeCompleto: (nome, sobreNome) => {
                    return `${nome} ${sobreNome}`
                },
                nCompleto: nomeCompleto
            }

            const idAdmins = [1, 5, 10, 80, {rua: 'Dos Bodos', numero: 0}, user]

            console.log(`Olá ${user.nomeCompleto(user.nome, user.sobreNome)}, seja bem-vindo! ${idAdmins[4].numero}`)