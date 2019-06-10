const Query = {
  product:  (_, __, { db })=> {
   return db.query(
      'SELECT * FROM product ',
    ).spread(function (product) {
      return product;
    });
  }
};

module.exports = Query;