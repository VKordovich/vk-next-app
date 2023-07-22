"use client";
import { createContext, PropsWithChildren, useState } from 'react';
import { TopLevelCategory } from '@/intefaces/top-page.interface';
import { MenuItem } from '@/intefaces/home-page.interface';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
		{children}
	</AppContext.Provider>;
};
