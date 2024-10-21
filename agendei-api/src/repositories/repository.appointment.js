import { query } from "../database/sqlite.js";

async function Listar(id_user) {
  let sql = `SELECT a.id_appointment, s.description as service, d.name as doctor, d.specialty,
a.booking_date, a.booking_hour, u.name as user, ds.price 
FROM appointments a
join services s on (s.id_service = a.id_service)
join doctors d on (d.id_doctor = a.id_doctor)
join users u on (u.id_user = a.id_user)
JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service)
WHERE a.id_user = ?
ORDER BY a.booking_date, a.booking_hour `;

  const appointments = await query(sql, id_user);

  return appointments;
}

async function Inserir(
  id_user,
  id_doctor,
  id_service,
  booking_date,
  booking_hour
) {
  let sql = `INSERT INTO appointments (id_user,
    id_doctor,
    id_service,
    booking_date,
    booking_hour) values(?, ?, ?, ?, ?)
  returning id_appointment`;

  const appointment = await query(sql, [
    id_user,
    id_doctor,
    id_service,
    booking_date,
    booking_hour,
  ]);

  return appointment[0];
}

async function Excluir(id_user, id_appointment) {
  let sql = `DELETE from appointments 
  where id_appointment=? and id_user=?`;

  await query(sql, [id_appointment, id_user]);

  return { id_appointment };
}

export default { Listar, Inserir, Excluir };
