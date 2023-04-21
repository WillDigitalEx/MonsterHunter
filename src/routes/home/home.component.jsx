import { Outlet } from 'react-router-dom';
import CategoryDirectory from '../../components/category-directory/category-directory.component';
import Footer from '../footer/footer.component';

const Home = () => {
    return (
      <div>
        <CategoryDirectory />
        <Footer />
        <Outlet />
      </div>
    );
  }
  
  export default Home;