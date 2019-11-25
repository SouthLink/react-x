import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this)
    }

    render() {
        return (
            <div>
                test 组件
            </div>
        )
    }
}

export default Test