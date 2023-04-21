import { Dialogue, FitzDialogue } from './dialogue-box.styles';
import { Link } from 'react-router-dom';

import FitzDialogueImgUrl from '../../assets/images/fitz-dialgue-200.png';

const DialogueBox = ({dialogue = "Welcome to Fitz's Monster Emporium", extLinkUrl, ctaText}) => {
    var LinkUrl = "";
    if(extLinkUrl) { LinkUrl = <Link to={extLinkUrl} target='_blank'>{ctaText}</Link>; }
    
    return (
        <Dialogue><FitzDialogue src={FitzDialogueImgUrl} alt="Fitz"/>{dialogue} {LinkUrl}</Dialogue>
    )
}

export default DialogueBox;