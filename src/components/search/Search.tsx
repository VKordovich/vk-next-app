"use client";
import styles from './Search.module.css';
import GlassIcon from '../../assets/glass.svg';
import cn from 'classnames';
// import { Button } from '../Button/Button';
import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { SearchProps } from '@/components/search/Search.props';
import { Input } from '@/components/Input/Input';
import Link from 'next/link';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push('/search')
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	};

	return (
		<form className={cn(className, styles.search)} {...props} role="search">
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button onClick={goToSearch}>
			</button>
			{/*<Button*/}
			{/*	appearance="primary"*/}
			{/*	className={styles.button}*/}
			{/*	onClick={goToSearch}*/}
			{/*	aria-label="Искать по сайту"*/}
			{/*>*/}
			{/*	<GlassIcon />*/}
			{/*</Button>*/}
		</form>
	);
};
