import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listProducts } from '../actions/prodList'
import { ProductCards } from '../components/ProductCards'


const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>
            <section>
                <ProductCards />
            </section>
        </div>
    )
}

export default Home
