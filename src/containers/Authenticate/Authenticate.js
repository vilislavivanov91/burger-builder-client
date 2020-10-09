import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { login, register } from '../../actions/authActionCreator';

import './Authenticate.css';

const Register = (props) => {
  const [formControls, setFormControls] = useState({
    email: {
      inputType: 'input',
      value: '',
      label: 'Email',
      config: {
        type: 'text',
        placeholder: 'Email',
      },
      validation: {
        required: {
          minLength: 5,
          maxLength: 30,
        },
        valid: false,
        touched: false,
        errorMessage: 'Email must be between 5 and 30 symbols',
      },
    },
    password: {
      inputType: 'input',
      value: '',
      label: 'Password',
      config: {
        type: 'password',
        placeholder: 'Password',
      },
      validation: {
        required: {
          minLength: 5,
        },
        valid: false,
        touched: false,
        errorMessage: 'Password must be atleast 5 symbols',
      },
    },
    confirmPassword: {
      inputType: 'input',
      value: '',
      label: 'Confirm Password',
      config: {
        type: 'password',
        placeholder: 'Confirm Password',
      },
      validation: {
        required: {
          minLength: 5,
          equal: 'password',
        },
        valid: false,
        touched: false,
        errorMessage: 'Password must be atleast 5 symbols',
      },
    },
  });
  const [formValidity, setFormValidity] = useState(false);
  const [passwordError, setPaswordError] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  useEffect(() => {
    // check form validity when switching from register to login form
    setFormValidity(checkFormValidity(formControls));
  }, [isRegister, formControls]);

  const inputChange = (e, inputName) => {
    const inputValue = e.target.value;

    let isValid = true;
    const minLength = formControls[inputName].validation.required.minLength
      ? formControls[inputName].validation.required.minLength
      : null;
    const maxLength = formControls[inputName].validation.required.maxLength
      ? formControls[inputName].validation.required.maxLength
      : null;
    if (minLength) {
      isValid = isValid && inputValue.length >= minLength;
    }
    if (maxLength) {
      isValid = isValid && inputValue.length <= maxLength;
    }
    const updatedValidation = {
      ...formControls[inputName].validation,
      valid: isValid,
      touched: true,
    };

    const updatedFieldControl = {
      ...formControls[inputName],
      value: inputValue,
      validation: updatedValidation,
    };

    const updatedFormControls = {
      ...formControls,
      [inputName]: updatedFieldControl,
    };
    // setFormValidity(checkFormValidity(updatedFormControls));
    setFormControls(updatedFormControls);
  };

  const checkFormValidity = (state) => {
    let isValid = true;
    for (const key in state) {
      if (key === 'confirmPassword' && !isRegister) {
        isValid = isValid && true;
      } else {
        isValid = isValid && state[key].validation.valid;
      }
    }
    return isValid;
  };

  const onAuthClicked = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (formControls.password.value !== formControls.confirmPassword.value) {
        setPaswordError('Password and Confirm Password do not match');
      } else {
        setPaswordError(false);
      }
      props.register({
        email: formControls.email.value,
        password: formControls.password.value,
        confirmPassword: formControls.confirmPassword.value,
      });
    } else {
      props.login({
        email: formControls.email.value,
        password: formControls.password.value,
      });
    }
  };
  const switchAuthState = (e) => {
    e.preventDefault();
    setIsRegister(!isRegister);
  };

  const formControlsArray = [];
  for (const key in formControls) {
    formControlsArray.push({
      id: key,
      config: formControls[key],
    });
  }

  return (
    <div className="container-fluid login-form">
      <div className="d-flex justify-content-center h-100">
        <form className="AuthForm">
          <h3>{isRegister ? 'Register' : 'Login'}</h3>
          {formControlsArray.map((formControl) => {
            return (
              <Input
                key={formControl.id}
                config={formControl.config.config}
                inputType={formControl.config.inputType}
                value={formControl.config.value}
                label={formControl.config.label}
                disabled={!isRegister && formControl.id === 'confirmPassword'}
                changed={(e) => inputChange(e, formControl.id)}
                invalid={
                  formControl.config.validation.touched &&
                  !formControl.config.validation.valid
                }
                errorMessage={formControl.config.validation.errorMessage}
              />
            );
          })}
          <Button
            onClick={onAuthClicked}
            type={formValidity ? 'Success' : 'Danger'}
            disabled={!formValidity}
          >
            {isRegister ? 'Register' : 'Login'}
          </Button>
          <Button onClick={switchAuthState} type="Success">
            Switch to {isRegister ? 'Login' : 'Register'}
          </Button>
          {passwordError ? <p>{passwordError}</p> : null}
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  email: state.auth.email,
});
const mapDispatchToprops = (dispatch) => ({
  register: (data) => dispatch(register(data)),
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Register);
