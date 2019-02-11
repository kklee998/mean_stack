process.env.NODE_ENV = 'test'

let mongoose = require("mongoose")
let Article = require('../models/model')

//testing dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../index')
let should = chai.should()

chai.use(chaiHttp)

describe('GET /article', ()=>{
    it('it should GET all the articles',(done)=>{
        chai.request(app)
            .get('/article')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
            })
    })
})

describe('POST /article/new', ()=>{
    it('it should POST a new article with correct dummy data',(done)=>{
        let data = {
            id: 1,
            title: 'Test',
            content: 'mksdfnks0=i2-nvjrvs'
        }
        chai.request(app)
            .post('/article/new')
            .send(data)
            .end((err, res)=>{
                res.should.have.status(200)
            done();
            })
    })
})