import React, {Component} from 'react'
import './COuter.css'


export default class CInner extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log('CInner - konstruktor');
    }

    static getDerivedStateFromProps(props,state) {
        console.log("CInner - getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("CInner - componentDidMount()")
    }

    render() {
        console.log("CInner - render()")
        return (
            <div>
                <h3 className='bgClassInner'>Komponent wewnętrzny</h3>
            </div>
        )
    }

    shouldComponentUpdate() {
        console.log("COuter - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(props,pstate) {
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
}