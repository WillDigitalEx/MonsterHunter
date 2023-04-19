import MonsterCard from '../monster-card/monster-card.component';

import { Link } from 'react-router-dom';

import { CategoryPreviewContainer, CatPreviewTitle, PreviewGrid } from './category-preview.styles';

const CategoryPreview = ({ title, monsters }) => {
    return (
        <CategoryPreviewContainer>
            <CatPreviewTitle>
                <Link to={title.replace(/\s+/g, '-')}>{title.toUpperCase()}</Link>
            </CatPreviewTitle>
            <PreviewGrid>
                {
                    monsters
                        .filter((_, idx) => idx < 4)
                        .map((monster) => 
                            <MonsterCard key={monster.index} monster={monster} />
                        )
                }
            </PreviewGrid>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;