import React,{useEffect, useState} from 'react';
import './SearchBar.css'

const SearchBar = () => {

    const [searchValue,setSearchValue] = useState('')
    const [productState, setProductState] = useState([]);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClikc = () => {
        setSearchValue('')
    }

    const func = () => {
        console.log(productState)
    }

    const handleSearchClick = (searchValue)=>{
        
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
        .then((res)=>res.json)
        .then((productsArray)=>{
            const newProdArray = productsArray.items.map((product)=>{
                return product.volumeInfo.title
            })
            setProductState(newProdArray)
        })

      //const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
       // const productsArray = await data.json()
        //console.log(productsArray)

        //    .then((res)=> res.json())
      //      .then((productsArray)=>{
            //    const newProdArray = productsArray.items.map( product => product.volumeInfo.title )
             //   console.log(productsArray)
              //  setProductState(newProdArray)
            
    }

    //const filterArray = productState.filter( product => product.includes(searchValue))
    const filterArray = productState.filter( (product) => 
         return product.includes(searchValue))
    const shouldDisplayButton = searchValue.length >= 3
    
    return (
    <div>
         <input type="text" value={searchValue} onChange={handleInputChange} />
         <button onClick={handleSearchClick}>Clear</button>
         <button onClick={func}>func</button>
         {
            productState.map( item => {
                item.includes(searchValue)
                <div>{item}</div>
            })
         }
        
    </div>
    )
}
export default SearchBar

