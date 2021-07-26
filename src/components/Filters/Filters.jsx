import React from "react";
import Filter from "./Filter";

const Filters = () => {
    return (
        <aside className="aside">
            <div className="aside__title">
                <h2>FILTROS</h2>
            </div>
            <div className="aside__filters">
                <Filter title="Especies" filters={ ['Maiz', 'Aguacate', 'Otros'] }/>
                <Filter title="Temporada" filters={ ['12 feb - 14 mar', '15 marzo - 16 junio'] }/>
                <Filter title="lorem" filters={ ['lorem', 'Lorem ipsum', 'Lorem ipsum dolor'] } />
                <Filter title="lorem" filters={ ['lorem', 'Lorem ipsum', 'Lorem ipsum dolor'] } />
                <Filter title="lorem" filters={ ['lorem', 'Lorem ipsum', 'Lorem ipsum dolor'] } />
                <Filter title="lorem" filters={ ['lorem', 'Lorem ipsum', 'Lorem ipsum dolor'] } />
            </div>
        </aside>
    )
}


export default Filters;