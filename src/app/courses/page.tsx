import axios from 'axios';
import { MenuItem } from '@/intefaces/home-page.interface';
import React from 'react';

async function getMenu() {
    return await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory: 0
    });
}

export default function Courses(): React.JSX.Element {
    let menu: MenuItem[] = [];
    getMenu().then(({data}) => menu = data);
    return (
        <>
            courses
        </>
    )
}
