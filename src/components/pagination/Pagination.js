import React from 'react'
import ReactPaginate from 'react-paginate'


const Pagination = ({info,pageNumber,setPageNumber}) => {
  
  return (
    <ReactPaginate
    className='pagination justify-content-center my-4 gap-1'
    forcePage={pageNumber === 1? 0 : pageNumber - 1}
    pageCount={info?.pages}
    previousLabel= ""
    marginPagesDisplayed={1}
    nextLabel=""
    pageClassName='page-item'
    pageLinkClassName='page-link'
    onPageChange={(data)=>{
      setPageNumber(data.selected + 1)
    }}
    activeClassName="active"
    />
  )
}

export default Pagination