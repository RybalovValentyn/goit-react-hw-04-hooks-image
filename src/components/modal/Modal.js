import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleBackdropClick);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleBackdropClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {

    if (event.target.nodeName === 'DIV') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src={this.props.imageId.largeImageURL} alt={this.props.imageId.tags} />
      </div>
    </div>,
      modalRoot,
    );
  }
}

