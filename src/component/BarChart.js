import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react"; 
function BarChart() {  
    const [data, setData] = useState([]);
   
	// Fetch Function
    useEffect(()=>{

        fetch('./Wine-Data.json').then(
            (res) =>{
                return res.json();
            },
        ).then( (data)=> {
            // store Data in State Data Variable
            setData(data);
            console.log(data

                )
        }).catch(
            (err) =>{
                console.log(err, ' error');
            },
        );
    },[])
//barChart 
const option = {
  xAxis: {
    type: 'category',
    data: data.map((val)=>val.Alcohol)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: data.map((val)=>val.Magnesium),
      type: 'bar'
    }
    ,
    
  ],
  tooltip: {
    trigger: "axis"
  }
}; 
 
return (
    <>
    
<ReactEcharts option={option}  />

    </>
)
} 
export default BarChart;