import { PolyMod, MixinType } from "https://cdn.jsdelivr.net/gh/0rangy/PolyModLoader@0.5.0/PolyModLoader.js";

class OrangysCarSwitcherMod extends PolyMod {
    init = (pml) => {
        this.pmlInstance = pml;
        this.carModels = [
            {
                "name": "Poly Car",
                "key": null,
                "customId": null,
                "url": "models/car.glb",
                "size": null,
                "uploadedAt": null
            },
            {
                "name": "GoldCart",
                "key": "c7wuYTGBfynJjCbNdrIKqB2EUrtJTyIHdYLS3h4iv1NzDZCg",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJjCbNdrIKqB2EUrtJTyIHdYLS3h4iv1NzDZCg",
                "size": 398456,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "car2",
                "key": "c7wuYTGBfynJfVhWmFED2gmA0RHYbh7uyUzX5LerifE3pScx",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJfVhWmFED2gmA0RHYbh7uyUzX5LerifE3pScx",
                "size": 879068,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "McBoatCar",
                "key": "c7wuYTGBfynJK63HBbQtG26yhvmfUOigXoF5xbMSCKP7d9pW",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJK63HBbQtG26yhvmfUOigXoF5xbMSCKP7d9pW",
                "size": 94684,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Amogus",
                "key": "c7wuYTGBfynJxN8puYdUaPKjzk6tSDreUXHTdZpfmgvuRGh5",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJxN8puYdUaPKjzk6tSDreUXHTdZpfmgvuRGh5",
                "size": 256640,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "HitboxCar",
                "key": "c7wuYTGBfynJn6uXiAKme4QGPc1gpDbvsEjuWakARqxylTwd",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJn6uXiAKme4QGPc1gpDbvsEjuWakARqxylTwd",
                "size": 63836,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "witchCar",
                "key": "c7wuYTGBfynJZA9M2gYSZLuFhJOpPjqR3kyB8T42KrtDGl6E",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJZA9M2gYSZLuFhJOpPjqR3kyB8T42KrtDGl6E",
                "size": 283052,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Pingu",
                "key": "c7wuYTGBfynJZTaDzLYSZLuFhJOpPjqR3kyB8T42KrtDGl6E",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJZTaDzLYSZLuFhJOpPjqR3kyB8T42KrtDGl6E",
                "size": 11651520,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "AudiETron",
                "key": "c7wuYTGBfynJEed4ncORLjkaq1mXhTnUpue4tGcIfs59BWwY",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJEed4ncORLjkaq1mXhTnUpue4tGcIfs59BWwY",
                "size": 11083844,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Sandwich",
                "key": "c7wuYTGBfynJJmVnUTFBAMeqHVZ2nYKNaTb0t1IXiCPcxGds",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJJmVnUTFBAMeqHVZ2nYKNaTb0t1IXiCPcxGds",
                "size": 12752160,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "TrackmaniaStadium",
                "key": "c7wuYTGBfynJENOpn1RLjkaq1mXhTnUpue4tGcIfs59BWwYC",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJENOpn1RLjkaq1mXhTnUpue4tGcIfs59BWwYC",
                "size": 3352276,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Forklift",
                "key": "c7wuYTGBfynJBl2TMlbD7YZNR3rwFjug5CQWi1pLOVIlbfnz",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJBl2TMlbD7YZNR3rwFjug5CQWi1pLOVIlbfnz",
                "size": 2762152,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Banana",
                "key": "c7wuYTGBfynJxNHiuG2UaPKjzk6tSDreUXHTdZpfmgvuRGh5",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJxNHiuG2UaPKjzk6tSDreUXHTdZpfmgvuRGh5",
                "size": 15683264,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "CheckPointCar",
                "key": "c7wuYTGBfynJUCxOzADv24FliUaDJM7HST8AsR36wBjZenu1",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJUCxOzADv24FliUaDJM7HST8AsR36wBjZenu1",
                "size": 74432,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Octane",
                "key": "c7wuYTGBfynJKYNjKoVQtG26yhvmfUOigXoF5xbMSCKP7d9p",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJKYNjKoVQtG26yhvmfUOigXoF5xbMSCKP7d9p",
                "size": 1586248,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "spookycar",
                "key": "c7wuYTGBfynJ8AxAvEiktRJLgrOHNCpnyUzMjQKde5SswbTG",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJ8AxAvEiktRJLgrOHNCpnyUzMjQKde5SswbTG",
                "size": 115236,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "carPumpkin",
                "key": "c7wuYTGBfynJnIQ8S3Kme4QGPc1gpDbvsEjuWakARqxylTwd",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJnIQ8S3Kme4QGPc1gpDbvsEjuWakARqxylTwd",
                "size": 2785492,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "F16",
                "key": "c7wuYTGBfynJZIjb3C1YSZLuFhJOpPjqR3kyB8T42KrtDGl6",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJZIjb3C1YSZLuFhJOpPjqR3kyB8T42KrtDGl6",
                "size": 3961264,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "LightningMcQueen",
                "key": "c7wuYTGBfynJQjDxtprZLW4ENqTUY5p0hxVok7MuASwjDFy8",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJQjDxtprZLW4ENqTUY5p0hxVok7MuASwjDFy8",
                "size": 916444,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "Delorean",
                "key": "c7wuYTGBfynJQ4wU3BZLW4ENqTUY5p0hxVok7MuASwjDFy8i",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJQ4wU3BZLW4ENqTUY5p0hxVok7MuASwjDFy8i",
                "size": 22366820,
                "uploadedAt": "2024-10-31T22:09:29.000Z"
            },
            {
                "name": "MetalicCar",
                "key": "c7wuYTGBfynJDPW4tkNWcjklR4LEXY1tAaCzJPZnNbTB6Sy9",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJDPW4tkNWcjklR4LEXY1tAaCzJPZnNbTB6Sy9",
                "size": 78812,
                "uploadedAt": "2024-10-31T22:09:28.000Z"
            },
            {
                "name": "Cybertruck",
                "key": "c7wuYTGBfynJBMuRnSbD7YZNR3rwFjug5CQWi1pLOVIlbfnz",
                "customId": null,
                "url": "https://utfs.io/f/c7wuYTGBfynJBMuRnSbD7YZNR3rwFjug5CQWi1pLOVIlbfnz",
                "size": 131784,
                "uploadedAt": "2024-10-31T22:09:28.000Z"
            }
        ]
        this.carList = []
        // this.carApi = {
        //     /**
        //      * reloads all car models based on template model
        //      * template model is stored in Pg.models or modAPI.templateCar.models
        //      */
        //     reloadAllCarModels:()=>{
        //         for(let x of carList){
        //             let carColor = x.getColors()
        //             for(let i of x.modelData.children){
        //                 for(let z of Object.keys(Pg.models)){
        //                     if(Pg.models[z].name == i.name){
        //                         i.geometry = Pg.models[z].geometry
        //                         i.material = Pg.models[z].material
        //                     }
        //                 }
        //             }
        //             {
        //                 const e = document.createElement("canvas");
        //                 e.width = 2048,
        //                     e.height = 2048;
        //                 const t = e.getContext("2d");
        //                 if (null == t)
        //                     throw "Failed to get context for car texture";
        //                 const n = new Cn(e);
        //                 let i;
        //                 n.flipY = !1,
        //                     n.anisotropy = Ov(x, $g, "f").getMaxAnisotropy(),
        //                     n.needsUpdate = !0,
        //                     Iv(x, av, t, "f"),
        //                     Iv(x, ov, n, "f");
        //                 let rand=wu.random();
        //                 Iv(x, lv, rand, "f"),
        //                     Ov(x, Cg, "m", yv).call(x),
        //                     Iv(x, sv, {
        //                         value: new Un(0,0,0)
        //                     }, "f"),
        //                     i = Array.isArray(Ov(x, tv, "f").material) ? Ov(x, tv, "f").material : [Ov(x, tv, "f").material];
        //                 for (let e = 0; e < i.length; ++e) {
        //                     const t = i[e];
        //                     "Main" == t.name ? t.onBeforeCompile = e => {
        //                             e.fragmentShader = "uniform sampler2D carColorPattern;\nuniform vec3 carColorSecondary;\n" + e.fragmentShader,
        //                                 e.fragmentShader = e.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );", "float colorSource = texture(carColorPattern, vUv).a;\nvec4 diffuseColor = vec4( carColorSecondary * colorSource + diffuse * (1.0 - colorSource), opacity );"),
        //                                 e.uniforms.carColorPattern = {
        //                                     value: n
        //                                 },
        //                                 e.uniforms.carColorSecondary = Ov(x, sv, "f"),
        //                             null == e.defines && (e.defines = {}),
        //                                 e.defines.USE_UV = !0
        //                         }
        //                         : "Metal" == t.name ? t.needsUpdate = !0 : "BrakeLight" == t.name && Iv(x, rv, t, "f")
        //                 }
        //             }
        //             x.setColors(carColor)
        //         }
        //     },
        //     /**
        //      * @param {String} carPath
        //      * @returns {Promise<Object>}
        //      */
        //     getComputedCarModel: async (carPath)=>{
        //         return new Promise((resolve, reject) => {
        //             fd.load(carPath, (t) => {
        //                 function n(e) {
        //                     const n = t.scene.getObjectByName(e);
        //                     if (null == n) throw 'Mesh "' + e + '" does not exist';
        //                     if (0 == n.children.length) {
        //                         const e = n;
        //                         return (
        //                             e.updateMatrixWorld(!0),
        //                                 e.geometry.applyMatrix4(e.matrix.clone()),
        //                                 e.matrix.identity(),
        //                                 e
        //                         );
        //                     }
        //                     const i = dd(
        //                         n.children.map((e) => e.geometry),
        //                         !0,
        //                     );
        //                     n.updateMatrixWorld(!0), i.applyMatrix4(n.matrix.clone());
        //                     const r = n.children.map((e) => e.material),
        //                         a = new Br(i, r);
        //                     return (a.name = e), a;
        //                 }
        //                 function i(e) {
        //                     let t;
        //                     return (
        //                         (t = Array.isArray(e.material) ? e.material : [e.material]),
        //                             t.forEach((e) => (e.side = M)),
        //                             e
        //                     );
        //                 }
        //                 let resVal = {
        //                     chassis: i(n("Body")),
        //                     suspension: i(n("Suspension")),
        //                     suspensionFL: i(n("SuspensionFL")),
        //                     suspensionFR: i(n("SuspensionFR")),
        //                     suspensionBL: i(n("SuspensionBL")),
        //                     suspensionBR: i(n("SuspensionBR")),
        //                     wheelFL: i(n("WheelFL")),
        //                     wheelFR: i(n("WheelFR")),
        //                     wheelBL: i(n("WheelBL")),
        //                     wheelBR: i(n("WheelBR")),
        //                     collisionShapeVertices: Ov(Pg, Pg, "m", Lv).call(Pg, n("Collision")),
        //                 }
        
        //                 resVal.wheelFL.geometry.translate(-.627909, .218824, -1.3478),
        //                     resVal.wheelFR.geometry.translate(.627909, .218824, -1.3478),
        //                     resVal.wheelBL.geometry.translate(-.720832, .218824, 1.52686),
        //                     resVal.wheelBR.geometry.translate(.720832, .218824, 1.52686),
        //                     resVal.wheelFL.geometry.rotateZ(Math.PI),
        //                     resVal.wheelFR.geometry.rotateZ(Math.PI),
        //                     resVal.wheelBL.geometry.rotateZ(Math.PI),
        //                     resVal.wheelBR.geometry.rotateZ(Math.PI)
        //                 resolve(resVal)
        //             });
        //         });
        //     },
        //     /**
        //      * @param {String} carPath
        //      * @returns {undefined}
        //      */
        //     setNewCarTemplateModel:async (carPath)=>{
        
        //         var newCar = typeof carPath == "string"? await modAPI.getComputedCarModel(carPath): carPath //so you can submit a computed model
        //         Pg.models = await newCar
        //         return await newCar
        //     },
        //     carList: this.carList,
        //     templateCar: Pg


        // }
        pml.registerFuncMixin("hD", MixinType.INSERT, "u()", () => {
            ;setTimeout(() => {
                console.log(document.getElementById("ui").childNodes[0].childNodes[0]);
                const modButtonCarChooser = document.createElement("button");
            modButtonCarChooser.className = "button",
                modButtonCarChooser.innerHTML = '<img class="button-icon" src="images/test.svg"> ',
                modButtonCarChooser.append(document.createTextNode(t.get("Select Car")));
            const carSelectMenu = document.createElement("div");
            carSelectMenu.className = "car-select-menu";
            document.getElementById("ui").childNodes[0].childNodes[0].appendChild(carSelectMenu);
            carSelectMenu.style.position = "absolute";
            carSelectMenu.style.visibility = "hidden";
            carSelectMenu.style.width = "90%";
            carSelectMenu.style.transform = "translate(-50%)";
            carSelectMenu.style.top = "5rem";
            carSelectMenu.style.left = "50%";
            carSelectMenu.innerHTML = `${ActivePolyModLoader.getMod("carswitcher").carModels.map(carModel =>{
                return `<button class = "button" onclick=\'javascript:{this.querySelector(".loading").style.display = "";window.modAPI.setNewCarTemplateModel("${carModel.url}").then((x)=>{window.localStorage.MyCar = "${carModel.url}";window.modAPI.reloadAllCarModels();this.querySelector(".loading").style.display = "none"})}'>${carModel.name}<span class = "loading" style = "display:none;"> loading</span></button>`
            })}`;
            carSelectMenu.style.backgroundColor = "var(--surface-color)";
            modButtonCarChooser.addEventListener("click", ( () => {
                        carListUpdate_withDelay();
                    carSelectMenu.style.visibility = carSelectMenu.style.visibility == "visible" ? "hidden" : "visible";
                }
            )),
            document.getElementById("ui").childNodes[0].childNodes[0].appendChild(modButtonCarChooser);
            }, 200)
        })
    }
}

export let polyMod = new OrangysCarSwitcherMod();