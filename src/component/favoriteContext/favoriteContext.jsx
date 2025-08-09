// src/contextapi/favoriteContext.js
import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // تحميل المفضلات من localStorage عند التحميل
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // حفظ التغيرات إلى localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (product) => {
        const exists = favorites.find((item) => item.id === product.id);
        if (exists) {
            setFavorites(favorites.filter((item) => item.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
