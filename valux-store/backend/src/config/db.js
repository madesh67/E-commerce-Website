import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "127.0.0.1",

  user: "valux_api",

  password: "valux123",

  database: "valux",

  waitForConnections: true,

  connectionLimit: 10,
});

export default db;
