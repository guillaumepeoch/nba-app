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
          placeholder:'Enter your email'
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
          placeholder:'Enter your password'
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

  updateState(e, id, blur){
      console.log(e, id, blur);
  }

  render(){
    return (
    <div className={styles.logContainer}>
      <form>
        <h2>Sign In</h2>
        <FormField
          id='email'
          formdata={this.state.formdata.email}
          change={this.updateState}/>
        <FormField formdata={this.state.formdata.password}/>
      </form>
    </div>
  );
  }

}

export default SignIn;
