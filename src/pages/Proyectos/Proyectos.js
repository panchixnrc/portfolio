import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typical from "react-typical";
import "./Proyectos.css";
import { Card, CardGroup } from "react-bootstrap";
import sya from "../../assets/img/syaweb.png";
import modular from "../../assets/img/modularweb.png";
import Github from "../../assets/img/github.svg";
import website from "../../assets/img/web.svg";
import html5 from "../../assets/img/html5.svg";
import css from "../../assets/img/css3.svg";
import node from "../../assets/img/node.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import js from "../../assets/img/javascript.svg";
import tareas from "../../assets/img/Tareas app.png";
import ReactIcon from "../../assets/img/icon-react.svg";
import TailwindIcon from "../../assets/img/tailwindcss.svg";
import regalos from "../../assets/img/Regalosapp.png";

function App() {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <div className="container">
        <div className="row main-proyect d-none d-md-flex justify-content-center align-items-end">
          <div className="col">
            <h1 className="text-monospace text-break text-center">
              {" "}
              <Typical wrapper="p" steps={[" Portfolio", 3000]} />
            </h1>
          </div>
        </div>
        <div className="row main-proyect submain-proyect">
          <div className="col">
            <h1 className="text-monospace text-break text-center align-self-start">
              {" "}
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  " Estos son algunos de mis proyectos",
                  3000,
                  "Estoy trabajando en varios más 🚀",
                  3000,
                ]}
              />
            </h1>
          </div>
        </div>
        <div className="row cards align-items-start justify-content-around text-monospace">
          <CardGroup>
            <div className=" col-12 col-md-4 ">
              <Card
                bg="dark"
                border="success"
                style={{ width: "20rem" }}
                className="card-main"
              >
                <Card.Img
                  className="green-filter card-header-img"
                  variant="top"
                  src={regalos}
                />
                <Card.Body>
                  <Card.Title>Regalos App</Card.Title>
                  <Card.Text>
                    Web app para armar listas de regalos , con varias funciones
                    extra como regalo sorpresa, calculador de precio total. En
                    este proyecto se utilizo React context para manejo del
                    estado global, como tambien hooks como useState y useEffect
                    y para los estilos se utilizo Tailwind.css
                  </Card.Text>
                  <Card.Text>
                    <hr />
                    <ul className="list-inline lista-tec d-flex justify-content-around align-items-center">
                      <li className="list-inline-item">
                        <img src={ReactIcon} alt="React" />
                      </li>
                      <li className="list-inline-item">
                        <img src={TailwindIcon} alt="Tailwind" />
                      </li>
                      <li className="list-inline-item">
                        <img src={js} alt="javascript" />
                      </li>
                    </ul>

                    <hr />
                  </Card.Text>

                  <ul className="list-inline d-flex justify-content-around lista-proyect">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/panchixnrc/regalos-advency"
                      >
                        <img
                          style={{ width: "25px" }}
                          src={Github}
                          alt="Github logo"
                        />{" "}
                        <span>Repo</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://regalos.netlify.app/"
                      >
                        <img
                          style={{ width: "25px" }}
                          src={website}
                          alt="Live demo"
                        />{" "}
                        <span>Live demo</span>
                      </a>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4 ">
              <Card
                bg="dark"
                border="success"
                style={{ width: "20rem" }}
                className="card-main"
              >
                <Card.Img
                  className="green-filter card-header-img"
                  variant="top"
                  src={modular}
                />
                <Card.Body>
                  <Card.Title>Website Modular Espacios</Card.Title>
                  <Card.Text>
                    Web para emprendimiento de construcción con contenedores.
                    Cuenta con un formulario de contacto con NodeMailer y una
                    galería para mostrar productos.
                  </Card.Text>
                  <hr className="linea-card" />
                  <ul className="list-inline lista-tec d-flex justify-content-around align-items-center">
                    <li className="list-inline-item">
                      <img src={html5} alt="html" />
                    </li>
                    <li className="list-inline-item">
                      <img src={css} alt="css" />
                    </li>
                    <li className="list-inline-item">
                      <img src={js} alt="javascript" />
                    </li>
                    <li className="list-inline-item">
                      <img src={node} alt="node" />
                    </li>
                    <li className="list-inline-item">
                      <img src={bootstrap} alt="bootstrap" />
                    </li>
                  </ul>
                  <hr />
                  <ul className="list-inline d-flex justify-content-around lista-proyect">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/panchixnrc/modularweb"
                      >
                        <img
                          style={{ width: "25px" }}
                          src={Github}
                          alt="Github logo"
                        />{" "}
                        <span>Repo</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.modularneuquen.com"
                      >
                        <img
                          style={{ width: "25px" }}
                          src={website}
                          alt="Live demo"
                        />{" "}
                        <span>Live demo</span>
                      </a>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              <Card
                bg="dark"
                border="success"
                style={{ width: "20rem" }}
                className="card-main"
              >
                <Card.Img
                  className="green-filter card-header-img"
                  variant="top"
                  src={tareas}
                />
                <Card.Body>
                  <Card.Title>Tareas App</Card.Title>
                  <Card.Text>
                    Web app para gestion de tareas realizada con React.js y
                    Tailwind.css
                  </Card.Text>
                  <hr className="linea-card" />
                  <ul className="list-inline lista-tec d-flex justify-content-around align-items-center">
                    <li className="list-inline-item">
                      <img src={ReactIcon} alt="React" />
                    </li>
                    <li className="list-inline-item">
                      <img src={css} alt="css" />
                    </li>
                    <li className="list-inline-item">
                      <img src={js} alt="javascript" />
                    </li>
                    <li className="list-inline-item">
                      <img src={node} alt="node" />
                    </li>
                    <li className="list-inline-item">
                      <img src={TailwindIcon} alt="tailwind" />
                    </li>
                  </ul>
                  <hr />
                  <ul className="list-inline d-flex justify-content-around lista-proyect">
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/panchixnrc/tareas-app"
                      >
                        <img
                          style={{ width: "25px" }}
                          src={Github}
                          alt="Github logo"
                        />{" "}
                        <span>Repo</span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tareasappfs.netlify.app/"
                      >
                        <img
                          style={{ width: "25px" }}
                          src={website}
                          alt="Live demo"
                        />{" "}
                        <span>Live demo</span>
                      </a>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
