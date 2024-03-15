export const findAll = async (req, res) => {
  await fetch(`https://fakestoreapi.com/products`)
    .then((data) => data.json())
    .then((json) => {
      res.status(200).json(json);
    })
    .catch((err) => res.status(500).json(err));
};

export const findCategory = async (req, res) => {
  await fetch(`https://fakestoreapi.com/products/category/${req.params.id}`)
    .then((data) => data.json())
    .then((json) => {
      res.status(200).json(json);
    })
    .catch((err) => res.status(500).json(err));
};
