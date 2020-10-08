import React, { useState } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

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
  const [authState, setAuthState] = useState('Register');

  const inputChange = (e, inputName) => {
    const inputValue = e.target.value;

    let isValid = true;
    const minLength = formControls[inputName].validation.required.minLength
      ? formControls[inputName].validation.required.minLength
      : null;
    const maxLength = formControls[inputName].validation.required.maxLength
      ? formControls[inputName].validation.required.maxLength
      : null;
    // const equalToField = formControls[inputName].validation.required.equal
    //   ? formControls[inputName].validation.required.equal
    //   : null;
    // let errorMessage;
    if (minLength) {
      isValid = isValid && inputValue.length >= minLength;
    }
    if (maxLength) {
      isValid = isValid && inputValue.length <= maxLength;
    }
    // if (equalToField) {
    //   isValid = isValid && inputValue === formControls[equalToField].value;
    //   errorMessage = 'Password and confirm password do not match';
    // }
    const updatedValidation = {
      ...formControls[inputName].validation,
      valid: isValid,
      touched: true,
      // errorMessage: errorMessage
      //   ? errorMessage
      //   : formControls[inputName].validation.errorMessage,
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
    setFormValidity(checkFormValidity(updatedFormControls));
    setFormControls(updatedFormControls);
  };

  const checkFormValidity = (state) => {
    let isValid = true;
    for (const key in state) {
      isValid = isValid && state[key].validation.valid;
    }
    return isValid;
  };

  const formControlsArray = [];
  for (const key in formControls) {
    formControlsArray.push({
      id: key,
      config: formControls[key],
    });
  }

  const onRegisterClicked = (e) => {
    e.preventDefault();
    console.log('CLICKED');
    if (formControls.password.value !== formControls.confirmPassword.value) {
      setPaswordError('Password and Confirm Password do not match');
    } else {
      setPaswordError(false);
    }
  };
  const switchAuthState = (e) => {
    e.preventDefault();

    if (authState === 'Register') {
      setAuthState('Login');
    } else {
      setAuthState('Register');
    }
  };

  return (
    <div className="container-fluid login-form">
      <div className="d-flex justify-content-center h-100">
        <form className="AuthForm">
          <h3>{authState === 'Register' ? 'Register' : 'Login'}</h3>
          {formControlsArray.map((formControl) => {
            return (
              <Input
                key={formControl.id}
                config={formControl.config.config}
                inputType={formControl.config.inputType}
                value={formControl.config.value}
                label={formControl.config.label}
                disabled={
                  authState === 'Login' && formControl.id === 'confirmPassword'
                }
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
            onClick={onRegisterClicked}
            type={formValidity ? 'Success' : 'Danger'}
            disabled={!formValidity}
          >
            {authState === 'Register' ? 'Register' : 'Login'}
          </Button>
          <Button onClick={switchAuthState} type="Success">
            Switch to {authState === 'Register' ? 'Login' : 'Register'}
          </Button>
          {passwordError ? <p>{passwordError}</p> : null}
        </form>
      </div>
    </div>
  );
};

export default Register;
