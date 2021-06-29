import React from 'react';
import './styles/Home.css';
import './styles/HomeResponsive.css';
import HomeMobile from '../assets/images/Mobile.png';
import HomeForm from '../components/HomeForm';
import FooterInicio from '../components/FooterInicio';


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
                <HomeForm/>
                <FooterInicio />
            </section>
        </div>
        );
    }
}



export default Home;