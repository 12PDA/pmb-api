const express   = require('express');
const router    = express.Router();

const {body, validationResult } = require('express-validator');
const conn = require('../config/database');

//TAMBAH DATA MAHASISWA
router.post('/', [
    //VALIDASI DATA
    body('nama').notEmpty(),
    body('tgl_lahir').notEmpty(),
    body('alamat').notEmpty(),
    body('telepon').notEmpty(),
    body('email').notEmpty(),
    body('pendidikan').notEmpty(),
    body('prodi').notEmpty(),
    body('dokumen').notEmpty(),
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors : errors.array()
        });
    }

    let formData = {
        nama        :  req.body.nama,
        tgl_lahir   :  req.body.tgl_lahir,
        alamat      :  req.body.alamat,
        telepon     :  req.body.telepon,
        email       :  req.body.email,
        pendidikan  :  req.body.pendidikan,
        prodi       :  req.body.prodi,
        dokumen     :  req.body.dokumen
    }

    conn.query('insert into mahasiswa set ?', formData, function(err, rows){
        if(err){
            return res.status(500).json({
                status: false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(201).json({
                status: true,
                message : 'Data Mahasiswa Berhasil Ditambahkan!',
                data : rows[0]
            })
        }
    })
});

module.exports = router;