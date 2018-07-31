import React from 'react';
import styles from './form_fields.css';

const FormFields = function(props){

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
