import React from 'react'
import '../Pagination/Pagination.css'

const Pagination = ({ currentPage, resultCount, setCurrentPage }) => {
  return (
    <div className='pagination-wrapper'>
      <button
        className='paginate-button'
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <b>
        <p className='page-number'>Page {currentPage}</p>
      </b>
      <button
        className='paginate-button'
        disabled={resultCount <= currentPage * 10}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
