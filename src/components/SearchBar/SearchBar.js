
import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')
    const [productState, setProductState] = useState([]);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClick = () => {
        setSearchValue('')
    }

    const handleSearchClick = async () => {
        const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
        const productsArray = await data.json()
        const newProdArray = productsArray.items.map(product => product.volumeInfo.title)

        setProductState(newProdArray)
    }

    const filterArray = productState.filter(product => {
        return product.toLowerCase().includes(searchValue.toLowerCase());
    })
    const shouldDisplayButton = searchValue.length > 2

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            <button onClick={handleClearClick}>Clear</button>

            {shouldDisplayButton? <button onClick={handleSearchClick}>search</button> : null}
            {shouldDisplayButton ? <ul style={{color:'blue'}}>
                {filterArray.map((item,i) => <li key={i} >{item}</li>)}
            </ul> : null}

        </div>
    )
}
export default SearchBar



