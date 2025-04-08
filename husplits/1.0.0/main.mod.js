import { PolyMod, MixinType } from "https://cdn.jsdelivr.net/gh/0rangy/PolyModLoader@0.5.0/PolyModLoader.js";


class HUSplits extends PolyMod {
    init = (pml) => {
        this.modPmlInstance = pml;
        console.log(pml.getFromPolyTrack('pP'))
        pml.registerFuncMixin("pP", MixinType.INSERT, `yP(this, eP, "f").notificationAudioEnabled = !0,`, () => {
            console.log("AAA");
            car.addCheckpointCallback((e) => {
                console.log(e);
            });
        })
        console.log(pml.getFromPolyTrack('pP'))
    }
}

export let polyMod = new HUSplits();