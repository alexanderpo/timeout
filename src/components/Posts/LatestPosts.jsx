import React, { Component } from 'react';
// import Post from './Post';
import Pagination from 'material-ui-pagination';

class LatestPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', '10', '11'],
      totalPages: 10,
      displayPages: 5,
      currentPage: 1,
      itemsPerPage: 4,
    };
  }

  render() {
    const { list, currentPage, itemsPerPage } = this.state;
    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentItems = list.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentItems.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers);
    return (
      <div
        style={{
          width: 500,
          margin: '0 auto',
        }}
      >
        <h3 >
          Now you are at
          <em
            style={{ color: 'red' }}
          >
            {` ${currentPage} ` }
          </em>
          page
        </h3>
        <ul>
          { renderTodos }
        </ul>
        <Pagination
          total={pageNumbers.length}
          current={this.state.currentPage}
          display={this.state.displayPages}
          onChange={currentPage => this.setState({ currentPage })}
        />
      </div>
    );
  }
}

export default LatestPosts;
