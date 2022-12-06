import CategoryDirectory from '../../components/category-directory/category-directory.component';

const Home = () => {
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
      <CategoryDirectory categories={ categories }/>
    );
  }
  
  export default Home;