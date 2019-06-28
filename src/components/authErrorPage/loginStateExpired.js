import React, { Component } from 'react';
import './index.less'

export default class LoginStateExpired extends Component{

    render() {

        return (
            <div className="main-content-box-login-error">
                <div  className="card-wrap-error">
                            <div  className="login-error">
                                登录状态过期，请重新登录
                            </div>
                    <div className='forceColor-error' />
                </div>

            </div>
        )
    }
}
