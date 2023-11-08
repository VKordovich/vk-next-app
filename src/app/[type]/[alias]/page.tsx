import axios from 'axios';
import {
    TopLevelCategory,
    TopPageModel
} from '@/intefaces/top-page.interface';
import { ProductModel } from '@/intefaces/product.interface';
import { MenuItem } from '@/intefaces/home-page.interface';
import { FirstLevelMenuItem } from '@/intefaces/menu.interface';
import CoursesIcon from '@/assets/courses.svg';
import ServicesIcon from '@/assets/services.svg';
import BooksIcon from '@/assets/books.svg';
import ProductsIcon from '@/assets/products.svg';
import React from 'react';
import { notFound } from 'next/navigation';
import { TopPageComponent } from '@/components/TopPageComponent/TopPageComponent';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

async function getPage(alias: string) {
    return await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`);
}

async function getProducts(category: string) {
    return await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
        category: category,
        limit: 10
    });
}

async function getMenu(firstCategory: TopLevelCategory) {
    return await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    });
}

function getFirstCategoryLevel(type: string): TopLevelCategory {
    const firstCategory = firstLevelMenu.find(item => item.route === type);
    if(!firstCategory) notFound();
    return firstCategory.id;
}

export async function generateStaticParams({params: {type}}: Product) {
    const firstCategory = getFirstCategoryLevel(type);
    const { data: menuItems } = await getMenu(firstCategory ?? 0);
    const res = menuItems.map((menuItem) =>
        menuItem.pages.map((page) => ({
            alias: page.alias,
        })))
    return res.flat();
}

export default async function TopPage({params: {type, alias}}: Product) {
    const firstCategory = getFirstCategoryLevel(type);
    let products = [];
    let page: TopPageModel;
    try {
        const {data: pageData} = await getPage(alias);
        page = pageData;
        const {data: productsData} = await getProducts(page.category);
        products = productsData;
    } catch (e) {
        notFound();
    }

    return (
        <>
            <TopPageComponent
                page={page}
                products={products}
                firstCategory={firstCategory}
            />
        </>
    )
}

interface Product {
    params: {
        type: string,
        alias: string
    }
}
