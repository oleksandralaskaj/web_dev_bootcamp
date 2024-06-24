import './App.css'
import {Header} from "./scripts/Header.jsx";
import {Footer} from "./scripts/Footer.jsx";
import {ProductList} from "./scripts/ProductList.jsx";


function App() {

    return (
        <>
            <Header/>
            <div id="main">
                <nav className="filter">
                    <label htmlFor="filter">Filter</label>
                    <input type="text" name="filter" id="filter" placeholder="enter search term"/>
                </nav>
                <ProductList />
            </div>
            <Footer/>
        </>
    )
}

export default App
