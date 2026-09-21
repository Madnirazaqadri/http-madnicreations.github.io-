"use strict";

let kalams = [];
let filteredKalams = [];
let currentKalam = null;
let textSize = 21;
let toastTimer;

const $ = (id) => document.getElementById(id);

const preloader = $("preloader");
const siteHeader = $("siteHeader");
const menuBtn = $("menuBtn");
const mobileNav = $("mobileNav");
const themeToggle = $("themeToggle");

const randomBtn = $("randomBtn");
const readerRandom = $("readerRandom");

const searchInput = $("searchInput");
const clearSearch = $("clearSearch");
const categoryFilter = $("categoryFilter");

const kalamGrid = $("kalamGrid");
const emptyState = $("emptyState");
const resetSearch = $("resetSearch");
const kalamCount = $("kalamCount");

const readerModal = $("readerModal");
const modalOverlay = $("modalOverlay");
const modalClose = $("modalClose");

const readerCategory = $("readerCategory");
const readerTitle = $("readerTitle");
const readerSubtitle = $("readerSubtitle");
const readerContent = $("readerContent");

const decreaseText = $("decreaseText");
const increaseText = $("increaseText");
const copyKalam = $("copyKalam");

const toast = $("toast");
const toastTitle = $("toastTitle");
const toastMessage = $("toastMessage");
const currentYear = $("currentYear");


document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    setupEvents();
    setupScroll();
    loadData();

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});


async function loadData() {
    try {
        const response = await fetch("data.json", {
            cache: "no-cache"
        });

        if (!response.ok) {
            throw new Error("data.json not found");
        }

        const data = await response.json();

        kalams = Array.isArray(data.kalams)
            ? data.kalams
            : [];

        filteredKalams = [...kalams];

        createCategories();
        updateCount();
        renderKalams();

    } catch (error) {
        console.error(error);

        kalams = [];
        filteredKalams = [];

        renderKalams();

        showToast(
            "Loading Error",
            "Please check that data.json is saved correctly."
        );

    } finally {
        hidePreloader();
    }
}


function hidePreloader() {
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add("hide");
        }
    }, 700);
}


function createCategories() {
    if (!categoryFilter) return;

    const categories = [
        ...new Set(
            kalams
                .map(kalam => kalam.category)
                .filter(Boolean)
        )
    ];

    categoryFilter.innerHTML =
        `<option value="all">All Categories</option>`;

    categories.forEach(category => {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}


function updateCount() {
    if (!kalamCount) return;

    kalamCount.textContent = kalams.length;
}


function renderKalams() {
    if (!kalamGrid) return;

    kalamGrid.innerHTML = "";

    if (!filteredKalams.length) {
        kalamGrid.style.display = "none";

        if (emptyState) {
            emptyState.classList.add("show");
        }

        return;
    }

    kalamGrid.style.display = "grid";

    if (emptyState) {
        emptyState.classList.remove("show");
    }

    filteredKalams.forEach((kalam, index) => {

        const card = document.createElement("article");

        card.className = "kalam-card";

        card.style.animation =
            `fadeUp 0.6s ease ${index * 0.08}s both`;

        const preview = getPreview(kalam);

        card.innerHTML = `
            <div class="card-top">

                <span class="card-category">
                    <i class="fa-solid fa-feather-pointed"></i>
                    ${escapeHTML(kalam.category || "Kalam")}
                </span>

                <span class="card-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

            </div>

            <h3>
                ${escapeHTML(
                    kalam.title || "Untitled Kalam"
                )}
            </h3>

            <p class="card-subtitle">
                ${escapeHTML(
                    kalam.subtitle || "Madni Creations"
                )}
            </p>

            <div class="card-preview">
                ${escapeHTML(preview)}
            </div>

            <div class="card-footer">

                <button
                    class="read-btn"
                    type="button"
                >
                    Read Kalam
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

                <span class="card-language">
                    ${escapeHTML(
                        kalam.language || "Roman Urdu"
                    )}
                </span>

            </div>
        `;

        const button = card.querySelector(".read-btn");

        button.addEventListener("click", () => {
            openReader(kalam);
        });

        kalamGrid.appendChild(card);
    });
}


function getPreview(kalam) {

    if (!Array.isArray(kalam.stanzas)) {
        return "";
    }

    let lines = [];

    kalam.stanzas.forEach(stanza => {

        if (Array.isArray(stanza)) {
            lines.push(...stanza);
        } else {
            lines.push(stanza);
        }

    });

    return lines.slice(0, 3).join(" ");
}


function filterKalams() {

    const search = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const category = categoryFilter
        ? categoryFilter.value
        : "all";

    filteredKalams = kalams.filter(kalam => {

        const searchable =
            JSON.stringify(kalam).toLowerCase();

        const searchMatch =
            !search || searchable.includes(search);

        const categoryMatch =
            category === "all" ||
            kalam.category === category;

        return searchMatch && categoryMatch;
    });

    updateClearButton();
    renderKalams();
}


function updateClearButton() {

    if (!clearSearch || !searchInput) return;

    if (searchInput.value.trim()) {
        clearSearch.classList.add("show");
    } else {
        clearSearch.classList.remove("show");
    }
}


function resetFilters() {

    if (searchInput) {
        searchInput.value = "";
    }

    if (categoryFilter) {
        categoryFilter.value = "all";
    }

    filteredKalams = [...kalams];

    updateClearButton();
    renderKalams();
}


function openReader(kalam) {

    currentKalam = kalam;
    textSize = 21;

    if (readerCategory) {
        readerCategory.textContent =
            kalam.category || "Kalam";
    }

    if (readerTitle) {
        readerTitle.textContent =
            kalam.title || "Untitled Kalam";
    }

    if (readerSubtitle) {
        readerSubtitle.textContent =
            kalam.subtitle || "Madni Creations";
    }

    renderReader();

    if (readerModal) {
        readerModal.classList.add("open");
    }

    document.body.classList.add("modal-open");

    if (readerContent) {
        readerContent.scrollTop = 0;
    }
}


function closeReader() {

    if (readerModal) {
        readerModal.classList.remove("open");
    }

    document.body.classList.remove("modal-open");

    currentKalam = null;
}


function renderReader() {

    if (!readerContent || !currentKalam) return;

    readerContent.innerHTML = "";

    const stanzas = currentKalam.stanzas || [];

    stanzas.forEach(stanza => {

        const stanzaElement =
            document.createElement("div");

        stanzaElement.className =
            "reader-stanza";

        const lines =
            Array.isArray(stanza)
                ? stanza
                : [stanza];

        lines.forEach(line => {

            const lineElement =
                document.createElement("span");

            lineElement.className =
                "reader-line";

            lineElement.textContent = line;

            stanzaElement.appendChild(
                lineElement
            );
        });

        readerContent.appendChild(
            stanzaElement
        );
    });

    readerContent.style.fontSize =
        `${textSize}px`;
}


function changeTextSize(amount) {

    textSize += amount;

    if (textSize < 16) {
        textSize = 16;
    }

    if (textSize > 32) {
        textSize = 32;
    }

    if (readerContent) {
        readerContent.style.fontSize =
            `${textSize}px`;
    }
}


function randomKalam() {

    if (!kalams.length) {
        showToast(
            "No Kalam",
            "No Kalam is available."
        );
        return;
    }

    const randomIndex =
        Math.floor(Math.random() * kalams.length);

    openReader(kalams[randomIndex]);
}


async function copyKalamText() {

    if (!currentKalam) return;

    const text =
        createPlainText(currentKalam);

    try {

        await navigator.clipboard.writeText(text);

        showToast(
            "Copied Successfully",
            "The Kalam has been copied."
        );

    } catch {
        fallbackCopy(text);
    }
}


function createPlainText(kalam) {

    let text =
        `${kalam.title || "Kalam"}\n\n`;

    (kalam.stanzas || []).forEach(stanza => {

        if (Array.isArray(stanza)) {
            text += stanza.join("\n");
        } else {
            text += stanza;
        }

        text += "\n\n";
    });

    return text.trim();
}


function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    textarea.select();

    try {

        document.execCommand("copy");

        showToast(
            "Copied Successfully",
            "The Kalam has been copied."
        );

    } catch {

        showToast(
            "Copy Failed",
            "Please copy the Kalam manually."
        );
    }

    document.body.removeChild(textarea);
}


function initializeTheme() {

    const saved =
        localStorage.getItem("madniTheme");

    if (saved === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeIcon();
}


function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const dark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "madniTheme",
        dark ? "dark" : "light"
    );

    updateThemeIcon();
}


function updateThemeIcon() {

    if (!themeToggle) return;

    const icon =
        themeToggle.querySelector("i");

    if (!icon) return;

    if (
        document.body.classList.contains("dark-mode")
    ) {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}


function toggleMenu() {

    if (!mobileNav) return;

    mobileNav.classList.toggle("open");
}


function setupScroll() {

    window.addEventListener(
        "scroll",
        () => {

            if (!siteHeader) return;

            if (window.scrollY > 30) {
                siteHeader.classList.add("scrolled");
            } else {
                siteHeader.classList.remove("scrolled");
            }

        },
        { passive: true }
    );
}


function showToast(title, message) {

    if (!toast) return;

    if (toastTitle) {
        toastTitle.textContent = title;
    }

    if (toastMessage) {
        toastMessage.textContent = message;
    }

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


function setupEvents() {

    if (searchInput) {
        searchInput.addEventListener(
            "input",
            filterKalams
        );
    }

    if (categoryFilter) {
        categoryFilter.addEventListener(
            "change",
            filterKalams
        );
    }

    if (clearSearch) {
        clearSearch.addEventListener(
            "click",
            resetFilters
        );
    }

    if (resetSearch) {
        resetSearch.addEventListener(
            "click",
            resetFilters
        );
    }

    if (randomBtn) {
        randomBtn.addEventListener(
            "click",
            randomKalam
        );
    }

    if (readerRandom) {
        readerRandom.addEventListener(
            "click",
            randomKalam
        );
    }

    if (themeToggle) {
        themeToggle.addEventListener(
            "click",
            toggleTheme
        );
    }

    if (menuBtn) {
        menuBtn.addEventListener(
            "click",
            toggleMenu
        );
    }

    if (decreaseText) {
        decreaseText.addEventListener(
            "click",
            () => changeTextSize(-2)
        );
    }

    if (increaseText) {
        increaseText.addEventListener(
            "click",
            () => changeTextSize(2)
        );
    }

    if (copyKalam) {
        copyKalam.addEventListener(
            "click",
            copyKalamText
        );
    }

    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeReader
        );
    }

    if (modalOverlay) {
        modalOverlay.addEventListener(
            "click",
            closeReader
        );
    }

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeReader();
            }

        }
    );

    if (mobileNav) {

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {
                        mobileNav.classList.remove("open");
                    }
                );

            });
    }
}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
