import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import '../../css/pagination.css';

interface PaginationInterface {
  currentPage: number;
  totalPage: number;
  pgnPage: any;
}

export const PaginationPage:React.FC<PaginationInterface> = (props) => {
  const listPage = [];

  if(props.currentPage === 1) {
    listPage.push(props.currentPage);
    if(props.totalPage >= props.currentPage + 1) {
      listPage.push(props.currentPage + 1);
    }
    if(props.totalPage >= props.currentPage + 2) {
      listPage.push(props.currentPage + 2);
    }
  } else if(props.currentPage > 1) {
    if(props.currentPage >= 3) {
      listPage.push(props.currentPage - 2);
    }
    if(props.currentPage >= 2) {
      listPage.push(props.currentPage - 1);
    }
    listPage.push(props.currentPage);
    if(props.totalPage >= props.currentPage + 1) {
      listPage.push(props.currentPage + 1);
    }
    if(props.totalPage >= props.currentPage + 2) {
      listPage.push(props.currentPage + 2);
    }
  }

  return (
    <div id='pgn_block'>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              // href="/sach"
              aria-label="Previous"
              onClick={() => props.pgnPage(1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {
            listPage.map(page => ( 
              <li
                key={page}
                onClick={() => props.pgnPage(page)}
                className="page-item"
              >
                <button
                  className={'page-link ' + (props.currentPage === page?'active':'')}
                  // href="#"
                >
                  {page}
                </button>
              </li>
            ))
          }
          <li className="page-item">
            <button
              className="page-link"
              // href="#"
              aria-label="Next"
              onClick={() => props.pgnPage(props.totalPage)}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}


