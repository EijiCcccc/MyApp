
import { getScreenScale } from '../../../commons/utils/screenUtil';
import AllSizeKeys from '../AllSizeKeys';

const Sizes = {
    [AllSizeKeys.videoListHeight]: 258 * getScreenScale(),
}

export default function getSize(sizeName : any) {
    return Sizes[sizeName]
}
