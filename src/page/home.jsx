import React from 'react'
import { hoc } from '../hoc';

const Home = (props) => <div>
        this is page Home---{`received value${props.haha}`}
      </div>;

export default hoc({ haha: 123 })(Home);
