require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    getProduct: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT product.id, product.name, product.price, categori.name AS categori FROM product INNER JOIN categori ON product.id_categori = categori.id", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    productDetail: (id_product) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT product.*, categori.name FROM product INNER JOIN categori ON product.id_categori = categori.id WHERE product.id=?", id_product, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    insertProduct: (data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("INSERT INTO product SET ?", data, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    updateProduct: (id_product, data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("UPDATE product SET ? WHERE id = ?",[data, id_product], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    deleteProduct: (id_product) => {
        return new Promise((resolve, reject) => {
            connecttion.query("DELETE FROM product WHERE id=?", id_product, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
}