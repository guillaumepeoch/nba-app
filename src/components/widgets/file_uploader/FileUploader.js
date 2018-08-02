import React , { Component } from 'react';
import FileUpload from "react-firebase-file-uploader";
import { firebase } from '../../../firebase';

class FileUploader extends Component {
  state = {
    name: "",
    isUploading: false,
    progress: 0,
    fileURL: ""
  }

  handleUploadStart=()=>{
    this.setState({ isUploading: true, progress: 0 });
  }

  handleProgress=(progress)=>{
    this.setState({ progress });
  }

  handleUploadError=(error)=>{
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess=(filename)=>{
    this.setState({
      name: filename,
      progress: 100,
      isUploading: false
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url =>{
        this.setState({ fileURL: url })
        this.props.filename(filename);
    });
  };

  render(){
    return (
      <div>
        <FileUpload
            accept="image/*"
            name="image"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        { this.state.isUploading ?
            <p>{this.state.progress}</p>
          : null
        }
        { this.state.fileURL ?
            <img src={this.state.fileURL} alt="uploaded"/>
          : null
        }
      </div>
    );
  }
}

export default FileUploader;
