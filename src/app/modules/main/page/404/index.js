import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'antd';

class Page404 extends PureComponent {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                这是404
            </div>
        )
    }
}

export default Page404;