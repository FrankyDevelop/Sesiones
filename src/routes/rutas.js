//TODO: Configuracion basica de rutas
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

//registro
router.post("/register", (req, res) => {
  console.log(req.body); //el req (es el request , lo que nos manda el usuario y el body es el contenido de eso)
  //sesion
  req.session.prueba = "Pasa el pack";

  res.redirect("/profile");//redireccionamos de una ruta a otra
});

/*Las sesiones solo sirven para enviar datos de una ruta a otras estos 
datos se eliminan para que no ocupen espacio en cache*/

//perfil
router.get("/profile", (req, res) => {
  const text=req.session.prueba;
  delete req.session.prueba;
  res.render("profile",{
      text
  });
});
module.exports = router;
