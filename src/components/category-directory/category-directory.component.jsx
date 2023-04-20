import CategoryContainer from '../directory-item/category-container.component';
import { DirectoryContainer } from './category-directory.styles';

const categories = [
  {
    id: 1,
    title: 'Humanoids',
    index: 'humanoid',
    imageUrl: '/images/5e-DD-humanoids.webp',
  },
  {
    id: 2,
    title: 'Undead',
    index: 'undead',
    imageUrl: '/images/5E-DD-undead-creatures.webp',
  },
  {
    id: 3,
    title: 'Elementals',
    index: 'elemental',
    imageUrl: '/images/Elementalsimage.webp'
  },
  {
    id: 4,
    title: 'Monstrosities',
    index: 'monstrosity',
    imageUrl: '/images/5e-DD-monstrosities.webp'
  },
  {
    id: 5,
    title: 'Oozes',
    index: 'ooze',
    imageUrl: '/images/5e-DD-ooze-creatures.webp'
  },
]
const CategoryDirectory = () => {

      return (
        <DirectoryContainer>
          {categories.map((category) => (
            <CategoryContainer key={ category.id } category={ category } />
          ))}
        </DirectoryContainer>
      );
}

export default CategoryDirectory;