import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryPage from '../category-page/category-page.component';

import './shop.styles.scss';

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":monsterType" element={<CategoryPage />} />
        </Routes>
    );
};

export default Shop;