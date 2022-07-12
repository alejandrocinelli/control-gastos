import { useState, useEffect } from "react";

function Filtros({filtro, setFiltro}) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <label htmlFor="">Filtrar Gastos</label>
        <select value={filtro} onChange={(e)=> setFiltro(e.target.value) } >
          <option value="">--Todos los Gastos--</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gasto">Gasto Varios</option>
          <option value="ocio">Ocio</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="salud">Salud</option>
        </select>
      </form>
    </div>
  );
}
export default Filtros;
