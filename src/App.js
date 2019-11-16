import React from 'react';
import {Input} from './UI';
export default () => (
    <div style={{'display': 'flex',
  							 'width': '100%',
  							 'height' : '100vh',
  							 'justifyContent': 'center',
  							 'alignItems': 'center'
  							}}>
     <Input label='Label'
     			  type='password'
     			  verify />

    </div>
  );
