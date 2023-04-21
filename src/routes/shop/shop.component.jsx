import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryPage from '../category-page/category-page.component';

import Footer from '../footer/footer.component';

const Shop = () => {

    return (
        <Fragment>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":monsterType" element={<CategoryPage />} />
            </Routes>
            <Footer />
        </Fragment>
    );
};

export default Shop;