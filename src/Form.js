import React from 'react';
import validator from 'validator';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: {
                value : '',
                isvalid: false
            },
            password: {
                value: '',
                errorMsg: ''
            }
        };

        this.ref = React.createRef();
        this.passref= React.createRef();
    
    }

    componentDidMount() {
        this.passref.current.focus();
    }

    handleEmail = (e) => {
        const isValid = validator.isEmail(e.target.value);
        this.setState({
            email: {
                value: e.target.value,
                isvalid: isValid
            }
        });
    }

    handlePassword = (e) => {
        const isValid = validator.isLength(e.target.value,8);
        if(isValid) {
            this.setState({
                password: {
                    errorMsg: '',
                    value: e.target.value
                }
            });
        } else {
            this.setState({
                password: {
                    errorMsg : 'Please enter password min length 8',
                    value: e.target.value
                }
            });
        }

        console.log(this.state);
        
    }

    handleForm = (e) => {
        e.preventDefault();
        e.persist();
        console.log(e);
    }

    render() {
        return(
            <form onSubmit={this.handleForm}>
                <input ref={this.ref} type="text" placeholder="Email" value={this.state.email.value} onChange={this.handleEmail}/>
                {!this.state.email.isvalid && <p>Please enter valid email address</p>}
                <input ref={this.passref} type="text" placeholder="password" value={this.state.password.value} onChange={this.handlePassword}/>
                <p>{this.state.password.errorMsg}</p>
                <button>Login</button>
            </form>

        )
    }
}

export default Form;