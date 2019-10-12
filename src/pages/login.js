import React, { Component } from 'react';
import { message, Button, Form, Input, Icon, Row, Col } from 'antd';
import { browserHistory } from 'react-router';
import loginBg from '../assets/login-bg.jpg';
import '../style/login.less'

const FormItem = Form.Item

// @Form.create({
//   onFieldsChange(props, items) {},
// })

class Login extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      loginBg: loginBg,
      loginName: '',
      password: '',
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  submit(e) {
    e.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const query = this.props.form.getFieldsValue();
        console.log(query)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login">
        <div className="login-bg">
          <img src={this.state.loginBg}/>
        </div>
        <div className="login-container">
          <h1>固收管理平台</h1>
          <div className="login-centen">
            <Row>
              <Col span={2}></Col>
              <Col span={20}>
                <Form onSubmit={e => this.submit(e)}>
                  <FormItem hasFeedback className="login-form-tem">
                    {
                      getFieldDecorator('username', {
                        rules:[
                          { require:true, min:4, max:10, message: '用户名为4-10个字符' },
                          { pattern: /^[0-9A-Za-z]{4,10}$/, message: '账号为4-10个数组或字符组成'}
                        ]
                      })(<Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" type="text" />)
                    }
                  </FormItem>
                  <FormItem hasFeedback className="login-form-tem">
                    {
                      getFieldDecorator('password', {
                        rules:[
                          { require:true, min:6, max:16, message: '密码为6-16个字符' },
                          { pattern: /^[0-9A-Za-z]{6,16}$/, message: '密码为6-16个数组或字符组成'}
                        ]
                      })(<Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password" />)
                    }
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" className="sign">登录</Button>
                  </FormItem>
                </Form>
              </Col>
              <Col span={2}></Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login);