import axios from 'axios';
import { TopPageModel } from '@/intefaces/top-page.interface';
import { ProductModel } from '@/intefaces/product.interface';

async function getPage(alias: string) {
    return await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`);
}

async function getProducts(category: string) {
    return await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
        category: category,
        limit: 10
    });
}

export default async function Product({params: {alias}}: Product): JSX.Element {
    const {data: page} = await getPage(alias);
    const {data: product} = await getProducts(page.category);
    return (
        <>
            {product.length}
            {/*<ul>*/}
            {/*    {menu.map((cat) => <li key={cat._id.secondCategory}>{cat._id.secondCategory}</li>)}*/}
            {/*</ul>*/}
        </>
    )
}

interface Product {
    params: {
        alias: string
    }
}
