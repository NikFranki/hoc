import React from 'react';
import { hoc } from '../hoc';

const A = (props) => <div>
        this is page A---{`received value${props.haha}`}
      </div>;

export default hoc({haha: 456})(A);
