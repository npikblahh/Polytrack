/**
 * Modified PolyModLoader for School iPad/Securly Bypass
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

// --- BYPASS START ---
// We hardcode this to prevent the Cloudflare/Securly loop on Codeberg
const pmlversion = "v0.5.2-1"; 
Object.defineProperty(window, "pmlversion", {
    get() { return pmlversion; },
    set(value) { console.warn("PML Version locked."); },
    configurable: true,
    enumerable: true
});
// --- BYPASS END ---

var _EditorExtras_editorClass, _EditorExtras_categoryDefaults, _EditorExtras_simBlocks, _EditorExtras_modelUrls, _PolyDB_instances, _PolyDB_db, _PolyDB_getDb, _PolyModLoader_instances, _PolyModLoader_polyVersion, _PolyModLoader_allMods, _PolyModLoader_simWorkerClassMixins, _PolyModLoader_simWorkerFuncMixins, _PolyModLoader_settings, _PolyModLoader_settingConstructor, _PolyModLoader_defaultSettings, _PolyModLoader_latestSetting, _PolyModLoader_keybindings, _PolyModLoader_defaultBinds, _PolyModLoader_bindConstructor, _PolyModLoader_latestBinding, _PolyModLoader_pmlVersion, _PolyModLoader_polyModUrls;

function isElectron() { return false; }
function isAndroidApp() { return false; }
export function isApp() { return false; }

// Disabled update check to prevent Securly from hanging on the external API
export async function checkForUpdate() {
    console.log("[PML] Update check skipped to bypass school filters.");
    return false;
}

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
            this.assetFolder = "assets";
            this.modDependencies = manifest.dependencies;
        };
        this.init = (pmlInstance) => { };
        this.postInit = () => { };
        this.simInit = () => { };
        this.onGameLoad = () => { };
        this.preInit = (pmlInstance) => { };
        this.offlineMode = false;
    }
    get author() { return this.modAuthor; }
    get id() { return this.modID; }
    get name() { return this.modName; }
    get version() { return this.modVersion; }
    get isLoaded() { return this.loaded; }
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

class PolyDB {
    constructor(pml) {
        _PolyDB_instances.add(this);
        _PolyDB_db.set(this, void 0);
        this.cacheMods = true;
    }
    async saveMod(baseUrl, version, manifest) {
        const localDb = await __classPrivateFieldGet(this, _PolyDB_instances, "m", _PolyDB_getDb).call(this);
        // REDIRECTS FOR PMLCORE AND PMLAPI
        let fetchUrl = `${baseUrl}/${version}/${manifest?.polymod.main}`;
        if (fetchUrl.includes("pmlcore")) fetchUrl = "https
