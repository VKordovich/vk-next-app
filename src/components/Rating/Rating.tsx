import {
    JSX,
    useEffect,
    useState,
    KeyboardEvent
} from 'react';
import style from './Rating.module.css'
import cn from "classnames";
import {RatingProps} from "@/components/Rating/Rating.props";
import StarIcon from '@/assets/Star.svg'

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratings, setRatings] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {constructRating(rating)}, [rating]);
    const constructRating = (currentRating: number) => {
        const updatedRatings = ratings.map((r, i) => (
            <StarIcon
                key={i}
                className={cn(style.star, {
                    [style.filled]: i < currentRating,
                    [style.editable]: isEditable
                })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onClick={() => clickRating(i + 1)}
                onKeyDown={(e: KeyboardEvent<SVGAElement>) => keyDownRating(e, i + 1)}
                tabIndex={isEditable ? 0 : -1}
            ></StarIcon>
        ));
        setRatings(updatedRatings)
    }

    const changeDisplay = (index: number) => {
        if(!isEditable) return;
        constructRating(index);
    }

    const clickRating = (index: number) => {
        if(!isEditable || !setRating) return;
        setRating(index);
    }

    const keyDownRating = (e: KeyboardEvent<SVGAElement>, index: number) => {
        if(!(e.code === "Space" && isEditable) || !setRating) return;
        setRating(index);
    }

    return (
        <div {...props} onMouseLeave={() => changeDisplay(rating)}>
            {ratings.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}
