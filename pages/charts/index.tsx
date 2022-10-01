/* En está pestaña, se diseña mediante el uso de lenguaje JavaScript las tablas que se autogeneran con la data cargada en
la página principal, para ello se emplea el uso de la biblioteca React para la interfaz de usuario, con el marco de trabajo 
de Next js
*/

import { Component } from 'react'
import Chart from 'chart.js';
import { CLIENT_RENEG_LIMIT } from 'tls';


class Charts extends Component<{}, { mainData: any }> {

  constructor(props: any) {
    super(props);
    this.state = {
      mainData: []
    }
  }


  /* Esta parte del código renderiza en el DOM el grafico que se crea mediante la biblioteca
  Chartjs de javascript una vez se renderiza la página web, que consume el documentos .csv transformado a un archivo json, dónde se 
  etiquetan los titulos de cada barra y su diseño.
  
  */
  componentDidMount() {
    let jsonString = localStorage.getItem("json");
    this.setState({
      mainData: JSON.parse(jsonString ?? "{}")
    }, () => {
      const canvas: any = document.getElementById('graph_2') as HTMLCanvasElement;
      const ctx: any = canvas.getContext('2d');
      let barCombinedLine: object = {
        labels: this.state.mainData.map((element:any) => element.studentName.split(" ")[0]),
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
            type: 'line',
            order: 0
          }
        ]
      };
/* Esta parte del codigo complementa el diseño de la grafica, indicandole un tipo de configuración, tal como
lo es, el lugar dónde tomará los datos para graficarlos en el tipo de grafico y una configuración adicional
que modifica el inicio del rango del eje Y  
*/
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

 /* Este metodo renderiza mediante código JavaScript la página donde se mostrarán las graficas y tablas, 
 aplicando diseños de Tailwind y con estructura de HTML, las cuales contienen la creación de titulos "h2"
 tablas definiendo filas y celdas, mediante la función .map, se iteran los elementos del json etiquetados
 anteriormente, para asignarlos a cada fila y celda, de acuerdo con su etiqueta.

 Al final del codigo, se aplican condiciones para ordenar los datos de acuerdo a los requerimientos,
 de menor a mayor y en cada tabla se incluye la condición si pasó o no con el promedio (igual porcentaje para cada nota) 
 */ 

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
                      <td>{ key+1 }</td>
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
                      <td>{ key+1 }</td>
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
                  <th>Taller</th>
                  <th>Investigacion</th>
                  <th>Parcial</th>
                  <th>Definitiva</th>
                  <th>Aprobo</th>
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
                      <td>{ key+1 }</td>
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
                  <th >IT</th>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Taller</th>
                  <th>Investigacion</th>
                  <th>Parcial</th>
                  <th>Definitiva</th>
                  <th>Aprobo</th>
                </tr>
              </thead>
              <tbody>
                { this.state.mainData.sort((a: any,b: any) => {
                  if (a.finalGrade < b.finalGrade) return -1;
                  if (a.finalGrade < b.finalGrade) return 1;
                  return 0;
                }).slice(0, 5).sort((b: any,a: any) => {
                  if (a.finalGrade < b.finalGrade) return -1;
                  if (a.finalGrade < b.finalGrade) return 1;
                  return 0;
                }).map((item:any, key: any) => {
                  return (
                    <tr key={key}>
                      <td>{ key+1 }</td>
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