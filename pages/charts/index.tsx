import { Component } from 'react'
import Chart from 'chart.js';


class Charts extends Component<{}, { mainData: any }> {

  constructor(props: any) {
    super(props);
    this.state = {
      mainData: []
    }
  }

  componentDidMount() {
    let jsonString = localStorage.getItem("json");
    this.setState({
      mainData: JSON.parse(jsonString ?? "{}")
    }, () => {
      const canvas: any = document.getElementById('graph_2') as HTMLCanvasElement;
      const ctx: any = canvas.getContext('2d');
      let barCombinedLine: object = {
        labels: this.state.mainData.map((element:any) => element.studentName),
        datasets: [
          {
            label: 'taller',
            data: this.state.mainData.map((element:any) => element.homework),
            borderColor: "#CACFD2",
            backgroundColor: "#884EA0",
            order: 1
          },
          {
            label: 'investigacion',
            data: this.state.mainData.map((element:any) => element.laboratory),
            borderColor: "#CACFD2",
            backgroundColor: "#F39C12",
            order: 1
          },
          {
            label: 'parcial',
            data: this.state.mainData.map((element:any) => element.exam),
            borderColor: "#CACFD2",
            backgroundColor: "#5499C7",
            order: 1
          },
          {
            label: 'definitiva',
            data: this.state.mainData.map((element:any) => element.finalGrade),
            borderColor: "#F4D03F",
            //backgroundColor: "#F4D03F",
            type: 'line',
            order: 0
          }
        ]
      };

      const config = {                
        type: 'bar',
        data: barCombinedLine,
      };
      new Chart(ctx, config);
      Chart.scaleService.updateScaleDefaults('linear',{
        ticks: {
          min: 0
        }
      })
    });
  }

  render() {
    return <div className='h-screen min-h-min'>
      <header className='w-full p-3 bg-sky-600 shadow-md'>
        <h1 className='text-center text-white font-bold'>Universidad Central | Ingeniería de Sistemas</h1>
      </header>
      <main className='w-5/6 m-auto my-5 flex flex-col gap-3'>
        <div className='flex flex-col gap-5'>
          <div className='bg-white rounded shadow-md p-4'>
            <h2 className='font-bold text-center'>Gráfica y Estadísitcas finales</h2>
            <canvas id="graph_2" width="1800" height="900"></canvas>
          </div>
          <div className='bg-white rounded shadow-md p-4'>
            <h2 className='font-bold text-center'>Todos los estudiantes con la calificación definitiva</h2>
            <table className='w-full text-center'>
              <thead>
                <tr>
                  <th>IT</th>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Definitiva</th>
                </tr>
              </thead>
              <tbody>
                { this.state.mainData.map((item:any, key: any) => {
                  return (
                    <tr key={key}>
                      <td>{ item.it }</td>
                      <td>{ item.studentID }</td>
                      <td>{ item.studentName }</td>
                      <td>{ item.finalGrade }</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='bg-white rounded shadow-md p-4'>
            <h2 className='font-bold text-center'>Todos los estudiantes con las calificaciones parciales</h2>
            <table className='w-full text-center'>
              <thead>
                <tr>
                  <th>IT</th>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Taller</th>
                  <th>Investigación</th>
                  <th>Parcial</th>
                  <th>Definitiva</th>
                  <th>Paso</th>
                </tr>
              </thead>
              <tbody>
                { this.state.mainData.map((item:any, key: any) => {
                  return (
                    <tr key={key}>
                      <td>{ item.it }</td>
                      <td>{ item.studentID }</td>
                      <td>{ item.studentName }</td>
                      <td>{ item.homework }</td>
                      <td>{ item.laboratory }</td>
                      <td>{ item.exam }</td>
                      <td>{ item.finalGrade }</td>
                      <td>{ item.finalGrade >= 3 ? "Si" : "No" }</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='bg-white rounded shadow-md p-4'>
            <h2 className='font-bold text-center'>Los diez primeros estudiantes con calificación más alta</h2>
            <table className='w-full text-center'>
              <thead>
                <tr>
                  <th>IT</th>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Definitiva</th>
                </tr>
              </thead>
              <tbody>
                { this.state.mainData.sort((b: any,a: any) => {
                  if (a.finalGrade < b.finalGrade) return -1;
                  if (a.finalGrade < b.finalGrade) return 1;
                  return 0;
                }).slice(0, 10).map((item:any, key: any) => {
                  return (
                    <tr key={key}>
                      <td>{ item.it }</td>
                      <td>{ item.studentID }</td>
                      <td>{ item.studentName }</td>
                      <td>{ item.homework }</td>
                      <td>{ item.laboratory }</td>
                      <td>{ item.exam }</td>
                      <td>{ item.finalGrade }</td>
                      <td>{ item.finalGrade >= 3 ? "Si" : "No" }</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='bg-white rounded shadow-md p-4 mb-10'>
            <h2 className='font-bold text-center'>Los cinco últimos estudiantes con la nota más baja</h2>
            <table className='w-full text-center'>
              <thead>
                <tr>
                  <th>IT</th>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Definitiva</th>
                </tr>
              </thead>
              <tbody>
                { this.state.mainData.sort((a: any,b: any) => {
                  if (a.finalGrade < b.finalGrade) return -1;
                  if (a.finalGrade < b.finalGrade) return 1;
                  return 0;
                }).slice(0, 5).map((item:any, key: any) => {
                  return (
                    <tr key={key}>
                      <td>{ item.it }</td>
                      <td>{ item.studentID }</td>
                      <td>{ item.studentName }</td>
                      <td>{ item.homework }</td>
                      <td>{ item.laboratory }</td>
                      <td>{ item.exam }</td>
                      <td>{ item.finalGrade }</td>
                      <td>{ item.finalGrade >= 3 ? "Si" : "No" }</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  }
}

export default Charts;