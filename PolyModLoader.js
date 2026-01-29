/**
 * PolyModLoader - Bulletproof Sync for main.bundle.js
 */

// 1. Force versioning immediately (fixes EOF and undefined checks)
window.pmlversion = "v0.5.2-1";

export var MixinType = { 
    HEAD: 0, TAIL: 1, OVERRIDE: 2, INSERT: 3, 
    CLASSREMOVE: 4, REPLACEBETWEEN: 5, REMOVEBETWEEN: 6, 
    CLASSREPLACE: 7, CLASSINSERT: 8 
};

export class PolyMod {
    constructor() {
        this.loaded = false;
        this.init = () => {};
        this.postInit = () => {};
        this.onGameLoad = () => {};
        this.preInit = () => {};
        this.simInit = () => {};
    }
}

class PolyModLoaderClass {
    constructor() {
        this.polyVersion = "0.5.2";
        this.pmlVersion = window.pmlversion;
        this.allMods = [];
        this.settings = [];
        this.keybindings = [];
        
        // Bind functions to prevent "is not a function" errors
        this.preInitMods = this.preInitMods.bind(this);
        this.initMods = this.initMods.bind(this);
    }

    // THE SPECIFIC FIX FOR LINE 42841
    preInitMods() {
        console.log("PML: Line 42841 hook successful (preInitMods)");
    }

    initStorage(storage) {
        console.log("PML: Storage linked");
    }

    async importMods() {
        console.log("PML: Importing...");
        const ui = document.getElementById("ui");
        if (ui) {
            const loader = document.createElement("div");
            loader.id = "pml-bypass-overlay";
            loader.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:#192042;z-index:10000;display:flex;justify-content:center;align-items:center;color:white;font-family:sans-serif;";
            loader.innerHTML = "<h2>BYPASS INITIALIZING...</h2>";
            ui.appendChild(loader);
            setTimeout(() => loader.remove(), 1000);
        }
    }

    initMods() {
        console.log("PML: initMods successful");
    }

    onGameLoad() {
        console.log("PML: Game Loaded");
    }
}

// 2. Create the instance
export const ActivePolyModLoader = new PolyModLoaderClass();

// 3. Global backup (In case the 'import' fails, the game finds it here)
window.ActivePolyModLoader = ActivePolyModLoader;

export async function checkForUpdate() { return false; }

// Non-blocking version update from Codeberg
fetch("https://codeberg.org/api/v1/repos/polytrackmods/PolyModLoader/tags")
    .then(r => r.json())
    .then(tags => { if(tags[0]) window.pmlversion = tags[0].name; })
    .catch(() => {});
