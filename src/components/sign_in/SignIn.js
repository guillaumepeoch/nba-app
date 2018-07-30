import React , { Component } from 'react';
import FormField from '../widgets/form_fields/FormFields';
import styles from './sign_in.css';

class SignIn extends Component {

  state = {
    registerError:'',
    loading:false,
    formdata:{
      email:{
        element:'input',
        value:'',
        config:{
          name:'email',
          type:'email',
          placeHolder:'Enter your email'
        },
        validation:{
          required:true,
          email:true
        },
        valid:false,
        touched:false,
        validationMessage:''
      },
      password:{
        element:'input',
        value:'',
        config:{
          name:'password',
          type:'password',
          placeHolder:'Enter your password'
        },
        validation:{
          required:true,
          email:true
        },
        valid:false,
        touched:false,
        validationMessage:''
      }
    }
  }

  render(){
    return (
    <div className={styles.logContainer}>
      <form>
        <FormField formdata={this.state.formdata.email}/>
        <FormField formdata={this.state.formdata.password}/>
      </form>
    </div>
  );
  }

}

export default SignIn;
