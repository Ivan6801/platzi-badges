import React from 'react';
import ReactDom from 'react-dom';
import './styles/Home.css';
import './styles/HomeResponsive.css';
import HomeMobile from '../assets/images/Mobile.png';
import TopLogo from '../assets/images/Logo.png';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons//instagram.svg';


class Home extends React.Component {
    render() {
        return (
        <div className="Home__container">
            <section>
                <div className="Home__left">
                    <figure className="figure">
                        <img className="Home__images" src={HomeMobile} alt="" />
                    </figure>
                </div>
            </section>
            <section>
                <div className="Home__right">
                    <figure className="figure-right">
                        <img src={TopLogo} width="100" alt="" />
                    </figure>
                    <form method="post" action="">
                        <input className="form-control" type="text" name="" placeholder="Tu nombre de usuario" />
                        <br></br>
                        <input className="form-control" type="password" password="" placeholder="Tu contraseña" />
                        <br></br>
                        <center>
                            <button type="button" class="btn btn-info">Entrar</button>
                        </center>
                        <br></br>
                        <p className="text-center">No tienes una cuenta? <a href="" target="_blank">Registrate</a> </p>
                        <br></br>
                        <div className="Home__social_bottom">
                            <div>
                                <figure>
                                    <img src={facebook} width="30" alt="Facebook" />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src={instagram} width="30" alt="Instagram" />
                                </figure>
                            </div>
                        </div>
                        <center>
                            <small className="Home__footer">Web hecha por WSL</small>
                        </center>
                    </form>
                </div>
            </section>
        </div>
        );
    }
}

export default Home;