import React from 'react';
import { Link } from 'react-router-dom';
export const hoc = props => {
    return WrapperComponent => {
        return class hoc extends React.Component {
            render() {
                return <div className="hoc">
                    <WrapperComponent {...props} />
                    <footer>
                        <Link to="/">home</Link>
                        {' '}
                        <Link to="/a">a</Link>
                        {' '}
                        <Link to="/b">b</Link>
                    </footer>
                </div>;
            }
        }
    };
}
