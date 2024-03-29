import { Metadata } from 'next';
import React from 'react';
import { LayoutProps } from '@/app/layout.props';
import { FirstLevelMenuItem } from '@/intefaces/menu.interface';
import CoursesIcon from '@/assets/courses.svg';
import { TopLevelCategory } from '@/intefaces/top-page.interface';
import ServicesIcon from '@/assets/services.svg';
import BooksIcon from '@/assets/books.svg';
import ProductsIcon from '@/assets/products.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
  return firstLevelMenu.map((menuItem) => ({
    type: menuItem.route,
  }))
}

export default function TypeLayout({children}: LayoutProps) {
  return (
      <div>{children}</div>
  )
}
