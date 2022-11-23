import "./index.css"
import { 
    VerticalAlignBottomOutlined, 
    LeftOutlined,
    RightOutlined
} 
from '@ant-design/icons'
import moment from 'moment'
import { useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        x: {
          grid: {
            display: false
          },
        },
        y: {
            grid: {
                display: true,
            },
            ticks: {
                display: false,
            },
        },
      },
    elements: {
        point:{
            radius: 0
        }
    }
};
  
const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  
const data = {
    labels,
    datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: labels.map(() => Math.random()),
        },
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'grey',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => Math.random()),
        },
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'green',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => Math.random()),
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: 'rgb(75, 192, 192)',
          data: labels.map(() => Math.random()),
          borderColor: 'white',
          borderWidth: 7,
        },
    ],
};
  

export default function History() {
    const [startOfWeek, setStartOfWeek] =  useState(moment().startOf('week').add(1, 'days'));
    const [endOfWeek, setEndOfWeek] = useState(moment().endOf('week').add(1, 'days'));



    return (
        <div className="history">
            <div>
                <h1>History</h1>
                <div>
                    <VerticalAlignBottomOutlined />
                    Export
                </div>
            </div>
            <div className="history-content">
                <div>2022</div>
                <div>
                    <LeftOutlined />
                    <span>{moment(startOfWeek).add(-7, 'days').format("ll").slice( 0, -6 ) + " - " + moment(endOfWeek).add(-7, 'days').format("ll").slice( 0, -6 )}</span>
                    <span>{moment(startOfWeek).format("ll").slice( 0, -6 ) + " - " + moment(endOfWeek).format("ll").slice( 0, -6 )}</span>
                    <span>{moment(startOfWeek).add(7, 'days').format("ll").slice( 0, -6 ) + " - " + moment(endOfWeek).add(7, 'days').format("ll").slice( 0, -6 )}</span>
                    <RightOutlined />
                </div>
            </div>
            <div>
                <Chart type='bar' data={data} options={options}/>
            </div>
        </div>
    )
}