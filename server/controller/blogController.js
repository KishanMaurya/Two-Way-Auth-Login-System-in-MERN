const Blog = require("../models/blog");

exports.create = async (req, res) => {
  try {
    const blog = await new Blog(req.body).save();
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.list= async (req, res) => {
    try {
        const getAll = await Blog.find({}).sort({createdAt: -1}).exec();
        res.json(getAll)
    } catch (err) {
        console.log(err);
        res.status(400).json({
        err: err.message,
        });
    }
}

exports.remove= async (req , res) => {
  try {
    let remove=await Blog.findOneAndDelete({ _id: req.params._id }).exec()
    res.json(remove)
  } catch (error) {
    console.error(error)
    res.status(400).send('delete One item from Blog failed..')
  }
}


exports.read= async (req, res) => {
  try {
    let read=await Blog.findOne({ _id: req.params._id }).exec()
    res.json(read)
  } catch (error) {
    console.error(error)
    res.status(400).send('fetch One item from Product failed..')
  }
}

exports.update = async (req, res) => {
  try {
    const updated = await Blog.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("PRODUCT UPDATE ERROR ----> ", err);
    res.status(400).json({
      err: err.message,
    });
  }
};