import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Search, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids/src'

import { customersData, customersGrid } from '../data/dummy'

import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search', 'Delete']}
      editSettings={{allowEditing:true, allowDeleting:true}}
      width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers