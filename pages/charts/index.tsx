import { Component } from 'react'
import Chart from 'chart.js';


class Charts extends Component {

    donutData: object = { //cambiar a barlinecombined 
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    componentDidMount(){ //render component charts
        const canvas: any = document.getElementById('myChart') as HTMLCanvasElement;
        const ctx: any = canvas.getContext('2d');
        const config = {
            type: 'doughnut',
            data: this.donutData,            
        };
        /*const myChart = new Chart(ctx,config);

        const canvas_2: any = document.getElementById('myChart_2') as HTMLCanvasElement;
        const ctx_2: any = canvas_2.getContext('2d');
        const config_2 = {
            type: 'doughnut',
            data: this.donutData,            
        };
        const myChart_2 = new Chart(ctx_2,config_2);*/
    }
    
//<canvas id="myChart_2" width="400" height="400"></canvas>

    render() { 
        return <>
        <div className = 'w-[300px]'>
          <h1>Donut Graph Chart</h1>
          <canvas id="myChart" width="400" height="400"></canvas>          
        </div>
        </>
    }
}

export default Charts