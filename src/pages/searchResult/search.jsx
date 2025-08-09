import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SlideProduct from '../../component/slideProducts/SlideProduct';
import './search.css';

function Search() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('query');

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
                setResults(response.data.products);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (searchTerm) {
            fetchSearchResults();
        }
    }, [searchTerm]);

    return (
        <div className='CategoryPage container' data-aos="fade-up">
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading ..</span>
                    </div>
                    <p className="mt-3">Loading ...</p>
                </div>
            ) : (
                <>
                    {results.length > 0 ? (
                        <SlideProduct data={results} title={`${searchTerm}`} />
                    ) : (
                        <div className="text-center py-5">
                            <p>Not Found "{searchTerm}"</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Search;
