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

    this.handleChange = this.handleChange.bind(this);
  }

  // Handle Changes

  handleChange({ target }) {
    const { name, type } = target
    const value = type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }
  


  render() {

    const { user, password, remember, keepconected } = this.state;

    return (
      <section className='form-section'>

        <form className='form'>

          <div className='div-inputs'>

            <label>
              <input
                name='user'
                value={user}
                onChange={this.handleChange}
                id='input-username'
                type='text'
                placeholder='Username: '
              />
            </label>

            <label>
              <input
                name='password'
                value={password}
                onChange={this.handleChange}
                id='input-password'
                type='password'
                placeholder='Password: '
              />
            </label>

          </div>

          <div className='div-inputs-check'>

            <label>
              <input
                name='remember'
                value={remember}
                onChange={this.handleChange}
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
