import CategoryContainer from '../category-container/category-container.component';
import './category-directory.styles.scss';

const CategoryDirectory = ({ categories }) => {
  
      return (
        <div className="category-directory">
          {categories.map((category) => (
            <CategoryContainer key={ category.id } category={ category } />
          ))}
        </div>
      );
}

export default CategoryDirectory;