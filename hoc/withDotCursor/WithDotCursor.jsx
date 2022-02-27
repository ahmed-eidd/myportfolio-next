import React, { useContext, Component } from 'react';
import { MouseContext } from '../../context/mouse-context';
import classes from './HoverDot.module.scss';

const WithDotCursor = (WrappedComponent, props) => {
  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  class DotCursorComp extends Component {
    render() {
      return (
        <MouseContext.Consumer>
          {({ cursorChangeHandler }) => (
            <div
              onMouseEnter={() => {
                cursorChangeHandler(true);
              }}
              onMouseLeave={() => cursorChangeHandler(false)}
              className={classes.HoverDot}
            >
              <WrappedComponent {...this.props} />
            </div>
          )}
        </MouseContext.Consumer>
      );
    }
  }
  return DotCursorComp;
};

export default WithDotCursor;
