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
      type: "category",
     
      
    },
    yAxis: {
      type: "category",
      
    },
  series: [
    {
      data: data.slice(0,3).map((val)=>val.Alcohol),
      type: 'bar',
      stack:"x"
    }
    ,
    {
      data: data.slice(0,3).map((val)=>val.Magnesium),
      type: 'bar',
      stack:"y"
      
    }
    ,
  ],
  tooltip: {
    trigger: "axis"
  }
}; 
 
return (
    <>
    <h1>BarChart</h1>
<ReactEcharts option={option}  />

    </>
)
} 
export default BarChart;