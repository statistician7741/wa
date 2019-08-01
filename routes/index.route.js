//====== MODUL ======//
//load framework express
const express = require('express');

//buat router khusus index/home
const index = express.Router();

index.get('/', function(req, res){
	res.send("ok")
});
index.post('/', function(req, res){
    let reply = '';
    if(req.body.message === '0'){
        reply = "Menu:\n1. Kuota\n2. Pulsa\n3. Masa Aktif\n\n0. Menu Awal";
    } else if(req.body.message === '1'){
        reply = "Masukkan nomor hp Anda:\n\n0. Menu Awal";
    } else{
        reply = "Mohon masukkan pilihan Anda lagi.";
    }
    res.send(reply);
    console.log(`${req.body.contact.replace(/\s|\-/g, '')}: ${req.body.message}\nReplied:\n${reply}`);
});

require('../Library/MenuAbstract')

module.exports = index;