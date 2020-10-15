const getObj = (str) => {
  let obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  return obj;
};

const palindromePermutation = (str) => {
  // remove white spaces between string
  str = str.replace(/ +/g, "");
  console.log(str);
  // get obj
  const obj = getObj(str);
  // check if odd
  console.log(obj);
  console.log(str.length);
  if (str.length % 2 === 1) {
    // ODD: return FALSE if more than one odd number character
    let counter = 0;
    for (let i in obj) {
      if (obj[i] % 2 === 1 || obj[i] === 1) {
        counter++;
      }
      if (counter > 1) return false;
    }
  } else {
    // EVEN: return FALSE if not all even number character
    for (let i in obj) {
      if (obj[i] % 2 !== 0) return false;
    }
  }
  return true;
};

console.log(palindromePermutation("TTODDO"));

console.log(palindromePermutation("Jeey oun  g"));

// Done

import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <button key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

/////

Sample pagination react js working code 
import React, { Component } from 'react';
import {
Pagination,
PaginationItem,
PaginationLink
} from "reactstrap";


let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;
export default class SamplePagination extends Component {
   constructor() {
     super();
     this.state = {
       todos: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','T','v','u','w','x','y','z'],
       currentPage: 1,
       todosPerPage: 3,

     };
     this.handleClick = this.handleClick.bind(this);
     this.handleLastClick = this.handleLastClick.bind(this);
     this.handleFirstClick = this.handleFirstClick.bind(this);
   }

   handleClick(event) {
     event.preventDefault();
     this.setState({
       currentPage: Number(event.target.id)
     });
   }

   handleLastClick(event) {
     event.preventDefault();
     this.setState({
       currentPage:last
     });
   }
   handleFirstClick(event) {
     event.preventDefault();
     this.setState({
       currentPage:1
     });
   }
   render() {
     let { todos, currentPage, todosPerPage } = this.state;

     // Logic for displaying current todos
     let indexOfLastTodo = currentPage * todosPerPage;
     let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
     let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
      prev  = currentPage > 0 ? (currentPage -1) :0;
      last = Math.ceil(todos.length/todosPerPage);
      next  = (last === currentPage) ?currentPage: currentPage +1;

     // Logic for displaying page numbers
     let pageNumbers = [];
     for (let i = 1; i <=last; i++) {
       pageNumbers.push(i);
     }

      return (
       <div>
         <ul>
          {
            currentTodos.map((todo,index) =>{
              return <li key={index}>{todo}</li>;
            })
          }
         </ul><ul id="page-numbers">
         <nav>
          <Pagination>
          <PaginationItem>
          { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
              <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
          }
          </PaginationItem>
          <PaginationItem>
          { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
              <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
          }
          </PaginationItem>
             {
              pageNumbers.map((number,i) =>
              <Pagination key= {i}>
              <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
               <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
               {number}
               </PaginationLink>
               </PaginationItem>
              </Pagination>
            )}

         <PaginationItem>
         {
           currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
           <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
         }
         </PaginationItem>

         <PaginationItem>
         {
           currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
           <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
         }
         </PaginationItem>
         </Pagination>
          </nav>
         </ul>
       </div>
     );
   }
 }

 ReactDOM.render(
  <SamplePagination />,
  document.getElementById('root')
);