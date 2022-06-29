import { useSelector } from 'react-redux';
import Tag from './Tag';
import './Tags.css';

const Tags = () => {
    const tags = useSelector((productReducer) => productReducer.product.product.tags) || [];
    return (
        <div className='tags'>
            {tags.map(tag => <Tag key={tag} tagName={tag} />)}
        </div>
    )
}

export default Tags;