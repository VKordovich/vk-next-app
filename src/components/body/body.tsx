"use client"

import {
    JSX,
    useState
} from 'react';
import style from './body.module.css'
import cn from 'classnames';
import {
    Button,
    HTag,
    Paragraph,
    Rating,
    Tag
} from '@/components';
import { BodyProps } from '@/components/body/body.props';

export const Body = ({ className, ...props }: BodyProps): JSX.Element => {
    const [counter, setCounter] = useState<number>(0);
    const [ratingState, setRatingState] = useState<number>(2);
    const onClickFn = () => setCounter(counter + 1);
    return (
        <div className={cn(className, style.wrapper)} {...props}>
            <div>Test</div>
            <HTag typeHeader={'h1'}><div>{counter}</div></HTag>
            <Button appearance={'ghost'} arrow={"down"} onClick={onClickFn}>Stop</Button>
            <Paragraph size={'s'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi, consequuntur eaque ex fugiat harum illum labore natus officia omnis quae quis quos voluptatum. Dolore ducimus harum natus nemo voluptatibus?</Paragraph>
            <Tag tagType={'discount'}>-10000P</Tag>
            <Tag tagType={'info'}>-10000P</Tag>
            <Tag tagType={'ghost'}>-10000P</Tag>
            <Rating rating={ratingState} setRating={setRatingState} isEditable/>
            <Rating rating={3}/>
        </div>
    );
}
