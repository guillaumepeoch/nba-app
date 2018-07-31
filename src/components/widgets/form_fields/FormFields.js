import React from 'react';
import styles from './form_fields.css';

const FormFields = function(props){

  let template = null;

  switch(props.formdata.element){
    case 'input':
      template = (
        <div>
          <input
            {...props.formdata.config}
            value={props.formdata.value}
            onChange={function(event){
              return props.change(event,props.id,{blur:false})
            }}
            onBlur={function(event){
              return props.change(event,props.id,{blur:true})
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
    </div>
  );
}

export default FormFields;
