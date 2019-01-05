import React from 'react'
import { hoc } from '../hoc';

const B = (props) => <div>
                this is page B---{`received value${props.haha}`}
            </div>;

export default hoc({ haha: 789 })(B);