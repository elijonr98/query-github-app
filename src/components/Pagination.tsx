import React, { FC } from 'react';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: any,
  currentPage: number,
}


const Pagination: FC<Props> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex justify-center items-center mt-5'>
        <a onClick={() => { currentPage > 1 && paginate(currentPage - 1) }} className='bg-gray-300 hover:bg-gray-400 px-2 cursor-pointer mx-1 page-item  h-7 border border-blue-500 rounded-md flex items-center justify-center'>
          Previous
        </a>
        {pageNumbers.map(number => (
          <li onClick={() => paginate(number)} key={number} className='bg-gray-300 hover:bg-gray-400  cursor-pointer mx-1 page-item w-7 h-7 border border-blue-500 rounded-md flex items-center justify-center'>
            {number}
          </li>
        ))}
        <a onClick={() => { currentPage < totalPosts / postsPerPage && paginate(currentPage + 1) }} className='bg-gray-300 hover:bg-gray-400  px-2 cursor-pointer mx-1 page-item h-7 border border-blue-500 rounded-md flex items-center justify-center'>
          Next
        </a>
      </ul>

    </nav>
  );
};

export default Pagination;