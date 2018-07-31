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
          password:true
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

      if(blur){
        const error = this.validate(newElement);
        newElement.valid = error[0];
        newElement.validationMessage = error[1];
      }

      newElement.touched = blur;
      newFormData[id] = newElement

      this.setState({
        formdata:newFormData
      })
  }

  validate(element){
    let error = [true,''];

    if(element.validation.email){
        const valid = /\S+@\S+\S+/.test(element.value)
        const message = valid ? '':'Must be a valid email';
        error = valid ? error : [valid, message];
    }

    if(element.validation.password){
        const passwordLength = 5
        const valid = element.value.length >= passwordLength;
        const message = valid ? '':'Must be greater than '+passwordLength;
        error = valid ? error : [valid, message];
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = valid ? '':'This field is required';
        error = valid ? error : [valid, message];
    }


    return error;
  }

  submitButton(){
    return this.state.loading ?
    'Loading...'
    : (
      <div>
        <button onClick={(e)=>{this.submitForm(e,true)}}>Log In</button>
        <button onClick={(e)=>{this.submitForm(e,false)}}>Register Now</button>
      </div>
    );
  }

  submitForm = (e, type) => {
    e.preventDefault();

    if(type !== null ){
      let valid = true;
      let dataToSubmit = {};
      for(let key in this.state.formdata){
          valid = this.state.formdata[key].valid && valid;
          dataToSubmit[key]=this.state.formdata[key].value;
      }

      if(valid){
        this.setState({
          loading:true,
          registerError:''
        })
        if(type){
          console.log('Login')
        } else {
          console.log('Register');
        }
        console.log(dataToSubmit);
      } else {
        console.log('Not valid!');
      }
    }
  }

  render(){
    return (
    <div className={styles.logContainer}>
      <form onSubmit={(e)=>this.submitForm(e,null)}>
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
        {this.submitButton()}
      </form>
    </div>
  );
  }

}

export default SignIn;
