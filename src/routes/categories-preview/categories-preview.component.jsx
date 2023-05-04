import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import  CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const setCategoryTitle = (monsterType) => {
        var categoryTitle = monsterType.replace(/-/g, ' ');
        if(categoryTitle.substring(categoryTitle.length - 1) === "y" && categoryTitle !== "fey") {
            categoryTitle = categoryTitle.replace(/.$/,"ies");
        } else if(monsterType.substring(monsterType.length - 1) !== "s" && (categoryTitle !== "undead" && categoryTitle !== "fey")) {
            categoryTitle = monsterType + "s";
        }
    
        return categoryTitle.toUpperCase();
    }

    return (
        <Fragment>
        {
            Object.keys(categoriesMap).map((monster_type) => {
                const monsters = categoriesMap[monster_type.replace(/-/g, ' ')];
                return <CategoryPreview key={monster_type.replace(/-/g, ' ')} slug={monster_type} title={setCategoryTitle(monster_type.replace(/-/g, ' '))} monsters={monsters} />
            })
        }
        </Fragment>
    );
}

export default CategoriesPreview;