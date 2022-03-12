
import { getScreenScale } from '../../../commons/utils/screenUtil';
import AllSizeKeys from '../AllSizeKeys';

//设置公共size
const Sizes = {
    [AllSizeKeys.videoListCellHeight]: 258 * getScreenScale(),
    [AllSizeKeys.lineHeight]: 2,
}

export default function getSize(sizeName : any) {
    return Sizes[sizeName]
}
