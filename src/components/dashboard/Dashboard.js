import React , { Component } from 'react';
import styles from './dashboard.css';
import FormField from '../widgets/form_fields/FormFields';
import { firebase } from '../../firebase';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

class Dashboard extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    postError:'',
    registerError:'',
    loading:false,
    formdata:{
      title:{
        element:'input',
        value:'',
        config:{
          name:'title',
          type:'title',
          placeholder:'Enter the Title'
        },
        validation:{
          required:true
        },
        valid:false,
        touched:false,
        validationMessage:''
      },
      author:{
        element:'input',
        value:'',
        config:{
          name:'author',
          type:'author',
          placeholder:'Enter your name'
        },
        validation:{
          required:true,
        },
        valid:false,
        touched:false,
        validationMessage:''
      },
      body:{
        element:'texteditor',
        value:'',
        valid:true
      },
      team:{
        element:'select',
        value:'',
        config:{
          options:[
            {id:1,name:"OKC"},
            {id:2,name:"SAS"}
          ]
        },
        validation:{
          required:true
        },
        valid:false,
        touched:false,
        validationMessage:''
      }
    }
  }

  onEditorStateChange = (editorState) => {

    let contentState = editorState.getCurrentContent();
    let rawState = convertToRaw(contentState)

    let html = stateToHTML(contentState)

    this.updateForm({target:{value:html}},'body',false)

    this.setState({
        editorState
    })
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
        <button onClick={(e)=>{this.submitForm(e,true)}}>Post Article</button>
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

      console.log(dataToSubmit);

      if(valid){
        this.setState({
          loading:true,
          registerError:''
        })
        if(type){
          // LOGIN

        } else {
          // REGISTER

        }
      } else {
        console.log('Not valid!');
      }
    }
  }


  showError = () => (
        this.state.postError !== '' ?
            <div className={styles.error}>{this.state.postError}</div>
        : ''
    )

  render(){
    return(
      <div className={styles.logContainer}>
        <form onSubmit={(e)=>this.submitForm(e,null)}>

          <h2>Post Article</h2>

          <FormField
            id='title'
            formdata={this.state.formdata.title}
            change={this.updateForm}
            />

          <FormField
            id='author'
            formdata={this.state.formdata.author}
            change={this.updateForm}
            />

          <Editor
            editorState={this.state.editorState}
            wrapperClassName="myEditor-wrapper"
            editorClassName="myEditor-editor"
            onEditorStateChange={this.onEditorStateChange}
            />

            <FormField
              id='team'
              formdata={this.state.formdata.team}
              change={this.updateForm}
              />

          { this.submitButton() }
          { this.showError() }
        </form>
      </div>
    );
  }
}

export default Dashboard;
