/**
 * PolyModLoader - iPad Optimized & Main Bundle Synced
 */

// We use a regular variable instead of 'await fetch' to prevent EOF errors
var pmlversion = "v0.5.2-1";

// Safely update the version if Codeberg is reachable, without blocking the script
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
    }

    initStorage(storage) {
        console.log("PML: Storage Initialized");
    }

    async importMods() {
        console.log("PML: Importing Mods...");
        const ui = document.getElementById("ui");
        if (!ui) return;

        const loader = document.createElement("div");
        loader.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:#192042;z-index:10000;display:flex;justify-content:center;align-items:center;color:white;font-family:sans-serif;";
        loader.innerHTML = "<h2>BYPASS ACTIVE - LOADING</h2>";
        ui.appendChild(loader);

        // Required delay for main.bundle.js sync
        await new Promise(r => setTimeout(r, 500));
        loader.remove();
    }

    initMods() {
        console.log("PML: Mods Initialized");
    }
}

// These specific export names are required by your main.bundle.js
export const ActivePolyModLoader = new PolyModLoaderClass();
export async function checkForUpdate() { return false; }
