import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {

    constructor() {
        super()
    
        this.state = {
            course_modules: [
                {id: 1, title: '1. Some title', description: 'description', active: false},
                {id: 1, title: '1. Some title', description: 'description', active: false},
                {id: 1, title: '1. Some title', description: 'description', active: false},
                {id: 1, title: '1. Some title', description: 'description', active: false}
            ]
             
        }
    }
  render() {
        return (
            <div>
                <Jumbotron/>
            </div>
        )
    }
}

export default Home
