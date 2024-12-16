import './styles.scss';

function Loading() {
  return (
    <div className="text-center my-4">
      <div className="spinner-border text-light" role="status" />
      <p>Carregando...</p>
    </div>
  );
}

export default Loading;
