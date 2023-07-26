import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPhp,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { descricao:"É usado para criar interfaces de usuário (UI) em aplicativos web.",id: "react", name: "React", icon: <DiReact />},
  { descricao:"Permite a execução da linguagem JavaScript fora do navegador. ", id: "node", name: "Node+Js", icon: <DiNodejsSmall />},
  { descricao:"É uma linguagem de script do tipo server-side com diversos propósitos.", id: "php", name: "Php", icon: <DiPhp />}, 
  { descricao:"É um sistema open-source de gerenciamento de base de dados relacional.", id: "mysql", name: "MySQL", icon: <DiMysql />},
  { descricao:"É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.", id: "js", name: "JavaScript", icon: <DiJsBadge />},
  { descricao:"Ela define formatos e padrões estéticos dentro de uma página da web em um arquivo de códigos separado do HTML e/ou do JavaScript.", id: "css", name: "CSS3", icon: <DiCss3 />},
  { descricao:"Serve para o desenvolvimento de páginas que contenham conteúdos simples, como textos, imagens, áudio, vídeos e etc.", id: "html", name: "HTML5", icon: <DiHtml5 />},
  ]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>
                {tech.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default TechnologiesContainer