import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import CreateIcon from 'material-ui/svg-icons/content/create';
import UserMenu from '../components/Menu/UserMenu';

const propTypes = {
  children: PropTypes.object,
};

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <AppBar
            title={<span>Title</span>}
            showMenuIconButton={false}
            iconElementLeft={
              <div></div>
            }
            iconElementRight={
              <div className="user-right-menu-wrapper">
                <UserMenu />
                <FlatButton
                  style={{ color: 'white' }}
                  icon={<CreateIcon />}
                  label="Создать"
                />
              </div>
            }
          />
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;
export default Main;
