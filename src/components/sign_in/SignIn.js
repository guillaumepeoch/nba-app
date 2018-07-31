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
        value:'eeee',
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

  updateForm = (e, id, blur) => {

      const newFormData = {
        ...this.state.formdata
      }

      const newElement = {
        ...newFormData[id]
      }

      newElement.value = e.target.value;
      newFormData[id]=newElement;

      this.setState({
        formdata:newFormData
      })
  }

  render(){
    return (
    <div className={styles.logContainer}>
      <form>
        <h2>Sign In</h2>
        <FormField
          id='email'
          formdata={this.state.formdata.email}
          change={this.updateForm}
          />
        <FormField
          id='password'
          formdata={this.state.formdata.password}
          change={this.updateForm}
          />
      </form>
    </div>
  );
  }

}

export default SignIn;
