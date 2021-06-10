import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section>
      <html lang="pt-br" />

      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>

        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" />
      </head>

      <body>
        <header>
          <div class="faixa1">
            <h1 class="logo">Guilherme Vargas</h1>
            <ul class="redes-sociais">
              <li><a href="https://www.linkedin.com/in/guivargas95/" target="_blank" rel="external"><img
                src="/linkedin.png"></img></a></li>
              <li><a href="https://github.com/guivargas95" target="_blank" rel="external"><img src="/github.png"
                alt="Ícone Github" /></a></li>
              <li><a href="https://www.facebook.com/guilherme.vargas.52" target="_blank" rel="external"><img
                src="/fb-2.png" alt="Ícone Facebook" /></a></li>
              <li><a href="https://www.instagram.com/guii.vargas/" target="_blank" rel="external"><img
                src="/instagram.png" alt="Ícone Instagram" /></a></li>
            </ul>
          </div>
          <div class="faixa2">
            <nav>
              <ul>
                <li>Início</li>
                <li>Contato</li>
              </ul>
            </nav>
          </div>
        </header>

        <div class="banner">
        <div class="habilidades container">
            <div>
                <img src="/cube1.png" alt=""/>
                <h1>Orientação a objetos</h1>
                <p>Códigos organizados e estruturados</p>
            </div>
            <div>
                <img src="/cube2.png" alt=""/>
                <h1>Banco de dados</h1>
                <p>Eficiência e segurança com manipulação de dados</p>
            </div>
            <div>
                <img src="/cube1.png" alt=""/>
                <h1>Criação de sites</h1>
                <p>Sites elegantes com foco em design e experiência do usuário</p>
            </div>
            <div>
                <img src="/cube2.png" alt=""/>
                <h1>Recursos javascript</h1>
                <p>Conteúdos animados e interessantes</p>
            </div>
        </div>
    </div>
    <main>
        <div class="main-container">
            <div class="faixa-row">
                <h1>Projetos</h1>
            </div>
            <div class="conteudo">
                <h2>Projeto 1</h2>
            </div>
            <div class="conteudo">
                <h2>Projeto 2</h2>
            </div>
            <div class="conteudo">
                <h2>Projeto 3</h2>
            </div>
            <div class="conteudo">
                <h2>Projeto 4</h2>
            </div>





        </div>
        <footer>
            <div>
                <p>© Copyright 2021-2024 Guilherme Vargas | Todos os direitos reservados.</p>
            </div>
        </footer>
    </main>



      </body>


    </section>
  )
}
