import SearchBar from "./SearchBar"

function NavBar({onSearch}){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BookShelf</a>
    <SearchBar onSearch={onSearch}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
   
    </div>
  </div>
</nav>
        </div>
    )
}
export default NavBar