import user from "./Profile/user.json" 
import statisticsData from "./Statistics/data.json"

import {Profile}  from "./Profile/Profile";
import {Statistics} from './Statistics/Statistics';

import appCss from './App.module.css'



export const App = () => {
  return<div className={appCss.conteiner}>
  <Profile        
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes} 
  />

  <Statistics 
    titel="Upload stats"
    data={statisticsData}
  />

</div> 
};
