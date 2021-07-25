 import data from "./data.json";
 import Header from "./components/Header";

function App() {

  let inputCrop="";

  function fetchCrop(e){
    e.preventDefault();
    const suggestion=data.crops[inputCrop];
    if(suggestion){
      console.log(inputCrop.toUpperCase());
      console.log(JSON.stringify(suggestion,null,"\t"));
    }else{
      console.log(`no se encontraron datos para "${inputCrop}"`);
    }
  }

  function inputHandle(e){
    inputCrop=e.target.value;
  }
  
  return (
    <div>
      <Header/>
      <form  onSubmit={fetchCrop}>
        <input onInput={inputHandle} type="text" placeholder="Nombre deL cultivo"/>
        <button type="submit">fetch data</button>
      </form>
    </div>
  );
}

export default App;

