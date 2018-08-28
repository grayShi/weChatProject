const BaseService = require('./baseService');
const { Blogs, Tag } = require('../model');
const _ = require('lodash');

class UserHandle extends BaseService {
  constructor () {
    super();
    this.blogs = Blogs;
    this.tag = Tag;
  }
  async saveBlog (form) {
    return this.doTransaction(async (transaction) => {
      const saveData = {
        subject: form.subject,
        contentText: form.contentText,
        isValid: true,
        blogTag: _.map(form.tag, item => ({tagName: item}))
      };
      debugger;
      return this.blogs.create(saveData, {include: 'blogTag', transaction});
    });
  }
  async findBlogList () {
    return this.doTransaction(async (transaction) => {
      return this.blogs.findAll({
        include: {
          association: 'blogTag'
        },
        transaction
      });
    });
  }
}
module.exports = new UserHandle();
