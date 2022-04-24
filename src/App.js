import logo from './logo.svg';
import './styles/App.css';
import './styles/resume.css';

function App() {
  return (
    <div>
      <div id="name-title">Ignacio Gabriel Sampedro Delgado</div>

      <div id="personal-data">
        <div id="birth-date">
          <i class="fa-solid fa-address-card"></i> 03/04/1998
        </div>
        &ensp;
        <div id="nationality">
          <i class="fa-brands fa-font-awesome"></i> Argentino
        </div>
        &ensp;
        <div id="address">
          <i class="fa-solid fa-location-dot"></i> Junin 55, Ciudad Autónoma de
          Buenos Aires
        </div>
        &ensp;
        <div id="cellphone">
          <i class="fa-solid fa-mobile"></i> +5492995077824
        </div>
        &ensp;
        <div id="mail">
          <i class="fa-solid fa-envelope"></i> isampedro@itba.edu.ar
        </div>
        &ensp;
        <div id="github">
          <i class="fa-brands fa-github"></i> https://github.com/isampedro
        </div>
      </div>

      <div class="resume-data">
        <div id="strenghts" class="section">
          <div class="section-title">
            Puntos Fuertes
            <div></div>
          </div>
          <div class="list">
            <ul>
              <li class="li-wrapper">Responsable</li>
              <li class="li-wrapper">Versátil</li>
              <li class="li-wrapper">Curioso</li>
              <li class="li-wrapper">Fan de la programación</li>
              <li class="li-wrapper">Fan del análisis de datos</li>
            </ul>
          </div>
        </div>

        <div id="hobbies" class="section">
          <div class="section-title">
            Hobbies
            <div></div>
          </div>
          <div class="list">
            <ul>
              <li class="li-wrapper">Ciclismo</li>
              <li class="li-wrapper">Navegar la Web</li>
              <li class="li-wrapper">Programar</li>
              <li class="li-wrapper">Juegos de Computadora</li>
            </ul>
          </div>
        </div>

        <div id="education" class="section">
          <div class="section-title">
            Educación
            <div></div>
          </div>
          <ul>
            <li class="li-wrapper">
              <div class="li-title">Instituto Tecnológico de Buenos Aires</div>
              <div class="li-time">03/2017 - Presente</div>
              <div class="li-status">Estudiante Avanzado</div>
            </li>
          </ul>
        </div>

        <div id="languages" class="section">
          <div class="section-title">
            Idiomas
            <div></div>
          </div>
          <ul>
            <li class="language li-wrapper">
              Español
              <div class="star-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
            </li>
            <li class="language li-wrapper">
              Inglés
              <div class="star-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
            </li>
            <li class="language li-wrapper">
              Francés
              <div class="star-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </li>
          </ul>
        </div>

        <div id="skills" class="section">
          <div class="section-title">
            Habilidades Destacables
            <div></div>
          </div>
          <div class="list">
            <ul>
              <li class="li-wrapper">
                <div class="li-title">Lenguajes de Programación</div>
                <ul>
                  <li class="skill">
                    Python
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </li>
                  <li class="skill">
                    Java
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li class="skill">
                    JavaScript
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="li-wrapper">
                <div class="li-title">SQL</div>
                <ul>
                  <li class="skill">
                    PostgreSQL
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li class="skill">
                    Oracle Database
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li class="skill">
                    Microsoft SQL
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="li-wrapper">
                <div class="li-title">No SQL</div>
                <ul>
                  <li class="skill">
                    Mongo DB
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </li>
                  <li class="skill">
                    Neo4J
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </li>
                  <li class="skill">
                    ElasticSearch
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="li-wrapper">
                <div class="li-title">Microsoft</div>
                <ul>
                  <li class="skill">
                    Power BI
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li class="skill">
                    Excel
                    <div class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div id="work-experience" class="section">
          <div class="section-title">
            Experiencia laboral
            <div></div>
          </div>
          <ul>
            <li class="li-wrapper">
              <div class="li-title">Tenaris</div>
              <div class="li-time">06/2021 - Presente</div>
              <div class="li-status">Business Solutions Trainee</div>
              <div class="li-extra"></div>
            </li>
            <li class="li-wrapper">
              <div class="li-title">IEEE WIE ITBA</div>
              <div class="li-time">11/2021 - Presente</div>
              <div class="li-status">Webmaster</div>
              <div class="li-extra">
                <a href="https://www.youtube.com/watch?v=59w_cI1gNVI&list=PLRXQn5Z1jFY8JzMAZgyMEHbbRmmgj2fUu">
                  Curso Introductorio de Power BI
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
