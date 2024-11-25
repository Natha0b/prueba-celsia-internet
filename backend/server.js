const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Conecto la base de datos de MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Africa28',
  database: 'celsia_db'
});

// Mensajes cuando me conecto a la base de datos.
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas
app.get('/clientes', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/clientes', (req, res) => {
  const { identificacion, nombres, apellidos, tipoIdentificacion, fechaNacimiento, numeroCelular, correoElectronico } = req.body;
  const sql = 'INSERT INTO clientes SET ?';
  const newCliente = { identificacion, nombres, apellidos, tipoIdentificacion, fechaNacimiento, numeroCelular, correoElectronico };
  
  db.query(sql, newCliente, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') return res.status(400).send('El registro ya existe');
      return res.status(500).send(err);
    }
    res.send('Cliente registrado correctamente');
  });
});

//Servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
