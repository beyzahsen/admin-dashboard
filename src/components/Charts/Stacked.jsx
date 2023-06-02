import React from 'react'
import { Chart, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, ChartComponent } from '@syncfusion/ej2-react-charts/src'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({width, height}) => {
  return (
    <ChartComponent 
    width={width} 
    height={height} 
    id='stack chart' 
    // primaryXAxis={stackedPrimaryXAxis} 
    // primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border: {width:0}}}
    tooltip={{enable:true}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}  />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index)=><SeriesDirective key={index}{...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked