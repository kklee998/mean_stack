process.env.NODE_ENV = 'test'

let mongoose = require("mongoose")
let Article = require('../models/model')

//testing dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../index')
let should = chai.should()

chai.use(chaiHttp)

describe('POST /article/new', ()=>{
    it('it should POST a new article with correct dummy data',(done)=>{
        let data = {
            id: 1,
            title: 'ABC',
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

describe('GET /article', ()=>{
    it('it should GET all the articles',(done)=>{
        chai.request(app)
            .get('/article')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
            })
    }),

    it('it should GET title ABC only', (done)=>{
        let data = {
            title: 'ABC'
        }
        chai.request(app)
            .get('/article')
            .send(data)
            .end((err, res)=>{
                if(err){console.err(err)}
                res.should.have.status(200)
                res.body[0].title.should.have.equal('ABC')
                done()
            })

    })
})

