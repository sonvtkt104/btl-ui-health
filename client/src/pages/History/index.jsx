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
import { Footer } from '../../components'
import { 
    Row,
    Col,
    Progress
} from 'antd'

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    // Legend,
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
    },
    // annotation: {
    //     annotations: [{
    //        type: 'line',
    //        drawTime: 'afterDatasetsDraw',
    //        id: 'strip-line-1',
    //        mode: 'horizontal',
    //        scaleID: 'y-axis-0',
    //        value: 0.3,
    //        borderColor: 'red',
    //        borderWidth: 3
    //     }]
    // }
};
  
const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  
const data = {
    labels,
    datasets: [
        {
          type: 'line',
          label: 'Carbs',
          borderColor: '#65bc66',
          borderWidth: 2,
          fill: false,
          data: labels.map(() => Math.random() * 100),

        },
        {
            type: 'line',
            label: 'Protein',
            borderColor: '#e5447a',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => Math.random() * 100),

        },
        {
            type: 'line',
            label: 'Fat',
            borderColor: '#fe6f46',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => Math.random() * 100),
        },
        {
          type: 'bar',
          label: 'Calories',
          backgroundColor: '#43a5f2',
          data: labels.map(() => Math.random() * 100),
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
            <div style={{position: 'fixed', background: 'white', top: '0', left: '0', right: 0, paddingBottom: 20, boxShadow: '1px 1px 20px 0px #d4d4d4'}}>
                <Row justify='space-between' style={{padding: '30px 25px' }}>
                    <h1 style={{fontSize: 18}}>Lịch sử</h1>
                    <Row className='history-hover' style={{padding: '5px 10px', background: '#e5e5e5', borderRadius: 5, cursor: 'pointer', border: '0.5px solid grey'}}>
                        <VerticalAlignBottomOutlined style={{fontSize: 18}} />
                        <span style={{fontSize: 14, marginLeft: 5}}>Tải về</span>
                    </Row>
                </Row>
                <div className="history-content">
                    <Row justify='center' style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>2022</Row>
                    <Row style={{marginTop: 15, paddingBottom: 20, padding: '0 25px'}} justify="space-between">
                        <span style={{fontSize: 13, color: 'grey'}}>{moment(startOfWeek).add(-7, 'days').format("ll").slice( 0, -6 ) + " - " + moment(endOfWeek).add(-7, 'days').format("ll").slice( 0, -6 )}</span>
                        <span style={{fontWeight: 'bold'}}>{moment(startOfWeek).format("ll").slice( 0, -6 ) + " - " + moment(endOfWeek).format("ll").slice( 0, -6 )}</span>
                        <span style={{fontSize: 13, color: 'grey'}}>{moment(startOfWeek).add(7, 'days').format("ll").slice( 0, -6 ) + " - " + moment(endOfWeek).add(7, 'days').format("ll").slice( 0, -6 )}</span>
                    </Row>
                </div>
            </div>
            <div style = {{padding: '200px 25px 80px'}}>
                <div>
                    <Chart type='bar' data={data} options={options}/>
                    <Row justify='center' style={{margin: '15px 0'}}>
                        <Col>
                            <Row>
                                <Col style={{ marginRight: 5,width: 40, height: 18, background: 'var(--blue)' ,borderRadius: '5px'}}></Col>
                                <Col>Calories</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row justify='space-between' style={{padding: '0 10px' }}>
                        <Col>
                            <Row>
                                <Col style={{ marginRight: 5,width: 30, height: 2, background: 'var(--green)' ,borderRadius: '5px', marginTop: 8}}></Col>
                                <Col>Tinh bột</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col style={{ marginRight: 5,width: 30, height: 2, background: 'var(--pink)' ,borderRadius: '5px', marginTop: 8}}></Col>
                                <Col>Chất đạm</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col style={{ marginRight: 5,width: 30, height: 2, background: 'var(--orange)' ,borderRadius: '5px', marginTop: 8}}></Col>
                                <Col>Chất béo</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row
                        style={{margin: '30px 0', fontSize: 16, fontWeight: 'bold'}}
                    >
                        Chi tiết hàng tuần
                    </Row>
                    <Row justify='space-between'>
                        <Progress 
                            type="circle"
                            strokeColor="#65bc66"
                            trailColor="#EDF1F5"
                            strokeWidth={9}
                            percent={30}
                            format={(percent) => {
                                return (
                                    <div style={{
                                        position: 'relative',
                                        color: '#65bc66',
                                        fontWeight: 'bold'
                                    }}>
                                        {percent}
                                        <span style={{position: 'absolute', fontSize: 12, color: '#65bc66'}}>
                                            %
                                        </span>
                                    </div>
                                );
                            }}
                            width={103}
                        />
                        <Progress 
                            type="circle"
                            strokeColor="#e5447a"
                            trailColor="#EDF1F5"
                            strokeWidth={9}
                            percent={50}
                            format={(percent) => {
                                return (
                                    <div style={{
                                        position: 'relative',
                                        color: '#e5447a',
                                        fontWeight: 'bold'
                                    }}>
                                        {percent}
                                        <span style={{position: 'absolute', fontSize: 12, color: '#e5447a'}}>
                                            %
                                        </span>
                                    </div>
                                );
                            }}
                            width={103}
                        />
                        <Progress 
                            type="circle"
                            strokeColor="#fe6f46"
                            trailColor="#EDF1F5"
                            strokeWidth={9}
                            percent={70}
                            format={(percent) => {
                                return (
                                    <div style={{
                                        position: 'relative',
                                        color: '#fe6f46',
                                        fontWeight: 'bold'
                                    }}>
                                        {percent}
                                        <span style={{position: 'absolute', fontSize: 12, color: '#fe6f46'}}>
                                            %
                                        </span>
                                    </div>
                                );
                            }}
                            width={103}
                        />
                    </Row>
                    <Row justify='space-between' style={{margin: '15px 0 0px'}}>
                        <Col style={{fontSize: 16}}>Calories</Col>
                        <Col style={{fontWeight: 'bold', fontSize: 16}}>14%</Col>
                    </Row>
                    <Row>
                        <Progress percent={50} showInfo={false} strokeColor="#43a5f2" />
                    </Row>
                    <Row style={{padding: '15px 0'}}>
                        <Col xs={8} style={{fontWeight: 'bold'}}>Hằng ngày</Col>
                        <Col xs={8} style={{fontWeight: 'bold'}}>Mục tiêu</Col>
                        <Col xs={8} style={{fontWeight: 'bold'}}>Hoàn thành</Col>
                    </Row>
                    <Row style={{padding: '5px 0'}}>
                        <Col xs={8} style={{color: '#454545'}}>Calories</Col>
                        <Col xs={8} style={{color: '#454545'}}>2515 kcal</Col>
                        <Col xs={8} style={{color: '#454545'}}>345 kcal</Col>
                    </Row>
                    <Row style={{padding: '5px 0'}}>
                        <Col xs={8} style={{color: '#454545'}}>Tinh bột</Col>
                        <Col xs={8} style={{color: '#454545'}}>377 g</Col>
                        <Col xs={8} style={{color: '#454545'}}>33 g</Col>
                    </Row>
                    <Row style={{padding: '5px 0'}}>
                        <Col xs={8} style={{color: '#454545'}}>Chất đạm</Col>
                        <Col xs={8} style={{color: '#454545'}}>125 g</Col>
                        <Col xs={8} style={{color: '#454545'}}>89 g</Col>
                    </Row>
                    <Row style={{padding: '5px 0 80px 0'}}>
                        <Col xs={8} style={{color: '#454545'}}>Chất béo</Col>
                        <Col xs={8} style={{color: '#454545'}}>66 g</Col>
                        <Col xs={8} style={{color: '#454545'}}>12 g</Col>
                    </Row>
                </div>
            </div>
            <Footer active='history'/>
        </div>
    )
}