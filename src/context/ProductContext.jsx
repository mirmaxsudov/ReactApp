import React, { createContext, useContext, useState } from 'react'

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Apple",
            desc: "Apple is a fruit and it is red. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable.",
            price: 100,
            imgLink: "https://images.pexels.com/photos/163357/pexels-photo-163357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            quantity: 40,
        },
        {
            id: 2,
            title: "Orange",
            desc: "Orange is a fruit and it is orange. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable.",
            price: 200,
            imgLink: "https://images.pexels.com/photos/163357/pexels-photo-163357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            quantity: 50,
        },
        {
            id: 3,
            title: "Banana",
            desc: "Banana is a fruit and it is yellow. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable.",
            price: 300,
            imgLink: "https://images.pexels.com/photos/163357/pexels-photo-163357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            quantity: 60,
        },
        {
            id: 4,
            title: "Mango",
            desc: "Mango is a fruit and it is green. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable.",
            price: 400,
            imgLink: "https://images.pexels.com/photos/163357/pexels-photo-163357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            quantity: 70,
        },
        {
            id: 5,
            title: "Watermelon",
            desc: "Watermelon is a fruit and it is green. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable. It is also a fruit and it is red. It is also a vegetable.",
            price: 500,
            imgLink: "https://images.pexels.com/photos/163357/pexels-photo-163357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            quantity: 80,
        },
    ]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}