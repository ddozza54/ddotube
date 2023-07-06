import React from 'react';
import styles from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi'

export default function Searchbar() {
    return (
        <div>
            <form>
                <input type='text' placeholder='Search' />
                <button>
                    <span>
                        <BiSearch />
                    </span>
                </button>
            </form>
        </div>
    );
}

