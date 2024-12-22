import React from 'react';

import '../../css/listBook.css';
import { CiFilter } from "react-icons/ci";


function ListBook() {
  return (
    <div id='listBook'>
      <div id='listBook_block1'>
        <div id='lb_block1'>
          <div id="blk1">

          </div>
          <div id="blk2">
            <CiFilter className='lb-icon'/>
  
          </div>
        </div>

      </div>
      <div id="listBook_blk2">

      </div>
    </div>
  )
}

export default ListBook;