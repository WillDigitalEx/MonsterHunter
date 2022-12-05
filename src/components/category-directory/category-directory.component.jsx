import CategoryContainer from '../category-container/category-container.component';
import './category-directory.styles.scss';

const CategoryDirectory = () => {
    const categories = [
        {
          id: 1,
          title: 'Humanoids',
          imageUrl: '/images/5e-DD-humanoids.webp'
        },
        {
          id: 2,
          title: 'Undead',
          imageUrl: '/images/5E-DD-undead-creatures.webp'
        },
        {
          id: 3,
          title: 'Elementals',
          imageUrl: '/images/Elementalsimage.webp'
        },
        {
          id: 4,
          title: 'Monstrosities',
          imageUrl: '/images/5e-DD-monstrosities.webp'
        },
        {
          id: 5,
          title: 'Oozes',
          imageUrl: '/images/5e-DD-ooze-creatures.webp'
        },
      ]
      return (
        <div className="category-directory">
          {categories.map((category) => (
            <CategoryContainer key={ category.id } category={ category } />
          ))}
        </div>
      );
}

export default CategoryDirectory;