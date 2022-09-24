import { Component } from 'react'
import Chart from 'chart.js';


class Charts extends Component {

  blue: String = "#85C1E9"; //taller
  yellow: String = "#F7DC6F" //investigacion
  green: String = "#7DCEA0" //parcial
  red: String = "#CB4335"; //definitiva
  border_Color = "#2C3E50" //Borde del chart

  barCombinedLine: object = {
    labels: ["Amparo", "Seddik", "M",
      "Laarbi", "Grietje", "Nacor", "Soufia",
      "Laura", "Rogers", "Annalisa", "Els", "Jimmie",
      "Braulia", "Salete", "Marinel", "Maimoun", "Quique",
      "Alexsandro", "Alta", "Jessenia", "Etor", "Pelegri", "Isabel", "Zabulon", "Youcef", "Dunia", "Elisabete", "Brahima", "Danya", "Bart"],
    datasets: [
      {
        label: 'taller',
        data: [3, 1, 3, 3, 3, 4, 3, 4, 3, 3, 2, 2, 5, 2, 4, 2, 1, 5, 4, 1, 2, 3, 5, 3, 4, 5, 2, 5, 3, 4],
        borderColor: this.border_Color,
        backgroundColor: this.blue,
        order: 1
      },
      {
        label: 'investigacion',
        data: [5, 5, 2, 5, 1, 2, 1, 5, 1, 2, 4, 4, 4, 3, 4, 3, 5, 2, 1, 2, 2, 5, 4, 4, 5, 3, 1, 5, 4, 2],
        borderColor: this.border_Color,
        backgroundColor: this.yellow,
        order: 1
      },
      {
        label: 'parcial',
        data: [1, 4, 4, 3, 5, 1, 5, 4, 2, 1, 2, 5, 4, 3, 5, 3, 4, 1, 1, 2, 1, 5, 1, 2, 5, 5, 3, 4, 5, 3],
        borderColor: this.border_Color,
        backgroundColor: this.green,
        order: 1
      },
      {
        label: 'definitiva',
        data: [3, 3.33, 3, 3.67, 3, 2.33, 3, 4.33, 2, 2, 2.67, 3.67, 4.33, 2.67, 4.33, 2.67, 3.33, 2.67, 2, 1.67, 1.67, 4.33, 3.33, 3, 4.67, 4.33, 2, 4.67, 4, 3],
        borderColor: this.border_Color,
        backgroundColor: "#FDFEFE",
        type: 'line',
        order: 0
      }
    ]
  };

  componentDidMount() { //render component charts
    const canvas: any = document.getElementById('graph_2') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');
    const config: any = {
      type: 'bar',
      yAxes: [{
        ticks: {
            min: 0,
            max: 100,
            stepSize: 20
        }
    }],
      data: this.barCombinedLine,
      
    };
    new Chart(ctx, config);
  }


  render() {
    return <>
      <div className='w-[600px]'>
        <h1>Combined Bar+Line Graph Chart</h1>
        <canvas id="graph_2" width="1800" height="1000"></canvas>
      </div>
    </>
  }
}

export default Charts
