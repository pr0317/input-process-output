import { Component } from 'react';
import Papa from 'papaparse';

/**
 * Formulario para importar un CSV
 * Leer los datos del Excel y generar un formato JSON
 * Redireccionar a la vista de la clase charts
 */
class Home extends Component {
  file: any;
  dataChart: {
    labels: string[],
    datasets: Object[]
  };

  constructor(props: any){
    super(props);
    this.file = null;
    this.dataChart = {
      labels: [],
      datasets: []
    };
  }

  getFile(event: any){
    if(event?.target?.files.length > 0){
      var fr=new FileReader();
      fr.onload = () => this.file = fr.result;
      fr.readAsText(event.target.files[0]);
    }
  }

  parseFileToJSON(){
    let dataParse : any = Papa.parse(this.file);
    if(!dataParse.errors.length){
      dataParse.data.shift();
      let ciudadesSalida = dataParse.data.map((element : string) => element[2]);
      let ciudadesLlegada = dataParse.data.map((element : string) => element[3]);
      // console.log(ciudadesSalida, ciudadesLlegada);
    } else {
      alert("Ha ocurrido un error importando la data del CSV")
    }
  }

  render () {
    return <div className='h-screen min-h-min bg-gray-100'>
      <header className='w-full p-3 bg-sky-600 shadow-md'>
        <h1 className='text-center text-white font-bold'>Universidad Central | Ingeniería de Sistemas</h1>
      </header>
      <main className='w-4/6 md:w-3/6 lg:w-2/6 bg-white m-auto my-5 p-4 rounded shadow-md flex flex-col gap-3'>
        <h2 className='font-bold text-center'>¡Bienvenido a Input-Process-Output System!</h2>
        <div className='p-2 bg-sky-100 text-zinc-700 rounded border w-full text-sm'>
          <p>Puede importar un archivo con una estructura csv (delimitado por comas), con las siguientes columnas de información:</p>
          <ul className='list-decimal m-4'>
            <li>Columna A: Id</li>
            <li>Columna B: Nombre de la persona</li>
            <li>Columna C: Ciudad de Salida</li>
            <li>Columna D: Ciudad de Llegada</li>
          </ul>
          <p>Puede ver un ejemplo de la estructura mediante el siguiente archivo <a href="https://github.com/pr0317/input-process-output/blob/main/data/data.csv" className='underline text-sky-500'>archivo.csv</a></p>
        </div>
        <div className='my-2'>
          <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700 font-bold">Archivo CSV</label>
          <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" accept='.csv' required onChange={this.getFile.bind(this)}></input>
        </div>
        <input type="submit" value="Generar gráfico" className='px-3 py-1 bg-sky-600 text-white rounded font-bold' onClick={this.parseFileToJSON.bind(this)} />
      </main>
    </div>
  }
}

export default Home;