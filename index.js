const express = require('express')
const Database = require('./src/config/database')
const subCategoryRouter = require('./src/routes/subCategory.routes')
const categoryRouter = require('./src/routes/category.routes')
const productRouter = require('./src/routes/product.routes')
const authorRouter = require('./src/routes/author.routes')
const bookRouter = require('./src/routes/books.routes')
require('dotenv').config()

class Server{
    constructor(){
        this.app = express();   
        this.db = new Database();
        this.PORT = process.env.PORT || 3000;
        this.setupMiddleware();
        this.setupRoutes();
        this.start();
    }

    setupMiddleware(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }));
    }

    setupRoutes(){
        this.app.use('/category', categoryRouter)
        this.app.use('/subcategory', subCategoryRouter)
        this.app.use('/product', productRouter)
        this.app.use('/author', authorRouter)
        this.app.use('/book', bookRouter)
    }

    start(){
        this.db.connect().then(()=>{
            this.app.listen(this.PORT, ()=>{
                console.log(`http://localhost:${this.PORT}`);
            })
        }).catch(error => {
            console.error('Error connecting to database:', error)
        })
    }
}

const serverInstance = new Server();