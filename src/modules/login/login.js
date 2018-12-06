import React from 'react'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        login page
        <WingBlank>
          <Button>default</Button>
          <WhiteSpace />
          <Button type="primary">primary</Button>
        </WingBlank>
      </div>
    )
  }
}