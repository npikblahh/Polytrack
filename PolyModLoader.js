/**
 * Modified PolyModLoader - iPad Securly Bypass
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

const pmlversion = "v0.5.2-1"; 
Object.defineProperty(window, "pmlversion", {
    get() { return pmlversion; },
    set(value) { console.warn("PML Version locked."); },
    configurable: true,
    enumerable: true
});

export async function checkForUpdate() { return false; }

export class PolyMod {
    constructor() {
        this.loaded = false;
        this.applyManifest = (manifest) => {
            const mod = manifest.polymod;
            this.modName = mod.name;
            this.modID = mod.id;
            this.modAuthor = mod.author;
            this.modVersion = mod.version;
            this.polyVersion = mod.targets;
            this.modDependencies = manifest.dependencies;
        };
        this.init = () => { };
        this.postInit = () => { };
        this.simInit = () => { };
        this.onGameLoad = () => { };
        this.preInit = () => { };
    }
}

export var MixinType;
(function (MixinType) {
    MixinType[MixinType["HEAD"] = 0] = "HEAD";
    MixinType[MixinType["TAIL"] = 1] = "TAIL";
    MixinType[MixinType["OVERRIDE"] = 2] = "OVERRIDE";
    MixinType[MixinType["INSERT"] = 3] = "INSERT";
    MixinType[MixinType["CLASSREMOVE"] = 4] = "CLASSREMOVE";
    MixinType[MixinType["REPLACEBETWEEN"] = 5] = "REPLACEBETWEEN";
    MixinType[MixinType["REMOVEBETWEEN"] = 6] = "REMOVEBETWEEN";
    MixinType[MixinType["CLASSREPLACE"] = 7] = "CLASSREPLACE";
    MixinType[MixinType["CLASSINSERT"] = 8] = "CLASSINSERT";
})(MixinType || (MixinType = {}));

export class PolyModLoader {
    constructor(polyVersion, pmlVersion) {
        this.polyVersion = polyVersion;
        this.allMods = [];
        this.pmlVersion = pmlVersion;
    }

    async importMods() {
        const ui = document.getElementById("ui");
        if (!ui) return;
        const loadingDiv = document.createElement("div");
        loadingDiv.style.cssText = "display:flex;position:absolute;width:100%;height:100%;background:#192042;color:white;align-items:center;justify-content:center;z-index:9999;";
        loadingDiv.innerHTML = "<h1>PML Bypass Active - Loading...</h1>";
        ui.appendChild(loadingDiv);
        
        // This is where pmlcore and pmlapi would be fetched if needed
        console.log("Fetching dependencies from GitHub Raw...");
        setTimeout(() => loadingDiv.remove(), 2500);
    }
}
