import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const [loginFormValues, handleLoginInputChange] = useForm({
        loginEmail:'email@me.com',
        loginPassword: 'yt112'
    });

    const { loginEmail, loginPassword} = loginFormValues;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // TO DO: should validate input values in frontend, for testing purposes we are not doing right now

        dispatch(startLogin(loginEmail, loginPassword));

    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                name="loginEmail"
                                onChange={handleLoginInputChange}
                                placeholder="Correo"
                                value={loginEmail}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="loginPassword"
                                onChange={handleLoginInputChange}
                                placeholder="Contraseña"
                                value={loginPassword}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}