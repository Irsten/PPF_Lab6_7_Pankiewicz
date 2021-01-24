/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import jsonData from "../res/text.json";
import "./Home.css";


export default class Home extends Component {
    constructor() {
        super()
        this.state = {msg: 'Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość'
    }
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
        this.setState({msg: 'Właśnie jesteś uczestnikiem kursu React, gratulacje!'});
        console.log('Przycisk został wciśnięty');
    }

    render() {
        const tabData = this.txtData().data;
        const items = tabData.map((item) => (
            <div id={'"div${item.id}"'} className="contentsFlex">
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt=""/>
                <p className="contentsFlexTxt">{item.text}</p>
            </div>
        ))
        return (
            <div className='contentDivClass'>
                {items}
                <h1>{this.state.msg}</h1>
                <button onClick={()=> this.changeMsg()}>Kliknij, aby poznać tajemnicę</button>
            </div>
            
        )
    }
}