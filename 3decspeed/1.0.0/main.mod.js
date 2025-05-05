import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js"

class ThreeDecimalSpeedometer extends PolyMod {
    init = (pml) => {
        pml.registerClassMixin("TT.prototype", "update", MixinType.REPLACEBETWEEN, "Math.trunc(n).toString();", "Math.trunc(n).toString();", "n.toFixed(6);")
    }
}

export let polyMod = new ThreeDecimalSpeedometer();
