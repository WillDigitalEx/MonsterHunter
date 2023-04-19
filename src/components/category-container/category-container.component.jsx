import { Link } from 'react-router-dom';
import { BackgroundImage, CategoriesContainer, CategoryBody, CategoryTitle, CategoryText  } from './category-container.styles';

const CategoryContainer = ({ category }) => {
    const { title, index, imageUrl } = category;
    return (
        <CategoriesContainer>
            <BackgroundImage style={{
                backgroundImage: `url(${ imageUrl })`,
            }} />
            <CategoryBody>
                <CategoryTitle>{ title }</CategoryTitle>
                <CategoryText><Link to={"shop/" + index.toLowerCase().replace(/\s+/g, '-')}>Shop Now</Link></CategoryText>
            </CategoryBody>
      </CategoriesContainer>
    );
}

export default CategoryContainer;