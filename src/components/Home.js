/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import jsonData from "../res/text.json";
import "./Home.css";


export default class Home extends Component {
    constructor() {
        super()
        this.state = {msg: 'Witaj na mojej stronie. Kliknij w przycisk'}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        const imgContext = require.context('../res/', false,/\.jpg$/);
        let img = {};
        this.imgs = imgContext.keys().reduce((icons,file) => {
            const cname = imgContext(file).default;
            const label = file.slice(2,-4);
            img[label] = cname;
            return img;
        }, {});
    }

    changeMsg() {
        this.setState({msg: 'Udało ci się kliknąć w przycisk'});
        console.log('Przycisk został wciśnięty');
    }
    changeDbClick() {
        console.log('Podwójne kliknięcie')
        this.setState({msg: 'Podwójne kliknięcie zaliczone!'})
    }
    mouseOver() {
        console.log('Trafiłeś na pieska')
    }
    lostDog() {
        console.log('Zgubiłeś pieska')
    }
    copyText() {
        console.log('Tekst został skopiowany')
    }


    render() {
        const tabData = this.txtData().data;
        const items = tabData.map((item) => (
            <div id={'"div${item.id}"'} className="contentsFlex">
                <img onMouseOver={()=>this.mouseOver()} onMouseOut={()=>this.lostDog()} className="contentsFlexImg" src={this.imgs[item.img]} alt=""/>
                <p onCopy={()=>this.copyText()} className="contentsFlexTxt">{item.text}</p>
            </div>
        ))
        return (
                <div className='contentDivClass'>
                    {items}
                    <h2 onDoubleClick={()=> this.changeDbClick()}>Kliknij we mnie dwa razy</h2>
                    <h1>{this.state.msg}</h1>
                    <button onClick={()=> this.changeMsg()}>Kliknij, aby poznać tajemnicę</button>
                    
                </div>
        )
    }
}