export interface MenuItem {
    _id: {
        secondCategory: string
    }
    pages: PageItem[];
    isOpened?: boolean;
}

export interface PageItem {
    alias: string
    title: string
    _id: string
    category: string
}
