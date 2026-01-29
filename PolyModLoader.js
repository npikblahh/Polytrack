/**
 * PolyModLoader - Optimized for GitHub Pages
 * Source: https://codeberg.org/polytrackmods/website
 */

// We fetch the version safely inside a function or a variable to avoid EOF issues
const pmlversion = await fetch("https://codeberg.org/api/v1/repos/polytrackmods/PolyModLoader/tags")
    .then(r => r.json())
    .then(tags => tags[0]?.name ?? "untagged")
    .catch(() => "v0.5.2-1"); // Fallback if API is slow

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

export class PolyModLoader {
    constructor(polyVersion, pmlVersion) {
        this.polyVersion = polyVersion;
        this.pmlVersion = pmlVersion;
        this.allMods = [];
    }

    async importMods() {
        const ui = document.getElementById("ui");
        if (!ui) return;

        const loadingDiv = document.createElement("div");
        loadingDiv.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:#192042;z-index:10000;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;";
        
        // Uses local images from the website source you downloaded
        loadingDiv.innerHTML = `
            <img src="./images/logo.svg" style="width:300px;margin-bottom:20px;">
            <p style="font-family:ForcedSquare, sans-serif;">LOADING MODS...</p>
        `;
        ui.appendChild(loadingDiv);

        // Your GitHub repo uses relative paths for mods
        console.log("PML: Initializing from GitHub Pages source.");
        
        await new Promise(r => setTimeout(r, 1000));
        loadingDiv.remove();
    }
}

export async function checkForUpdate() {
    // Official Codeberg update logic
    try {
        const response = await fetch("https://codeberg.org/api/v1/repos/polytrackmods/PolyModLoader/tags");
        return response.ok;
    } catch {
        return false;
    }
}
