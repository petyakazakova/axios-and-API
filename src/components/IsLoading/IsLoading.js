import React, {Component} from 'react';
import isLoadingCss from './IsLoading.css';

class IsLoading extends Component {
  render(){
    return(
      <div className="valign-wrapper">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <p>Loading...</p>
      </div>

    )
  }
}

export default IsLoading;
