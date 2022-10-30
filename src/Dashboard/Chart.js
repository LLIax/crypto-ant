import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card } from "./Card";
import { chartData } from "./Data";

const options = {
    title: {
        text:'My chart',
    },
    series:chartData,
    chart: {
        height:'360px',
        type: 'column',        
        style: {
            fontFamily: `'Source Sans Pro', sans-serif`
        }
    },
    xAxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    },
    yAxis: {
        min:0,
        reversedStacks: false,
    },
    plotOptions: {
        series: {
            borderWidth: 0,
        },
        column: {
            stacking: 'normal'
        }

    }



}

console.log(chartData);

export function Chart(){
    return <Card height={400}>
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
        />
    </Card>
}