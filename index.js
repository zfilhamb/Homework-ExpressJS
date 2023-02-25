const express = require("express");
const app = express();
const router = require("./things.js");
const pool = require("./queries.js");

app.use(router);

router.get("/film", (req, res) =>{
    pool.query(`SELECT * FROM film`, (err, response) =>{
        if(err) {
            throw err
        }
        res.status(200).json(response.rows)
    })
});

router.get("/film/:id", (req, res) =>{
    const {id} = req.params;
    pool.query(`SELECT * FROM film WHERE film_id= ${id}`, (err, response) =>{
        if(err) {
            throw err
        }
        res.status(200).json(response.rows[0])
    }) 
});

router.get("/category", (req, res) =>{
    pool.query(`SELECT * FROM category`, (err, response) =>{
        if(err) {
            throw err
        }
        res.status(200).json(response.rows)
    })
});

router.get("/filmgenre", (req, res) =>{
    pool.query(`SELECT 
        film.film_id as id,
         film.title as title,
          film.description as description,
           film.rating as rating,
            film.release_year as release_year,
             category.name as genre
        FROM film
            INNER JOIN film_category
                ON film.film_id = film_category.film_id
                    INNER JOIN category
                        ON film_category.category_id = category.category_id`, (err, response) =>{
        if(err) {
            throw err
        } 
        res.status(200).json(response.rows)
    })
});

pool.connect((err,res) => {
    console.log(err);
    console.log("connected");
});

app.listen(3000);

 
