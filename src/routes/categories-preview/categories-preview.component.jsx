import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import  CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
        {
            Object.keys(categoriesMap).map((monster_type) => {
                const monsters = categoriesMap[monster_type.replace(/-/g, ' ')];
                return <CategoryPreview key={monster_type.replace(/-/g, ' ')} title={monster_type.replace(/-/g, ' ')} monsters={monsters} />
            })
        }
        </Fragment>
    );
}

export default CategoriesPreview;