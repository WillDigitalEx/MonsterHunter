import CategoryContainer from '../category-container/category-container.component';
import { DirectoryContainer } from './category-directory.styles';

const CategoryDirectory = ({ categories }) => {
  
      return (
        <DirectoryContainer>
          {categories.map((category) => (
            <CategoryContainer key={ category.id } category={ category } />
          ))}
        </DirectoryContainer>
      );
}

export default CategoryDirectory;