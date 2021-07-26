import data from "./data.json";
import Header from "./components/Header";
import Filters from "./components/Filters/Filters.jsx";
import ContainerCard from "./components/ContainerCard";
import Footer from "./components/Footer";
import SuggestionCard from "./components/SuggestionCard";
import GraphsCard from "./components/GraphsCard";
import "./components/globalStyles.css";

function App() {
  let inputCrop = "";

  function fetchCrop(e) {
    e.preventDefault();
    const suggestion = data.crops[inputCrop];
    if (suggestion) {
      console.log(inputCrop.toUpperCase());
      console.log(JSON.stringify(suggestion, null, "\t"));
    } else {
      console.log(`no se encontraron datos para "${inputCrop}"`);
    }
  }

  function inputHandle(e) {
    inputCrop = e.target.value;
  }

  return (
    <div>
      {/* <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
        integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ"
        crossOrigin="anonymous"
      ></script> */}

      {/* Header */}
      <Header />

      {/* Layout */}
      <div className="grid__layout">
        <div className="fake-aside">
          {/* Filters */}
          <div className="container">
            <Filters />
          </div>

          {/* Graphs Card */}
          <GraphsCard titleCard="Rotaciones Comunes" />
        </div>

        {/* Display for Cards */}
        <div className="container__card">
          <div className="container fake-gap">
            <ContainerCard></ContainerCard>
            <br />
            <i class="fa fa-xing" aria-hidden="true"></i>
          </div>
          <div className="container fake-gap">
            <ContainerCard></ContainerCard>
            <br />
            <i class="fa fa-xing" aria-hidden="true"></i>
          </div>
          <div className="container fake-gap">
            <ContainerCard></ContainerCard>
            <br />
            <i class="fa fa-xing" aria-hidden="true"></i>
          </div>
        </div>

        {/* Sugestion Card */}
        <SuggestionCard cropName="acelga" />
      </div>

      {/* Footer */}
      <Footer></Footer>

      {/* Others: Quit */}
      <form onSubmit={fetchCrop}>
        <input
          onInput={inputHandle}
          type="text"
          placeholder="Nombre deL cultivo"
        />
        <button type="submit">fetch data</button>
      </form>
    </div>
  );
}

export default App;
