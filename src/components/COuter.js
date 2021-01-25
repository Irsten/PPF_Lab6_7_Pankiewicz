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

    // static getDerivedStateFromProps(props, state) {
    //     console.log("COuter - getDerivedStateFromProps()")
    //     return null
    // }

    // componentDidMount() {
    //     console.log("COuter - componentDidMount()")
    // }

    play() {
        alert('Filmik włączony')
    }
    bufferingProgress() {
        alert('Filmik się bufforuje')
    }
    nameReset() {
        alert('Imie zostało zresetowane')
    }

    render () {
        console.log("COuter - render()")
        return (
            <div className="reactPlayer">
                <div className="film">
                    <ReactPlayer className='Player' url='https://www.youtube.com/watch?v=p4ohqiVbXbo' onProgress={()=>this.bufferingProgress()} onPlay={()=>this.play()} width='100%' height='100%'/>
                    <form className="imie" onReset={()=>this.nameReset()}>
                        Podaj imię swojego psa: <input type="text"/>
                        <input type="reset" />
                    </form>
                </div>
            </div>
        )
    }

    // stateChange = () => {
    //     this.setState({st: "Klik"})
    // }

    // shouldComponentUpdate() {
    //     console.log("COuter - shouldComponentUpdate")
    //     return true
    // }

    // getSnapshotBeforeUpdate(props,pstate) {
    //     console.log("getSnapshotBeforeUpdate")
    //     return null
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate")
    // }
}