import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../UI/Input/Input';
import  { withRouter } from 'react-router-dom';

import './Auth.scss';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            errorEmail: '',
            errorPassword: '',
            isSubmiting: false,
            mode: 'signin'
        }

    }

    onChangEmail = event => {
        const { value } = event.target;
        this.setState({
            email: value,
            errorEmail: ''
        } )
    }

    onChangePassword = event => {
        const { value } = event.target;
        this.setState({
            password: value,
            errorPassword: false
        })
    }

    submit(event){
        event.preventDefault();

        const { history } = this.props;
        
        const { email, password, mode } = this.state;
        
        if (this.isFormValid() === true ) {
            console.log(mode);
                let baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='

                if (mode === 'signin') {
                    baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
                }

                const apiKey = 'AIzaSyBhQtg20izEFrHgqbHragW9ZVpZsQSm0xA'

                const options = {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
                };

                fetch(baseUrl + apiKey, options )
                .then(res => res.json())
                .then(result => {
                    console.log('[result]', result)
                    
                    this.setState({ 
                        isSubmiting: true,
                        email: '',
                        password: '',
                        errorEmail: '',
                        errorPassword: ''
                    })
                })
                // .then(() => history.push('/'))
                .catch(err => console.log('[err]', err))
        }
   }

   isFormValid(){
       let emailValid = false;
       let passwordValid = false;

       if (this.isEmailValid(this.state.email) === true) {
        emailValid = true;
       } 

       if (this.isPasswordValid(this.state.password) === true) {
        passwordValid = true;
       }

       if ((emailValid === true) && (passwordValid === true)) {
           return true
       }
   }

   isEmailValid(email){
       let errorEmail = '';

       if (email === '') {
            errorEmail = 'Введите email';
           this.setState({ errorEmail : errorEmail });
           return false;
       }

    //    if (!email.match(/(?=^[A-Za-z]).*$/)) {
        if (!email.match(/^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,3}$/)) {
            errorEmail = 'ошибка для email';
           this.setState({ errorEmail : errorEmail });
           return false;
       }
       else { 
           return true };
   }

   isPasswordValid(password){
       let errorPassword = '';

       if (password === '') {
           errorPassword = 'Введите пароль';
           this.setState({ errorPassword: errorPassword });
           return false;
       }

    //    if ((!password.match(/(?=[A-Za-z0-9]{10,}$)(?=.*[A-Z])(?=.*[0-9]).*$/))) { 
       if (!password) { 
           errorPassword = 'Пароль должен быть минимум 10 символов, иметь 1 заглавную букву и 1 цифру';
           this.setState({ errorPassword: errorPassword });
           return false;
       }
       else { 
           
        return true };
   }

    swithModeHandler = () => {
        this.setState(prevState => ({
            mode: prevState.mode === 'signup' ? 'signin' : 'signup'
        }));
    }

        render() {
            const { errorEmail, errorPassword, mode } = this.state;
            console.log('[mode]', mode);
            return (
            <div className="Auth">
                <form>
                    <h2>{ mode === 'signup' ? 'Sign Up' : 'Sign In' }</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            <Input className="Input form-control"
                                onChange={this.onChangEmail.bind(this)}
                                value={this.state.email}
                                type='email'
                                id='exampleInputEmail1'
                                placeholder='Enter email'
                            >
                            </Input>  
                            { errorEmail && <span className='ErrorMessege'>{errorEmail}</span>} 

                        </label> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            <Input className="Input form-control"
                                onChange={this.onChangePassword.bind(this)}
                                value={this.state.password}
                                type='password'
                                id='exampleInputPassword1'
                                placeholder='Password'
                            >
                            </Input>    
                            { errorPassword && <span className='ErrorMessege'>{errorPassword}</span>} 
                    </label>  
                    </div>

                    <button type='submit' className='btn btn-primary' onClick={this.submit.bind(this)}>{mode === 'signup' ? 'signup' : 'signin' }</button>   

                     <span
                        className="ModeToggler"
                        onClick={this.swithModeHandler}>
                        Switch to { mode === 'signup' ? 'Sign In' : 'Sign Up' }
                    </span>

                </form>  
            </div>
        );
    }
}

Auth.propTypes = {
    onChange: PropTypes.func,
};

export default withRouter(Auth);

// <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>