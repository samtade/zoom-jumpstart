/* eslint-disable no-restricted-globals */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './home.scss';


import Background from 'images/background_image.png'



import App_Img from 'images/app_image.png'


  interface HomeProps extends RouteComponentProps {
  status: string;
}
const Home: React.FunctionComponent<HomeProps> = (props) => {
  const { history, status } = props;
  const onCardClick = (type: string) => {
    history.push(`/${type}${location.search}`);
  };
  const featureList = [
    {
      key: 'video',
      icon: 'fas fa-video',
      title: 'Start a Meeting',
      description:
        'Gallery Layout, Start/Stop Audio, Mute/Unmute, Start/Stop Video, Start/Stop Screen Share',
    },
    
  {
    key: 'chat',
    icon: 'fas fa-comment-alt',
    title: 'Start a chat',
    description: 'Session Chat, Chat Priviledge',
  },
    
  ];
let actionText;
if (status === "connected") {
  actionText = "Leave";
} else if (status === "closed") {
  actionText = "Join";
}
return (
    <div
      className="main" 
          
  style={ { backgroundImage: `url(${Background})` } }
          
      >
      <div className="topnav">
        <a href="/" className="" id="logo">
          
        </a>
        <div className="links">
          
        </div>
      </div>

      <div className="Home-Content-Container">
        
        <img id="logo" src={App_Img} />
        
        <div className="home">
          <h1>CorrectHealth</h1> 
          <div className="description">
            <a>Telemedicine</a> 
          </div>
          <div className="feature-entry">
            {featureList.map((feature) => {
            const { key, icon, title } = feature; 

              return (
                <div>
                  <button 
                    onClick={() => onCardClick(key)}
                     
                  >
                    <div className={ "button-contents"}>
                      <i className={icon}></i>
                      <span>{title}</span>
                    </div>
                  </button>
                </div>
            );
          })}
          </div>
        </div>
      </div >
    </div >
  );
};
export default Home;
