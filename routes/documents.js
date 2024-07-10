const express = require('express');
const router = express.Router();

const conn = require('../config/database');
const {body, validationResult } = require('express-validator');

//TAMPILAN DATA SELURUH DOKUMEN
router.get('/', function(req, res){
    conn.query('select * from dokumen', function(err, rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else {
            return res.status(200).json({
                status : true,
                message : 'Daftar Seluruh Data Verifikasi',
                data : rows
            })
        }
    })
})

//TAMBAH DATA DOKUMEN
router.post('/verify', [
    //VALIDASI
    body('dokumen_id').notEmpty(),
    body('status_verifikasi').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors : errors.array()
        });
    }

    let formData = {
        dokumen_id : req.body.dokumen_id,
        status_verifikasi : req.body.status_verifikasi
    }

    conn.query('insert into dokumen set ?', formData, function(err, rows){
        if(err){
            return res.status(500).json({
                status : false,
                message : 'Internal Server Error'
            })
        } else{
            return res.status(201).json({
                status : true,
                message : 'Data Verifikasi Dokumen Berhasil Ditambahkan'
            })
        }
    })
})

module.exports = router;