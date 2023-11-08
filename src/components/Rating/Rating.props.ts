import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import { FieldError } from 'react-hook-form';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    error?: FieldError | undefined;
    setRating?: (rating: number) => void;
}
