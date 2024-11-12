
function RandomQuote({quote,color,onChangeQuote}){
  return(
    <div className="container mt2">
      <div className={`card text-white ${color}`}>
        <div className="card-body">
          <h2 className="card-title mb-3">A Random Quote</h2>
          <p className="card-text">"{quote.content}"</p>
          <footer className="blockquote-footer text-white">{quote.author}</footer>
        </div>
        <button className="btn btn-light" onClick={onChangeQuote}>Quote Generator</button>
      </div>
    </div>
  );

}
export default RandomQuote