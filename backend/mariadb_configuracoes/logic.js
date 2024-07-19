import fs from "node:fs"

const horarios_disp = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 ];
const salas_disp = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const tipo_audio_disp = ['Legendado', 'Dublado'];
const tipo_formato_disp = ['2D', '3D'];

const numAleatorio = (max) => (Math.random() * max).toFixed(0);

const horarioAleatorio = (arr) => arr[numAleatorio(12)];
const salaAleatoria = (arr) => arr[numAleatorio(9)];
const audioAleatorio = (arr) => arr[numAleatorio(1)];
const formatoExibAleatorio = (arr) => arr[numAleatorio(1)];

const validaRepetidoMicro = (arr) => {
  let newArr = []
  let visto = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (!visto.has(JSON.stringify(arr[i]))) {
      visto.add(JSON.stringify(arr[i]));
      newArr.push(arr[i]);
    } 
  }
  
  return newArr
}

const validaHorarioMicro = (sessoes, salas) => {
  
  for (let i = 0; i < salas.length; i++) {
    const salaArr = sessoes.filter((data) => data.sala === salas[i]);

    if (salaArr.length > 1) {

      const arrayDeHorariosPorSala = salaArr.map((item) => item.horario);
      const arrayDeSubtracao = [...arrayDeHorariosPorSala]
      arrayDeSubtracao.splice(arrayDeHorariosPorSala.length-1, 1)

      for (let j = 0; j < arrayDeSubtracao.length; j++) {

        const arrayDiferenca = arrayDeHorariosPorSala.map((item) => item - arrayDeSubtracao[j]);

        if (arrayDiferenca.includes(1) || arrayDiferenca.includes(-1)) {

          const indexParaRemover = arrayDiferenca.findIndex((item) => Math.abs(item) === 1 );
          arrayDeSubtracao.splice(indexParaRemover, 1)

          const removerSessao = sessoes.findIndex((item) => ((item.sala === salas[i]) && (item.horario === arrayDeHorariosPorSala[indexParaRemover])));
          sessoes.splice(removerSessao, 1)
        }
      }
    }
  }

  const sessoesFiltradas = [...sessoes]
  return sessoesFiltradas
}

const validaRepetidoMacro = (listaDeArr) => {
  // Pressupõe-se que se trate do mesmo dia.

  const indicesDeTrocaDeFilme = [];
  const filmesSeparados = [];
  let anterior = 0;

  // Separa indices em que o filme é diferente.

  for (let i = 0; i < listaDeArr.length; i++) {
    if (i > 0) {
      if ( listaDeArr[i].filme !== listaDeArr[i-1].filme ) {
        indicesDeTrocaDeFilme.push(i);
      }
    }
  }

  // Adiciona sessoes em um array agrupado por filme.

  for (let i = 0; i <= indicesDeTrocaDeFilme.length; i++) {
    if (i === indicesDeTrocaDeFilme.length) {
      filmesSeparados.push(listaDeArr.slice(anterior));
    } else {
      filmesSeparados.push(listaDeArr.slice(anterior, indicesDeTrocaDeFilme[i]));
      anterior = indicesDeTrocaDeFilme[i];
    }
  }

  // horarios das sessões de cada filme agrupados por sala.

  for (let i = 1; i <= 10; i++) {

    const indicesPorHorarioPorSala = [];
    const sessoesPorSala = [];
    const horariosPorSala = [];
    const listaDeHorariosProblematicos = [];


    const NumeroDeSessoes = [];
    let filmeComMaiorNumeroDeSessoes
    let indiceDoFilmeComMaiorNumeroSessoes

    for (let k = 0; k <= filmesSeparados.length - 1; k++) {
      sessoesPorSala.push(filmesSeparados[k].filter((sessao) => sessao.sala === i))
    }

    for (let j = 0; j <= sessoesPorSala.length - 1; j++) {
      if ((sessoesPorSala[j].map((item) => item.horario).length > 0 )) {
        indicesPorHorarioPorSala.push(j)
        horariosPorSala.push(sessoesPorSala[j].map((item) => item.horario))
      } else continue
    }

    if (horariosPorSala.length > 1) {

      for (let t = 10; t <= 22; t++) {
        const horariosRepetidos = [];
        for (let horarios of horariosPorSala) {
          if (horarios.includes(t)) {
            horariosRepetidos.push(t)
          }
        }
        if (horariosRepetidos.length > 1) {
          listaDeHorariosProblematicos.push(horariosRepetidos[0])
        }
      }

      for (let x of indicesPorHorarioPorSala) {
        NumeroDeSessoes.push(filmesSeparados[x].length);
      }

      for (let x of listaDeHorariosProblematicos) {
        indiceDoFilmeComMaiorNumeroSessoes = indicesPorHorarioPorSala[NumeroDeSessoes.findIndex((item) => item === Math.max(...NumeroDeSessoes))];
        for (let index = 0; index < listaDeArr.length; index++) {
          if (listaDeArr[index].filme === filmesSeparados[indiceDoFilmeComMaiorNumeroSessoes][0].filme && listaDeArr[index].horario === x && listaDeArr[index].sala === i ) {
            listaDeArr.splice(index, 1)
          }
        }
      }
    }
  }

  return listaDeArr
}

// const sessoesFiltradas = validaHorarioMicro(arrayDeTeste, salas_disp);
// console.log(validaRepetidoMicro(sessoesFiltradas))



const geraSessao = (filme, cinema,  dia) => {
    
    const nSessoes = numAleatorio(10);
    const listaSessoes = [];

    for (let i = 0; i < nSessoes; i++) {

        const sala = salaAleatoria(salas_disp);
        const horario = horarioAleatorio(horarios_disp);
        const audio = audioAleatorio(tipo_audio_disp);
        const formato_exibicao = formatoExibAleatorio(tipo_formato_disp);

        let obj = {
            filme : filme,
            cinema : cinema,
            tipo_audio : audio,
            formato_exibicao : formato_exibicao,
            sala : parseInt(sala),
            horario : horario,
            data : `${dia}/07/2024`
        }

        listaSessoes.push(obj)
      }
    
      return listaSessoes
}

// geraSessao("Deadpool e Wolverine", "Rio Mar", 10);

const listaArr = [...arrayDeTeste, ...arrayDeTeste2]

async function main () {
  let ddlString = 'INSERT INTO sessoes (filme_id, sala_id, cinema_id, tipo_audio, formato_exibicao, dia, horario) VALUES'
  const insert = [];
  const listaDeFilmes = [
    { titulo : "Divertida Mente 2",
      id : 1
    }, 
    { titulo : "Deadpool & Wolverine", 
      id : 2
    }, 
    { titulo : "A Grande Fuga", 
      id : 3
    }, 
    { titulo : "MaXXXine",
      id : 4
    }, 
    { titulo : "Testamento", 
      id : 5
    }, 
    { titulo : "Coraline 15º Aniversário",
      id : 6
    }, 
    { titulo : "Orlando, Minha Biografia Política",
      id : 7
    }, 
    { titulo : "Entrevista Com O Demônio", 
      id : 8
    }, 
    { titulo : "Blackpink World Tour [Born Pink] In Cinemas", 
      id : 9
    }, 
    { titulo : "Um Lugar Silencioso: Dia Um",
      id : 10
    }, 
    { titulo : "Tô De Graça - O Filme",
      id : 11
    }, 
    { titulo : "Bad Boys: Até O Fim",
      id : 12
    }, 
    { titulo : "Meu Malvado Favorito 4",
      id : 13
    }, 
    { titulo : "Clube Dos Vândalos",
      id : 14
    }, 
    { titulo : "Ainda Temos O Amanhã",
      id : 15
    }
  ];
  const listaDeCinemas = [
    { nome : "UCI Kinoplex Iguatemi",
      id : 1
    }, 
    { nome : "Cinépolis RioMar Fortaleza",  
      id : 2
    }, 
    { nome : "UCI Shopping Parangaba", 
      id : 3
    }, 
    { nome : "Kinoplex North Shopping",
      id : 4
    }, 
    { nome : "Cinépolis RioMar Kennedy",
      id : 5
    }, 
    { nome : "Centerplex Via Sul Shopping",
      id : 6
    }, 
    { nome : "Cinépolis North Shopping Jóquei",
      id : 7
    }, 
    { nome : "Cine Benfica", 
      id : 8
    }
  ];
  const listaDeDias = [13, 14, 15, 16, 17, 18, 19, 20];
  const listaDeSessoesGeradas = [];


  for (let j = 0; j < listaDeCinemas.length; j++) {
    for (let index = 0; index < listaDeFilmes.length; index++) {
      listaDeSessoesGeradas.push(geraSessao(listaDeFilmes[index].id, listaDeCinemas[j].id, '21'))
    }
  }

  const primeiroFiltro = validaRepetidoMicro(listaDeSessoesGeradas);
  const segundoFiltro = validaRepetidoMicro(primeiroFiltro, salas_disp);
  const terceiroFiltro = validaRepetidoMacro(segundoFiltro);
  
  for (let w = 0; w < terceiroFiltro.length; w++) {
    for (let p = 0; p < terceiroFiltro[w].length; p++) {
      if (w === terceiroFiltro.length - 1) {
        ddlString += ` (${terceiroFiltro[w][p].filme}, ${terceiroFiltro[w][p].sala}, ${terceiroFiltro[w][p].cinema}, "${terceiroFiltro[w][p].tipo_audio}", "${terceiroFiltro[w][p].formato_exibicao}", "${terceiroFiltro[w][p].data}", "${terceiroFiltro[w][p].horario}");` 
        break
      } else {
        ddlString += ` (${terceiroFiltro[w][p].filme}, ${terceiroFiltro[w][p].sala}, ${terceiroFiltro[w][p].cinema}, "${terceiroFiltro[w][p].tipo_audio}", "${terceiroFiltro[w][p].formato_exibicao}", "${terceiroFiltro[w][p].data}", "${terceiroFiltro[w][p].horario}"), ` 
      }
    }
 }

  fs.writeFile('./insertDDL.txt', ddlString, {}, () => console.log('Arquivo Criado'))

  // fs.writeFile('./insert.json', ddlString, {}, () => console.log("Arquivo criado"))
}

main()