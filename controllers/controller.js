const Article = require('../models/model')

exports.new_article = function (req,res,next){
    var article = new Article({

        id: req.body.id,
        title: req.body.title,
        content: req.body.content
    })

    article.save(function (err){
        if(err){return next(err)}
        res.status(200).send('Article created!')
    })
}

exports.article = function (req, res,next){
    Article.find({}, function(err, article){
        if(err){return next(err)}
        res.status(200).send(article)
    })
}