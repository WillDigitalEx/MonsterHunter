import { useNavigate } from 'react-router-dom';
import { BackgroundImage, CategoriesContainer, CategoryBody, CategoryTitle, CategoryText  } from './category-container.styles';


const CategoryContainer = ({ category }) => {
    const { title, index, imageUrl } = category;
    const navigate = useNavigate();
    const route = "shop/" + index.toLowerCase().replace(/\s+/g, '-');
    const onNavigateHandler = () => navigate(route);

    return (
        <CategoriesContainer onClick={onNavigateHandler}>
            <BackgroundImage
                imageUrl = { imageUrl }
            />
            <CategoryBody>
                <CategoryTitle>{ title }</CategoryTitle>
                <CategoryText>Shop Now</CategoryText>
            </CategoryBody>
      </CategoriesContainer>
    );
}

export default CategoryContainer;