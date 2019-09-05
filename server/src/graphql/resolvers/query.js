const Query = {
  product:  (_, __, { db })=> {
   return db.query(
      'SELECT * FROM product '
    ).spread(function (product) {
      return product;
    });
  },
  getProductByDepartment:(_, { department_id }, { db }) =>{
    return db.query(
      'SELECT DISTINCT p.product_id, p.name, p.price, p.discounted_price, p.thumbnail FROM product p INNER JOIN product_category pc ON p.product_id = pc.product_id INNER JOIN category c ON pc.category_id = c.category_id WHERE (p.display = 2 OR p.display = 3) AND c.department_id = ?',
      [department_id]).spread(function (product) {
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
  department: (_, __, { db}) => {
    return db.query(
      'SELECT * FROM department'
      ).spread(function (department) {
        return department;
      })
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