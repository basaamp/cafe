import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
     Home: 'flex',
     About: 'none'   
  };


    
  }
  render() {
    return (
      <div className="App">
	  
       <ul className = "navigationbar">
       <li onClick= {() => {this.setState(this.state.Home == "none" ? {About: 'none', Home: 'flex'} : {About: 'none',  Home: 'flex'})}}>Home</li>
        <li style= {{ flexDirection: 'row' }}>Gallery<li style= {{ fontSize: 10 }}>(coming Soon)</li></li>
         <li onClick= {() => {this.setState(this.state.About == "none" ? {About: 'flex', Home: 'none'} : {About: 'none',  Home: 'flex'})}}>About</li>
       </ul>
          {/*--<img src={logo} className="App-logo" alt="logo" /> */}
         <h1 style = {{ marginTop: 88 }}>Cafe</h1>
<div className = "Home" style={{display: this.state.Home}} >
<div className = "deals" style={{height: 60 + 'vh', justifyContent: 'flex-start', flexDirection: 'colmn', width: 100 + '%', backgroundColor: 'white'}}>
  <div className="Deal" style={{height: 74 + '%', flexDirection: 'row', alignItems: 'flex-start', backgroundColor: 'white' }}>
  <img style={{height: 100 + '%', width: 50 + '%'}} src={'http://images.indulgexpress.com/uploads/user/imagelibrary/2017/11/2/original/Cofeehouses.jpg'} className="App-logo" alt="logo" />
    <img style={{height: 100 + '%', width: 50 + '%'}} src={'http://images.indulgexpress.com/uploads/user/imagelibrary/2017/11/2/original/Cofeehouses.jpg'} className="App-logo" alt="logo" />
   </div>
   <div className="Deal" style = {{ height: 25 + '%',backgroundColor: 'white', width: 100 + '%' }}>
	   <h1 style={{fontSize: 32, margin: 0, }}>Friday Deal</h1>
	   <h1 style={{fontSize: 32, margin: 0}}>3 Samosa + 1 Cofee £2.30</h1>
          </div>	   
</div>
         
         <div className="menuitem">

         <div className="item" style={{ backgroundColor: 'white', width: 50 + '%' }}>
         <img src={'http://images.indulgexpress.com/uploads/user/imagelibrary/2017/11/2/original/Cofeehouses.jpg'} className="App-logo" alt="logo" />
         <h1>Cofee</h1>
         <h1>£1.00</h1>
         </div>

           <div className="item">
         <img src={'https://ik.imagekit.io/rotimatic/wp-content/uploads/2018/02/Samosa-@2x-1.jpg'} className="App-logo" alt="logo" />
         <h1>Cofee</h1>
         <h1>£1.00</h1>
         </div>


         </div>

          <div className="menuitem">

         <div className="item">
         <img src={'https://www.mysomalifood.com/wp-content/uploads/2009/06/halwa.jpg'} className="App-logo" alt="logo" />
         <h1>Cofee</h1>
         <h1>£1.00</h1>
         </div>

           <div className="item">
         <img src={'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/tagalong-milkshake.jpg?itok=tDI27dnP'} className="App-logo" alt="logo" />
         <h1>Cofee</h1>
         <h1>£1.00</h1>
         </div>
         </div>
    </div>

    <div className = "About" style={{display: this.state.About}} >
         <div className="menuitem h1"   style={{background: 'linear-gradient(53deg, #d27f2a, #c19840)', flexDirection: 'column',     alignItems: 'center'}}>
<h1>07777 077777</h1>
<h1>gmail@gmai.com</h1>
<h1>167 Northwood</h1>
<h1>northwood</h1>
<h1>london</h1>
<h1>ha6 666</h1>
         </div>
    </div>

    <div className = "socialbar" style={{position: 'relative', height: 88}}>

 </div>

<div className = "socialbar">
<img src={'https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg'}  alt="logo1" />
<img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADExMRLS0tYWFihoaGrq6sbGxvU1NTw8PBbW1ubm5uHh4fh4eH8/Py1tbWTk5M2NjbNzc1SUlJjY2N6enr29vZra2vGxsaWlpZGRkbd3d3n5+dvb2/Pz88+Pj6Li4sXkshzAAACSElEQVR4nO3bi07CQBRFUYcKllIFQXzi4/+/UkwkMcqMveUmdw7Z6wvODpHqdLy4AAAAAAAAAAAAAAAAAACcbv62fNo+dJumaTbd3eu2X02Xk3Z3H73LR7voUlYfve5k7TZfdw6Fs6tyX0of0RNPMvsvb28VPfIE7b+f35dF9Mzx+iF9KU2jd451fzssULZwN7AvpVn01HGGB6Zl9NZR5sMDRQsHfYl+m0SPHePOEChZuLQEpsfouXY3psC0jt5rN/BJf9BG7zWzfI9qFho/wvQSPdjMGJiuowdb2b5I93bRi6021sJ59GIj46NCsPDRXKh22vZRzun6xfRgsfe06m+iJxuVfgwv9R59RxQCRf/U/aXwRaN8pvbDdb4wepqTNhuofrR9kH9YKP6he0y+UO7Xz4xJtlDtwZ6TL4xe5oVCfRTqo1Afhfoo1EehPgr1Uagvf4oRvczL2RU+Z4OGa6Ijii4dCl+jI4o8CrfREUUehXUfhnsU1v3GxqOw7hu0HoV1v1b0KKz7fqlHYd0vpTwK676b6FFY9/UFj8K6b+55FNZ9r82jsO5bXx6Fdd+J8iiMbiijkMK9q+iGMofC2+iGMofCuo9pPAq76IYyh8KH6IYyh9PEuo/a/lpnS6KXeTn/9xYU6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGo7/wL1+/NcZX/yzYAAAAAAAAAAAAAAAAA1OkTmFEbxruZgmYAAAAASUVORK5CYII='} className="App-logo" alt="logo" />
 <img src={'https://images-eu.ssl-images-amazon.com/images/I/71VQR1WetdL.png'}  alt="logo1" />
<img src={'https://i.pinimg.com/280x280_RS/2a/7b/03/2a7b033cab1fb113735cdc2e1410bc48.jpg'} className="App-logo" alt="logo" />
<img src={'https://pbs.twimg.com/profile_images/1013436760859299847/aQltRN9T_400x400.jpg'}  alt="logo1" />
<img src={'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/1-snapchat.jpg'} className="App-logo" alt="logo" />
<img src={'https://www-cdn.whatsapp.net/img/v4/whatsapp-promo.png'}  alt="logo1" />
<img src={'https://9to5google.com/wp-content/uploads/sites/4/2016/09/google-plus-logo.jpg?quality=82&strip=all&w=1600'} className="App-logo" alt="logo" />

 </div>


      </div>
    );
  }
}

export default App;
