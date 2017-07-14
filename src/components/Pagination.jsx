import React, { Component, PropTypes } from 'react';
import Pagination from 'material-ui-pagination';

const propTypes = {
  content: PropTypes.array.isRequired,
  renderComponent: PropTypes.func.isRequired,
};

class AllPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPages: 5,
      currentPage: 1,
      itemsPerPage: 4,
    };
  }

  render() {
    const { currentPage, itemsPerPage, displayPages } = this.state;
    const { content } = this.props;
    const RenderComponent = this.props.renderComponent;

    const pageCount = [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);

    const renderContent = currentItems.map((item) => { // eslint-disable-line
      return (
        <RenderComponent params={item} key={item.id} />
      );
    });

    for (let i = 1; i <= Math.ceil(content.length / itemsPerPage); i += 1) {
      pageCount.push(i);
    }

    return (
      <div>
        { renderContent }
        <div className="content-pagination">
          <Pagination
            total={pageCount.length}
            current={currentPage}
            display={displayPages}
            onChange={currentPage => this.setState({ currentPage })} // eslint-disable-line
          />
        </div>
      </div>
    );
  }
}

AllPosts.propTypes = propTypes;
export default AllPosts;
