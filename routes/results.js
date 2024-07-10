const express   = require('express');
const router    = express.Router();

const {body, validationResult } = require('express-validator');
const conn = require('../config/database');

//TAMPILAN SEMUA DATA SELEKSI
router.get('/', function(req, res){
    conn.query('select * from seleksi', function(err, rows){
        if(err){
            return res.status(500).json({
                status  : false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(200).json({
                status  : true,
                message : 'Daftar Seluruh Seleksi Mahasiswa',
                data    : rows
            })
        }
    });
});

//TAMBAH DATA SELEKSI MAHASISWA
router.post('/', [
    //VALIDASI
    body('mahasiswa_id').notEmpty(),
    body('status_seleksi').notEmpty(),
    body('catatan').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors : errors.array()
        });
    }
    let formData = {
        mahasiswa_id    : req.body.mahasiswa_id,
        status_seleksi  : req.body.status_seleksi,
        catatan         : req.body.catatan
    }

    conn.query('insert into seleksi set ?', formData, function(err, rows){
        if(err){
            return res.status(500).json({
                status: false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(201).json({
                status: true,
                message : 'Data Seleksi Mahasiswa Berhasil Ditambahkan!',
                data : rows[0]
            })
        }
    })
})

module.exports = router;