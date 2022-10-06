import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

// customize all the notifications according to your need
export const notyf = new Notyf({
    duration: 4000,
    dismissible: false,
    position: {
      x: 'center',
      y: 'bottom',
    },
    types: [
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        background: '#0e005c',
      },
      {
        type: 'success',
      }
    ]
});