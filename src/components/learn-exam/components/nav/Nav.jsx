import React from 'react'
import { useProduct } from '../../../../hooks/useProduct'

function Nav() {
    const { products } = useProduct();

    return (
        <nav className='d-flex pt-3 justify-content-between align-items-center'>
            <div>
                <p style={{ fontSize: "34px" }}>LOGO</p>
            </div>
            <div className='d-flex align-items-center gap-4'>
                <div className="search d-flex justify-content-center align-items-center text-white">
                    <i className='bi bi-search'></i>
                </div>
                <div className="cart d-flex justify-content-center align-items-center">
                    <p>
                        Cart - <span>{products.length}</span>
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Nav