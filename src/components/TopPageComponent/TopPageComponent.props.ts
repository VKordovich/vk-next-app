import { ProductModel } from '@/intefaces/product.interface';
import {
	TopLevelCategory,
	TopPageModel
} from '@/intefaces/top-page.interface';

export interface TopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];

}
