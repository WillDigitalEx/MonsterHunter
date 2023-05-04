import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryContainer from '../directory-item/category-container.component';
import { DirectoryContainer, HomeTitle } from './category-directory.styles';
import DialogueBox from '../dialogue-box/dialogue-box.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

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
  const navigate = useNavigate();
  const goToShop= () => {
    navigate('/shop');
}
      return (
        <Fragment>
          <HomeTitle>FITZ'S MONSTER EMPORIUM</HomeTitle>
          <DialogueBox dialogue={`Welcome to my little monster shop! Here you can purchase any number of monsters from the very tiny to the epic and have them transported to guard your dungeon, castle or land!
          This is only a demo ecommerce site to test and demonstrate my React programming skills. You can find image credits here:`} extLinkUrl={`https://github.com/WillDigitalEx/FitzMonsterEmporium#notes-and-credits`} ctaText={`Open GitHub`}/>
          <DirectoryContainer>
            {categories.map((category) => (
              <CategoryContainer key={ category.id } category={ category } />
            ))}
          </DirectoryContainer>
          <center><Button
                buttonText="View More Monster Categories"
                buttonType = {BUTTON_TYPE_CLASSES.base}
                onClick={goToShop}
            >
          </Button></center>
        </Fragment>
      );
}

export default CategoryDirectory;