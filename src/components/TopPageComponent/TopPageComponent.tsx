"use client";
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import React, { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import {
	HTag,
	Tag
} from '@/components';
import { Sort } from '@/components/Sort/Sort';
import { SortEnum } from '@/components/Sort/Sort.props';
import { TopLevelCategory } from '@/intefaces/top-page.interface';
import { HhData } from '@/components/HhData/HhData';
import { Advantages } from '@/components/Advantages/Advantages';
import { Product } from '@/components/Product/Product';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
	const shouldReduceMotion = useReducedMotion();

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	useEffect(() => {
		dispathSort({ type: 'reset', initialState: products });
	}, [products]);
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<HTag typeHeader='h1'>{page.title}</HTag>
					{sortedProducts &&
						<Tag color='grey' tagType='ghost' aria-label={sortedProducts.length + 'элементов'}>{sortedProducts.length}</Tag>}
					<Sort sort={sort} setSort={setSort}/>
				</div>
				<div role='list'>
					{sortedProducts && sortedProducts.map(p => (
						<Product role='listitem' layout={!shouldReduceMotion} key={p._id} product={p}/>))}
				</div>
				<div className={styles.hhTitle}>
					<HTag typeHeader='h2'>Вакансии - {page.category}</HTag>
					<Tag color='red' tagType='info'>hh.ru</Tag>
				</div>
				{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
				{page.advantages && page.advantages.length > 0 && <>
					<HTag typeHeader='h2'>Преимущства</HTag>
					<Advantages advantages={page.advantages}/>
				</>}
				{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
				<HTag typeHeader='h2'>Получаемые навыки</HTag>
				{page.tags.map(t => <Tag tagType='info' key={t} color='primary'>{t}</Tag>)}
			</div>
		</>
	);
};
