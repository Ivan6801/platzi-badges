import React from 'react'
import { Link } from 'react-router-dom';
import TopLogo from '../assets/images/Logo.png';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons//instagram.svg';

class HomeForm extends React.Component {
    state = {
        userName: '',
        passwordName: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleClick = e => {
        console.log('Se hizo clic en el botón');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Se envió el formulario');
        console.log(this.state);
    };

    render(){
        return (
        <div className="Home__right">
            <figure className="figure-right">
                <img src={TopLogo} width="100" alt="" />
            </figure>
            <form onSubmit={this.handleSubmit}>
                <input 
                    className="form-control" 
                    onChange={this.handleChange}
                    type="text" 
                    name="userName" 
                    placeholder="Tu nombre de usuario"
                    value={this.state.userName}
                />
                <br></br>
                <input 
                    className="form-control" 
                    onChange={this.handleChange}
                    type="password" 
                    name="passwordName" 
                    placeholder="Tu contraseña" 
                    value={this.state.passwordName}
                />
                <br></br>
                <center>
                    <button onClick={this.handleClick} type="submit" className="btn btn-info">Entrar</button>
                </center>
            </form>
            <br></br>
                <p className="text-center wsl-text">No tienes una cuenta? 
                    <Link to="/registro">
                        Registrate
                    </Link> 
                </p>
                <br></br>
                <div className="Home__social_bottom">
                    <div>
                        <figure>
                            <Link to="/">
                                <img src={facebook} width="30" alt="Facebook" />
                            </Link>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <Link to="/">
                                <img src={instagram} width="30" alt="Instagram" />
                            </Link>
                        </figure>
                    </div>
                </div>
        </div>

        );
    }
}

export default HomeForm;