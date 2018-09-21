import express from "express";

import userController from "../controllers/user";
const router = express.Router();

router.get("/", async (req, res) => {
  const { limit } = req.params;
  let users = [];

  try {
    users = await userController.findAll(limit);
  } catch (e) {
    console.log(e);
  }

  if (req.query.format === "json") {
    res.send({
      title: "Veja o Ranking do nosso game | Impulso Network",
      users
    });
  } else {
    res.render("ranking", {
      title: "Veja o Ranking do nosso game | Impulso Network",
      users
    });
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  let user = {};

  try {
    user = await userController.find(id);
  } catch (e) {
    console.log(e);
  }

  if (req.query.format === "json") {
    res.send({
      user
    });
  } else {
    res.render("profile", {
      title:
        "Perfil da pessoa jogadora, pra saber tudo de legal que fez pra ter 9.990 XP",
      user
    });
  }
});

export default router;
