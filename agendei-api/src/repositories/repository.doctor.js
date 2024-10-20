import { query } from "../database/sqlite.js";

async function Listar(name) {
  //simula o acesso ao banco
  // const doctors = [
  //   { id: 1, name: "Miguel", specialty: "Cardiologista", icon: "M" },
  //   { id: 2, name: "Joãol", specialty: "Clínico Geral", icon: "M" },
  //   { id: 3, name: "Maria", specialty: "Cardiologista", icon: "F" },
  // ];

  let filtro = [];

  let sql = "select * from doctors ";

  if (name) {
    sql = sql + "where name like ? ";
    filtro.push("%" + name + "%");
  }

  sql = sql + "order by name";

  const doctors = await query(sql, filtro);

  return doctors;
}

async function Inserir(name, specialty, icon) {
  //simula o acesso ao banco
  // const doctors = [
  //   { id: 1, name: "Miguel", specialty: "Cardiologista", icon: "M" },
  //   { id: 2, name: "Joãol", specialty: "Clínico Geral", icon: "M" },
  //   { id: 3, name: "Maria", specialty: "Cardiologista", icon: "F" },
  // ];

  let sql = `INSERT INTO doctors (name, specialty, icon) values(?, ?, ?)
  returning id_doctor`;

  const doctor = await query(sql, [name, specialty, icon]);

  return doctor[0];
}

async function Editar(id_doctor, name, specialty, icon) {
  let sql = `UPDATE  doctors SET name= ?, specialty= ?, icon= ? WHERE id_doctor = ?`;

  await query(sql, [name, specialty, icon, id_doctor]);

  return { id_doctor };
}

async function Excluir(id_doctor) {
  let sql = `DELETE from doctors WHERE id_doctor = ?`;

  await query(sql, [id_doctor]);

  return { id_doctor };
}

export default { Listar, Inserir, Editar, Excluir };
