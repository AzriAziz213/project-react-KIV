import React from 'react';
import logo from '../assets/logo.png';
import { onChange, validateRegistrationForm } from '../utils';

console.log(logo);

class RegisterComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: { name: 'email', value: '', required: true, error: ''},
      password: { name: 'password', value: '', required: true, error: ''},
      confirmPassword: { name: 'confirmPassword', value: '', required: true, error: ''},
    }
  }

  render() {
    const {email, password, confirmPassword} = this.state;
    return (
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-md-4 offset-md-4">
            <div className="text-center">
              <img src={logo} alt="Logo" height="150"/>
            </div>
            <form onSubmit={this.onSubmit} className="login-box bg-light br-3">
                <div className="row">
                  <div className="col-12">
                    <div className="p-3">
                      <h1 className="font-weight-bold">Sign Up</h1>
                      <p className="mb-0">Enter your credentials</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="px-3">
                      <div className="form-group">
                        <label> Email *</label>
                        <input
                          name={email.name}
                          value={email.value}
                          onChange={this.onChange}
                          className={email.error.length > 0 ? "form-control is-invalid":(email.value.length > 0 ? "form-control is-valid": "form-control")}
                          type = "email"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="form-group">
                        <label> Password *</label>
                        <input
                          name={password.name}
                          value={password.value}
                          onChange={this.onChange}
                          className={password.error.length > 0 ? "form-control is-invalid":(password.value.length > 0 ? "form-control is-valid": "form-control")}
                          type = "password"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div className="form-group">
                        <label> Confirm your password *</label>
                        <input
                          name={confirmPassword.name}
                          value={confirmPassword.value}
                          onChange={this.onChange}
                          className={confirmPassword.error.length > 0 ? "form-control is-invalid":(confirmPassword.value.length > 0 ? "form-control is-valid": "form-control")}
                          type = "password"
                          placeholder="Enter your password again"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="col-12">
                    <div className="p-3 text-center" >
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
            </form>
              <div className="row mt-3">
                <div className="col-6">
                    <a className= "text-light" href="/">Sign In</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }

  onChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    onChange(this, name, value);
  }

  onSubmit = (e:any) => {
    e.preventDefault();

    if (validateRegistrationForm(this)) {
      const { email, password, confirmPassword } = this.state;
      const model = {
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }
      
      console.log(model);
    }
  }
}

export default RegisterComponent;
