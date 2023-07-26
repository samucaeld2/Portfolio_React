import SocialNetworks from './SocialNetworks';

import Avatar from '../img/perfil1.jpeg';

import '../styles/components/sidebar.sass';

import  InformationContainer from "./informationContainer"


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Samuel Abreu" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://www.canva.com/design/DAFRdaAlfrk/GhToAP8JrWHHYOvmbak6VQ/view?utm_content=DAFRdaAlfrk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" 
      className="btn">
        Download currículo
      </a>
    </aside>
  )
};

export default Sidebar