import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'antd';

class sysManagePage extends PureComponent {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div>这是用户设置页面</div>
                <Button>提交</Button>
            </div>
        )
    }
}

export default sysManagePage;