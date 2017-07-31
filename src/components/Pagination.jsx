import React, { Component, PropTypes } from 'react';
import Pagination from 'material-ui-pagination';

const propTypes = {
  content: PropTypes.array.isRequired,
  action: PropTypes.func,
  itemsPerPage: PropTypes.number.isRequired,
  renderComponent: PropTypes.func.isRequired,
};

class AllPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPages: 5,
      currentPage: 1,
      itemsPerPage: this.props.itemsPerPage,
      scrollInterval: 0,
      scrollSpeed: 10,
    };

    this.scrollUp = this.scrollUp.bind(this);
    this.scrollStep = this.scrollStep.bind(this);
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.scrollInterval);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollSpeed);
  }

  scrollUp() {
    const intervalId = setInterval(this.scrollStep, this.state.scrollSpeed);
    this.setState({ scrollInterval: intervalId });
  }

  render() {
    const { currentPage, itemsPerPage, displayPages } = this.state;
    const { content, action } = this.props;
    const RenderComponent = this.props.renderComponent;

    const pageCount = [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);

    const renderContent = currentItems.map((item) => { // eslint-disable-line
      return (
        <RenderComponent params={item} likePost={action} key={item.id} />
      );
    });

    for (let i = 1; i <= Math.ceil(content.length / itemsPerPage); i += 1) {
      pageCount.push(i);
    }

    return (
      <div>
        <div>
          { renderContent }
        </div>
        <div className="content-pagination">
          <Pagination
            total={pageCount.length}
            current={currentPage}
            display={displayPages}
            onChange={
              // eslint-disable-next-line
              currentPage => this.setState({ currentPage }, () => { this.scrollUp(); })
            }
          />
        </div>
      </div>
    );
  }
}

AllPosts.propTypes = propTypes;
export default AllPosts;
