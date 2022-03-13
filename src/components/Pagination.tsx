import { FC } from 'react';

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
      <div className='pagination flex justify-center items-center my-5 flex-wrap'>
        <span onClick={() => { currentPage > 1 && paginate(currentPage - 1) }} className='bg-gray-200 hover:bg-gray-300 px-2 cursor-pointer mx-1 page-item  h-7 border border-gray-400 shadow-xl rounded-md flex items-center justify-center'>
          Previous
        </span>
        {pageNumbers.map(number => (
          <span onClick={() => paginate(number)} key={number} className='bg-gray-200 hover:bg-gray-300  cursor-pointer mx-1 page-item w-7 h-7 border border-gray-400 shadow-xl rounded-md flex items-center justify-center'>
            {number}
          </span>
        ))}
        <span onClick={() => { currentPage < totalPosts / postsPerPage && paginate(currentPage + 1) }} className='bg-gray-200 hover:bg-gray-300  px-2 cursor-pointer mx-1 page-item h-7 border border-gray-400 shadow-xl rounded-md flex items-center justify-center'>
          Next
        </span>
      </div>


  );
};

export default Pagination;