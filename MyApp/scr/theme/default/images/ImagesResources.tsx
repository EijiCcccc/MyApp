import Module from '../model/Module'
import AllImageKeys from '../AllImageKeys'

const ImageResources = {
    [Module.video]: {
        [AllImageKeys.checkSelect]: require("../../../../Images/video/check-select.png"),
        [AllImageKeys.check]: require("../../../../Images/video/check.png"),
        [AllImageKeys.pauseButton]: require("../../../../Images/video/pause-button.png"),
        [AllImageKeys.playButton]: require("../../../../Images/video/play-button.png"),
    },
}

export default function getImage(moduleName : any, imageName : any) {
    return ImageResources[moduleName][imageName]
}
