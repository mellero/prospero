import React, { useEffect, useState } from 'react'
import { getProductByID } from '../../static/prosperoDB'
import Footer from './common/footer'
import Header from './common/header'
import Welcome from './common/welcome'
import ProductMain from './product/productMain'

/* Wrapper Component for Product Page */
export default function Product({ location }) {
	/* Takes the product ID from the page history, if necessary */
	const [id] = useState(() => location.search ? location.search.split('id=')[1] : 1)
	const [product, setProduct] = useState({})
	/* Asynchronously get the product by the id in the url */
	useEffect(() => {
		async function getProduct() {
			setProduct(await getProductByID(id))
		}
		getProduct()
	}, [id])

	return (
		<div>
			<Header />
			<Welcome isLanding={false} />
			<ProductMain product={product} />
			<Footer />
		</div>
	)
}