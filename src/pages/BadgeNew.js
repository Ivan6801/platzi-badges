import React from 'react';

import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg'

class BadgeNew extends React.Component {
    render() {
        return (
        <div>
            <Navbar />
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo"/>
            </div>
            <div className="container"> 
              <div className="row">
                  <div className="col">
                      <Badge 
                      firstName="Ivan"
                      lastName="Gonzalez"
                      twitter="ivan6801"
                      jobTitle="Frontend Developer"
                      avatarUrl="https://static.platzi.com/media/avatars/avatars/Ivan6801_8776d9f6-e446-45d0-a597-47df7d3c0df0.JPG"
                      />
                  </div>
              </div>
            </div>

        </div>
        );
    }
}

export default BadgeNew;