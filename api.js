// Require the framework and instantiate it
const fastify = require('fastify')({ //import package for api
  logger: true
})
const pgp = require('pg-promise')(); //import package for connect to posgress

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'crud',
    user: 'postgres',
    password: '123456'
})
// Declare a route
// fastify.get('/bukuku/:search', async function (request, reply) {
//     //const buku = await db.query('select * from buku');
//     const buku = await db.query("select * from buku where judul ilike $1",[`%${request.params.search}%`]);
//          return buku;
// })
// fastify.get('/bukuku', async function (request, reply) {
//     //const buku = await db.query('select * from buku');
//     const buku = await db.query("select * from buku where judul ilike $1",[`%${request.query.search}%`]);
//     //http://127.0.0.1:3000/bukuku?search=gambar
//          return buku;
// })
// fastify.post('/buku', async function (request, reply) {
//     //reply.send('method post')
//     const buku = await db.query("select * from buku where judul ilike $1",[`%${request.body.search}%`]);
//     //http://127.0.0.1:3000/bukuku?search=gambar
//          return buku;
//   })

// TUGAS AKHIR
// get list semua buku
//get list semua buku, bisa search by judul method : GET
fastify.get('/buku', async function (request, reply) {
  if(request.query.search){ //cek apakah mengirim query
    const buku = await db.query("select * from buku where judul ilike $1",[`%${request.query.search}%`]
    );
      if (!buku || buku.length === 0) {
        return reply.code(404).send({ message: 'Data dengan judul tersebut tidak ditemukan' }); //kalau data dengan judul yg dicari ga ada
      };
    return buku;
  }else{
    const buku = await db.query("select * from buku"); //get all buku
         return buku;
  };  
})
// get detail buku by id (param id) method : GET
fastify.get('/buku/:id', async function (request, reply) {
  if (!request.params.id) {
    return reply.code(400).send({ message: 'ID is required' }); //kalau tidak mengirim id
  }
  const buku = await db.query("select * from buku where id = $1",[request.params.id]);
      if (!buku || buku.length === 0) { //kalau data dengan id yg dikirim ga ada
        return reply.code(404).send({ message: 'Data dengan id tersebut tidak ditemukan' });
      }
      return buku;
})
// insert data buku. method : POST
fastify.post('/buku', async function (request, reply) {
  const buku = await db.query(
    "INSERT INTO buku (sku, judul, harga, stock) VALUES ($1, $2, $3, $4) RETURNING *",
    [
      request.body.sku,
      request.body.judul,
      request.body.harga,
      request.body.stock
    ]
  );
  //console.log(buku)
  reply
    .code(201) //setting status code 201 (created)
    .send({ message: 'Data berhasil ditambahkan', data: buku
    });
});
   
// update/edit buku by id(param). method: PUT
fastify.put('/buku/:id', async function (request, reply) {
  if (!request.params.id) {
    return reply.code(400).send({ message: 'ID is required' }); //kalau tidak mengirim id
  }
  const buku = await db.query(
    "UPDATE buku SET sku = $1, judul = $2, harga = $3, stock = $4 WHERE id = $5 RETURNING *",
    [
      request.body.sku,
      request.body.judul,
      request.body.harga,
      request.body.stock,
      request.params.id
    ]
  );
  if (!buku || buku.length === 0) { //jika data dengan id yang dikirim ga ada
    return reply.code(404).send({ message: 'Data dengan id tersebut tidak ditemukan' });
  }
  //console.log(buku)
  reply
    .send({ message: 'Data berhasil diupdate', data: buku
    });
});
// hapus buku by id, method: DELETE
fastify.delete('/buku/:id', async function (request, reply) {
    if (!request.params.id) { //cek apakah mengirim id
      return reply.code(400).send({ message: 'ID is required' });
    }
    const buku = await db.query("delete from buku where id = $1 RETURNING id",
      [request.params.id]
    );

    if (!buku || buku.length === 0) { //jika data dengan id yang dikirim tidak ada
      return reply.code(404).send({ message: 'Data dengan id tersebut tidak ditemukan' });
    }

    reply
    .send({ message: 'Data berhasil dihapus', id: buku
    });
   // console.log(buku)
   // console.log(buku.length)
 }) 

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})