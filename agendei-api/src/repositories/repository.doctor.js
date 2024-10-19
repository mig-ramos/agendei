import { query } from "../database/sqlite.js";

async function Listar() {
  //simula o acesso ao banco
  // const doctors = [
  //   { id: 1, name: "Miguel", specialty: "Cardiologista", icon: "M" },
  //   { id: 2, name: "Joãol", specialty: "Clínico Geral", icon: "M" },
  //   { id: 3, name: "Maria", specialty: "Cardiologista", icon: "F" },
  // ];

  let sql = "select * from doctors order by name";

  const doctors = await query(sql, []);

  return doctors;
}

export default { Listar };
