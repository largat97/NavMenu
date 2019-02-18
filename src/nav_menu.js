import React, { Component } from 'react';
import './nav-menu.css';

const Navitem = [
        {
            
            Btn:'Home',
            SubMenu:[''],
            
                
        },
        { 
            Btn:'Services',
            SubMenuEtat:true,
            SubMenu:['Sub1','Sub2','Sub3'],
               
        },
        { 
            Btn:'Contact',
            SubMenu:[''],
               
        },

    ]

    
function Submenu (props){
 var e=props.SubMenuEtat;
 var s=props.SubMenu;
    if (e==true){
                return (
                <div className="dropdown-content">
                {s.map((el) =>
                    <a href="#">{el}</a>
                    )}
                </div>
                
                )
                }
    else return false ;
}

class Navmenu extends Component {
  render() {
    return (  <section >
        {Navitem.map((el) =>
                <div className="dropdown">
                    <button className="dropbtn">{el.Btn}</button>
                    <Submenu SubMenuEtat={el.SubMenuEtat} SubMenu={el.SubMenu}/>
                </div>
        )}
        
  </section>
        );
  }
}

export default Navmenu;