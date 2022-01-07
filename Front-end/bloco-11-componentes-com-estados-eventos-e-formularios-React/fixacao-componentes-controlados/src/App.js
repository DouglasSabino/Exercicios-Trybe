import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: '',
      password: '',
      remember: '',
      keepconected: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
  }

  // Handle Submit
  handleSubmit(event) {
    event.target.preventDefault();
  }

  handleChangeUser(event) {
    this.setState({
      user: event.target.value
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleChangeCheckBox(event) {
    const resp = event.target.checked
    this.setState({
      remember: resp
    })
  }


  render() {

    const { user, password, remember } = this.state;

    return (
      <section className='form-section'>

        <form className='form'>

          <div className='div-inputs'>

            <label>
              <input
                value={user}
                onChange={this.handleChangeUser}
                id='input-username'
                type='text'
                placeholder='Username: '
              />
            </label>

            <label>
              <input
                value={password}
                onChange={this.handleChangePassword}
                id='input-password'
                type='password'
                placeholder='Password: '
              />
            </label>

          </div>

          <div className='div-inputs-check'>

            <label>
              <input
                value={remember}
                onChange={this.handleChangeCheckBox}
                type='checkbox'
              />
              {`Lembrar Usuario `}
            </label>

            <label>
              <input type='radio' />
              {`Manter Conectador`}
            </label>

          </div>

          <label>
            <select>
              <option value='servidores'> Servidores: </option>
              <option value='america-latina'> America Latina </option>
              <option value='america-norte'> America do Norte </option>
              <option value='asia'> Asia </option>
              <option value='oriente-medio'> Oriente Médio </option>
            </select>
          </label>

          <div className='div-button'>
            <button onChange={this.handleSubmit} type='submit'>Log in</button>
          </div>


        </form>
      </section>
    );

  }
}

export default App;
