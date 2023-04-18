import { Link } from 'react-router-dom';
import './category-container.styles.scss';

const CategoryContainer = ({ category }) => {
    const { title, index, imageUrl } = category;
    return (
        <div className="category-container">
            <div className="background-image" style={{
            backgroundImage: `url(${ imageUrl })`,
            }} />
            <div className="category-body-container">
            <h2>{ title }</h2>
            <p><Link to={"shop/" + index.toLowerCase().replace(/\s+/g, '-')}>Shop Now</Link></p>
            </div>
      </div>
    );
}

export default CategoryContainer;