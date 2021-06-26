'use strict';

const getProductById = async (req, res, next) => {
  res.send({
    "TEST": "Olivier"
  });
};

const getProducts = async (req, res, next) => {
  res.send({
    "TEST": "Olivier"
  });
};

module.exports = {
  getProductById,
  getProducts
}


