import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { href:"https://www.linkedin.com/in/samuel-abreu-rodrigues-58348a283/",name: "linkedin", icon: <FaLinkedinIn /> },
    { href:"https://github.com/samucaeld2",name: "github", icon: <FaGithub /> },
    { href:"https://www.instagram.com/sam_abreu0.1/",name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.href} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
            
        ))}
    </section>
  )
}

export default SocialNetworks   