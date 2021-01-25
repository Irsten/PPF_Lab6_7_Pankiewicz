import React, {Component} from 'react'
import './COuter.css'
import ReactPlayer from 'react-player'

export default class COuter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            st: "Początek"
        }
        console.log('COuter - konstruktor');
    }
    start() {
        alert('Filmik włączony')
    }
    stop() {
        alert('Filmik zatrzymany')
    }
    bufferingProgress() {
        console.log('Filmik się bufforuje')
    }
    nameReset() {
        alert('Imie zostało zresetowane')
    }
    paste() {
        alert('Wkleiłeś tekst')
    }

    render () {
        console.log("COuter - render()")
        return (
            <div className="reactPlayer">
                <div className="film">
                    <ReactPlayer className='Player' url='https://www.youtube.com/watch?v=p4ohqiVbXbo' 
                    onProgress={()=>this.bufferingProgress()} 
                    onPlay={()=>this.start()} 
                    onPause={()=>this.stop()}
                    width='100%' height='100%'/>
                    <form className="imie" onPaste={()=>this.paste()} onReset={()=>this.nameReset()}>
                        Podaj imię swojego psa: <input type="text"/>
                        <input type="reset" />
                    </form>
                </div>
            </div>
        )
    }
}