// esp-web-install-button.js - Phiên bản dễ đọc
class InstallButton extends HTMLElement {
    static isSupported = "serial" in navigator;
    static isAllowed = window.isSecureContext;

    static style = `
    button {
        position: relative;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        padding: 12px 32px;
        color: var(--esp-tools-button-text-color, #ffffff);
        background-color: var(--esp-tools-button-color, #4CAF50);
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        min-width: 200px;
    }
    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        background-color: #45a049;
    }
    button:active {
        transform: translateY(0);
    }
    button:focus {
        outline: 3px solid rgba(76, 175, 80, 0.5);
        outline-offset: 2px;
    }
    :host([active]) button {
        background-color: #FF9800;
        cursor: wait;
    }
    :host([installed]) button {
        background-color: #2196F3;
    }
    :host([error]) button {
        background-color: #f44336;
    }
    .hidden {
        display: none;
    }`;

    constructor() {
        super();
        this.renderRoot = null;
        this._manifest = null;
    }

    static preload() {
        // Preload connect module khi hover
        return import("./connect.js").then(module => module.connect);
    }

    connectedCallback() {
        if (this.renderRoot) return;

        this.renderRoot = this.attachShadow({ mode: "open" });

        // Kiểm tra browser support
        if (!InstallButton.isSupported || !InstallButton.isAllowed) {
            this.toggleAttribute("install-unsupported", true);
            this.renderRoot.innerHTML = !InstallButton.isAllowed
                ? "<div style='background:#ffebee;color:#c62828;padding:15px;border-radius:8px;'>🔒 Chỉ hoạt động trên HTTPS hoặc localhost</div>"
                : "<div style='background:#fff3e0;color:#ef6c00;padding:15px;border-radius:8px;'>🌐 Trình duyệt không hỗ trợ Web Serial. Dùng Chrome/Edge.</div>";
            return;
        }

        this.toggleAttribute("install-supported", true);
        
        // Preload khi hover
        this.addEventListener("mouseover", InstallButton.preload);

        // Tạo button
        const slot = document.createElement("slot");
        slot.addEventListener("click", async (event) => {
            event.preventDefault();
            try {
                const { connect } = await import("./connect.js");
                connect(this);
            } catch (error) {
                console.error("Failed to load connect module:", error);
            }
        });

        slot.name = "activate";
        const button = document.createElement("button");
        button.innerText = "CÀI ĐẶT AI-on-the-edge";
        
        // Thêm style
        if ("adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype) {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(InstallButton.style);
            this.renderRoot.adoptedStyleSheets = [sheet];
        } else {
            const styleSheet = document.createElement("style");
            styleSheet.innerText = InstallButton.style;
            this.renderRoot.append(styleSheet);
        }

        slot.append(button);
        this.renderRoot.append(slot);
    }

    // Property: manifest
    set manifest(value) {
        this._manifest = value;
    }
    get manifest() {
        return this._manifest;
    }

    // Property: eraseFirst
    set eraseFirst(value) {
        this.setAttribute("erase-first", value);
    }
    get eraseFirst() {
        return this.hasAttribute("erase-first");
    }

    // Property: hideProgress
    set hideProgress(value) {
        this.setAttribute("hide-progress", value);
    }
    get hideProgress() {
        return this.hasAttribute("hide-progress");
    }

    // Property: showLog
    set showLog(value) {
        this.setAttribute("show-log", value);
    }
    get showLog() {
        return this.hasAttribute("show-log");
    }

    // Property: logConsole
    set logConsole(value) {
        this.setAttribute("log-console", value);
    }
    get logConsole() {
        return this.hasAttribute("log-console");
    }

    // Method: update state
    updateState(state) {
        this.removeAttribute("active");
        this.removeAttribute("installed");
        this.removeAttribute("error");
        
        switch(state) {
            case "installing":
                this.setAttribute("active", "");
                break;
            case "installed":
                this.setAttribute("installed", "");
                break;
            case "error":
                this.setAttribute("error", "");
                break;
        }
    }
}

customElements.define("esp-web-install-button", InstallButton);