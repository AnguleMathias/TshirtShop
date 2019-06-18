const Query = {
  product:  (_, __, { db })=> {
   return db.query(
      'SELECT * FROM product '
    ).spread(function (product) {
      return product;
    });
  },
  getSingleProduct:(_, { product_id }, { db }) =>{
    return db.query(
      'SELECT * FROM product WHERE product_id=?',
      [product_id]).spread(function (product) {
      return product;
    });
  },
  category: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM category'
    ).spread(function (category) {
      return category;
    })
  },
  productCategory: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM product_category'
    ).spread(function (product_category) {
      return product_category;
    })
  },
  productAttribute: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM product_attribute'
    ).spread(function (product_attribute) {
      return product_attribute;
    })
  },
  attribute: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM attribute'
    ).spread(function (attribute) {
      return attribute;
    })
  },
  attributeValue: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM attribute_value'
    ).spread(function (attribute_value) {
      return attribute_value;
    })
  },
  shippingRegion: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM shipping_region'
    ).spread(function (shipping_region) {
      return shipping_region;
    })
  },
  shipping: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM shipping'
    ).spread(function (shipping) {
      return shipping;
    })
  },
  tax: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM tax'
    ).spread(function (tax) {
      return tax;
    })
  },
};

module.exports = Query;