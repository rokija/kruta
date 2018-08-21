import React, { Component } from "react";
import LightBox from "./LightBox";
import "./index.css";

export default class PostModal extends Component {
  state = {
    imageUrl: null,
    formData: null,
    caption: ""
  };

  handleAddImage = event => {
    event.preventDefault();
    const file = event.target.files[0];

    const reader = new FileReader();
    const formData = new FormData();

    formData.append("media", file);

    reader.onloadend = () =>
      this.setState({ formData, imageUrl: reader.result });
    reader.readAsDataURL(file);
  };

  handleAddCaption = event => {
    this.setState({ caption: event.target.value });
  };

  handleSubmit = () => {
    const { caption, formData } = this.state;
    const { posts, onModalClose, submitPost } = this.props;

    // issue here with not rerendering
    submitPost({ caption, formData }).then(() => {
      if (posts.isSubmitted) {
        onModalClose();
      }
    });
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <LightBox onClickOutside={this.props.onClickOutside}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={this.props.onModalClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="modalForm">
                <div className="modalFormItem">
                  <label>Caption</label>
                  <input type="text" onChange={this.handleAddCaption} />
                </div>
                <div className="modalFormItem">
                  <input type="file" onChange={this.handleAddImage} />
                </div>
                <img className="img-fluid" src="" alt="" />
              </form>
              {imageUrl && <img className="img-fluid" src={imageUrl} alt="" />}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.onModalClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </LightBox>
    );
  }
}
