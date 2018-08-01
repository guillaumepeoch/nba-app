import React from 'react';
import styles from './form_fields.css';

const FormFields = function(props){

  const getOptions = function(optionsArray){
    const template = optionsArray.map(function(option){
      return(<option value={option.id}>{option.name}</option>);
    });
    return template;
  }

  const getMessage = function(){
    return !props.formdata.valid ?
      (
        <div className={styles.labelError}>
          {props.formdata.validationMessage}
        </div>
      )
      : null;
  }

  let template = null;

  switch(props.formdata.element){
    case 'input':
      template = (
        <div className={styles.inputContainer}>
          <input
            {...props.formdata.config}
            value={props.formdata.value}
            onChange={function(event){
              return props.change(event,props.id,false)
            }}
            onBlur={function(event){
              return props.change(event,props.id,true)
            }}
          />
        </div>
      );
      break;
    case 'select':
      template = (
        <select
          value={props.formdata.value}
          onChange={function(event){
            return props.change(event,props.id,false)
          }}
          onBlur={function(event){
            return props.change(event,props.id,true)
          }}
          className={styles.inputContainer}>
          { getOptions(props.formdata.config.options) }
      </select>
      );
      break;
    default:
      template = null;
  }




  return (
    <div>
      {template}
      {getMessage()}
    </div>
  );
}

export default FormFields;
