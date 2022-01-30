const express = require("express");
const { check, validationResult } = require("express-validator");
const House = require("../models/House");
const router = express.Router();

const validate = [
  check("title")
    .isLength({ min: 3, max: 50 })
    .withMessage("title should be between 3- 50 letters"),
];

router.post("/", validate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const house = new House({
    title: req.body.title,
    address: req.body.address,
    homeType: req.body.homeType,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    yearBuild: req.body.yearBuild,
  });

  house
    .save()
    .then((result) => {
      res.send({
        message: "data successfully created",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  House.find()
    .then((houses) => {
      res.send(houses);
    })
    .catch((err) => console.log(err));
});

// api/houses/id
router.get("/:id", (req, res) => {
  const houseID = req.params.id;
  House.findById(houseID)
    .then((house) => {
      res.send(house);
    })
    .catch((err) => console.log(err));
});

// api/houses/id  - update existing id data
router.put("/:id", (req, res) => {
  const houseID = req.params.id;
  House.findById(houseID)
    .then((house) => {
      house.title = req.body.title;
      house.address = req.body.address;
      house.homeType = req.body.homeType;
      house.description = req.body.description;
      house.price = req.body.price;
      house.image = req.body.image;
      house.yearBuild = req.body.yearBuild;

      return house.save();
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// delete the id  data
router.delete("/:id", (req, res) => {
  const houseID = req.params.id;
  House.findByIdAndDelete(houseID)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
