import { useState } from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import './styles.scss';
import item01 from '../../assets/images/item-01.png';
import item02 from '../../assets/images/item-02.png';
import item03 from '../../assets/images/item-03.png';

function Home() {
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="d-flex flex-column vh-100 bg container">
      <Header title="GitHub Repos Viewer" />

      <div className="d-flex flex-column flex-grow-1 justify-content-lg-center align-items-center">
        <div className="row w-100 mb-4 infos">
          <div className="col-12 col-lg-4 d-flex justify-content-center flex-column align-items-center text-center flex-lg-row text-lg-start">
            <img width="60px" height="60px" src={item01} alt="info-1" />
            <p className="d-grid mx-2">
              Busque por <span>usuários</span>
            </p>
          </div>

          <div className="col-12 col-lg-4 mt-4 mt-lg-0 d-flex justify-content-center flex-column align-items-center text-center flex-lg-row text-lg-start">
            <img width="60px" height="60px" src={item02} alt="info-1" />
            <p className="d-grid mx-2">
              Descubra maiores <span>detalhes</span>
            </p>
          </div>

          <div className="col-12 col-lg-4 mt-4 mt-lg-0 d-flex justify-content-center flex-column align-items-center text-center flex-lg-row text-lg-start">
            <img width="60px" height="60px" src={item03} alt="info-1" />
            <p className="d-grid mx-2">
              Veja tudo na <span>íntegra</span>
            </p>
          </div>
        </div>

        <div className="row w-100 mt-4">
          <div className="col-12 col-lg-8 mx-auto">
            <SearchForm onError={setError} />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
