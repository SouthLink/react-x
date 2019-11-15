import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'antd';

class sysManagePage extends PureComponent {
    constructor() {

    }

    render() {
        return (
            <div>
                <div>这是系统设置页面</div>
                <Button>提交</Button>
            </div>
        )
    }
}