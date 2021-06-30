import React from 'react'
import './styles/Registro.css';
import './styles/RegistroResponsive.css';

class Registro extends React.Component {
    render() {
        return (
            <div className="Registro__container">
             <div className="Registro">
                 <h2 className="text-center">Registrarte</h2>
                 <p>Es rápido y fácil.</p>
                 <hr></hr>
                <form action="">
                    <div className="form-row">
                    <div className="row g-3">
                       <section className="Registro__input">
                        <div className="form-group col-12 col-md-6">
                            <input type="text" className="form-control Registro-control" placeholder="Nombre" />
                        </div>
                        <br></br>
                        <div className="form-group col-12 col-md-6">
                            <input type="text" className="form-control Registro-control" placeholder="Apellido"  />
                        </div>
                        <br></br>
                       </section> 
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <input type="text" className="form-control Registro-control" placeholder="Apellido"  />
                        </div>
                        <button button type="submit" className="btn btn-info">Registrarte</button>
                    </div>
                    </div>
                </form>
               </div>
            </div>
        );
    }
}

export default Registro;