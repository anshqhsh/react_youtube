import styles from './search_header.module.css'
import React, { useRef } from 'react';
import { useReducer } from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef(); //useRef를 써야 react Hook에서 메모가됨 input에 ref로 연결해주면된다.
    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () =>{
        handleSearch();
    };

    const onKeyPress = (event) =>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    };
    return (
        <header className={styles.header}>
            <div className = {styles.logo}>
                <img className={styles.img} src="images/logo.png" alt="logo"/>
                <h1 className={styles.title}>Youtube</h1>
            </div>               
            <input
                ref = {inputRef} 
                className={styles.input} 
                type ="search" 
                placeholder="Search..." 
                onKeyPress={onKeyPress}/>
            <button className={styles.button} type="sumit" onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
            </button>
        </header>
    )
}

export default SearchHeader;