import React from 'react'
import { Button } from 'antd'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        login page
        <p>  
          <Button>default</Button>
        </p>
        <p>
          <Button type="primary">primary</Button>
        </p>
      </div>
    )
  }
}