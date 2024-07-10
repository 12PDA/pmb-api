const express   = require('express');
const router    = express.Router();

const {body, validationResult } = require('express-validator');
const conn = require('../config/database');

//TAMPILAN SEMUA DATA MAHASISWA
router.get('/', function(req, res){
    conn.query('select * from mahasiswa', function(err, rows){
        if(err){
            return res.status(500).json({
                status  : false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(200).json({
                status  : true,
                message : 'Daftar Seluruh Mahasiswa',
                data    : rows
            })
        }
    });
});

//TAMBAH DATA MAHASISWA
router.post('/register', [
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

//detail mahasiswa
router.get('/:id', function(req, res){
    let id  = req.params.id;
    conn.query('select * from mahasiswa where mahasiswa_id = '+id, function(err, rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        }
        if(rows.length <= 0){
            return res.status(404).json({
                status : false,
                message : 'Data Mahasiswa Tidak Ditemukan!'
            })
        }
        else{
            return res.status(200).json({
                status : true,
                message : 'Detail Data Mahasiswa id '+id,
                data : rows[0]
            })
        }
    })
})

//UPDATE DATA MAHASISWA
router.put('/:id', [
    //VALIDASI
    body('nama').notEmpty(),
    body('tgl_lahir').notEmpty(),
    body('alamat').notEmpty(),
    body('telepon').notEmpty(),
    body('email').notEmpty(),
    body('pendidikan').notEmpty(),
    body('prodi').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        });
    }
    let id = req.params.id;
    let formData = {
        nama        :  req.body.nama,
        tgl_lahir   :  req.body.tgl_lahir,
        alamat      :  req.body.alamat,
        telepon     :  req.body.telepon,
        email       :  req.body.email,
        pendidikan  :  req.body.pendidikan,
        prodi       :  req.body.prodi
    }

    conn.query('update mahasiswa set ? where mahasiswa_id = ' +id, formData, function(err, rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(200).json({
                status : true,
                message : 'Data Mahasiswa Berhasil Diperbarui!'
            })
        }
    })
})

//HAPUS DATA MAHASISWA
router.delete('/:id', function(req, res){
    let id = req.params.id;
    conn.query('delete from mahasiswa where mahasiswa_id = '+id, function(err, rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(200).json({
                status : true,
                message : 'Data Mahasiswa id ' +id+ ' Berhasil Dihapus'
            })
        }
    })
})

module.exports = router;