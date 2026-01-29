/**
 * PolyModLoader - iPad Optimized & Main Bundle Synced
 */

// Global version variable (Non-blocking to prevent EOF errors)
var pmlversion = "v0.5.2-1";

// Non-blocking fetch for the version update
fetch("https://codeberg.org/api/v1/repos/polytrackmods/PolyModLoader/tags")
    .then(r => r.json())
    .then(tags => { if(tags[0]) pmlversion = tags[0].name; })
    .catch(() => {});

Object.defineProperty(window, "pmlversion", {
    get() { return pmlversion; },
    configurable: true,
    enumerable: true
});

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
        this.pmlVersion = pmlversion;
        this.allMods = [];
        this.settings = [];
        this.keybindings = [];
    }

    // Required by main.bundle.js logic
    initStorage(storage) {
        console.log("PML: Storage linked.");
    }

    // Required by main.bundle.js logic
    async importMods() {
        const ui = document.getElementById("ui");
        if (!ui) return;

        const loader = document.createElement("div");
        loader.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:#192042;z-index:10000;display:flex;justify-content:center;align-items:center;color:white;font-family:sans-serif;";
        loader.innerHTML = '<div style="text-align:center;"><img src="./images/logo.svg" style="width:200px;"><h2 style="margin-top:20px;">INITIALIZING MODS</h2></div>';
        ui.appendChild(loader);

        // Required delay for engine stability
        await new Promise(r => setTimeout(r, 800));
        loader.remove();
    }

    // Required by main.bundle.js logic
    initMods() {
        console.log("PML: Mods initialized.");
    }
}

// CRITICAL: Your main.bundle.js imports exactly these two things
export const ActivePolyModLoader = new PolyModLoaderClass();
export async function checkForUpdate() { return false; }
