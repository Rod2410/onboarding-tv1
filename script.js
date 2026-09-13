(() => {
    "use strict";

    /* =====================================================
       CONFIGURAÇÕES GERAIS
    ====================================================== */

    const MAX_ITEMS_PER_UNIT = 20;

    const SCREEN_TRANSITION_MS = 760;
    const PANEL_TRANSITION_MS = 720;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       CAMINHOS DOS ARQUIVOS
    ====================================================== */

    const ASSETS = {
        screens: {
            start:
                "assets/screens/screen-start.png",

            map:
                "assets/screens/screen-map.png",

            hub:
                "assets/screens/screen-hub.png",

            brands:
                "assets/screens/screen-brands.png",

            timeline:
                "assets/screens/screen-timeline.png",

            history:
                "assets/screens/screen-history.png",

            values:
                "assets/screens/screen-values.png",

            historyVideo:
                "assets/screens/screen-history-video.png",
            hubCorridor:
                "assets/screens/screen-hub-corridor.png",
            peopleCulture:
                "assets/screens/screen-people-culture.png",
            peopleMenu:
                "assets/screens/screen-people-menu.png",
        }
    };


    /* =====================================================
       CONFIGURAÇÃO DOS PAINÉIS

       Todos os valores estão em porcentagem em relação
       ao frame de 1920 x 1080.

       Caso seja necessário fazer um pequeno ajuste,
       essa é a principal área a ser alterada.
    ====================================================== */

    const PANEL_LAYOUTS = {
        left: {
            media: {
                left: 12.45,
                top: 30.55,
                width: 40.15,
                height: 40.15
            },

            close: {
                left: 48.35,
                top: 6.6,
                width: 7.4,
                height: 11.5
            },

            pagination: {
                left: 32.52,
                top: 78.6
            }
        },

        right: {
            media: {
                left: 51.15,
                top: 30.55,
                width: 40.15,
                height: 40.15
            },

            close: {
                left: 89.8,
                top: 6.6,
                width: 7.4,
                height: 11.5
            },

            pagination: {
                left: 71.25,
                top: 78.6
            }
        }
    };


    /* =====================================================
       UNIDADES DE NEGÓCIO

       A propriedade hotspot determina a posição do ponto
       clicável no prédio.

       left   = distância da esquerda
       top    = distância do topo
       width  = largura da área clicável
       height = altura da área clicável
    ====================================================== */

    const UNITS = {
    curious: {
        label: "Curious",

        side: "right",

        hover:
            "assets/hovers/hover-curious.png",

        panel:
            "assets/panels/panel-curious.png",

        hotspot: {
            centerX: 43.25,
            centerY: 27.7,
            width: 7,
            height: 12
        }
    },

    tv1Live: {
        label: "TV1 Live",

        side: "right",

        hover:
            "assets/hovers/hover-tv1-live.png",

        panel:
            "assets/panels/panel-tv1-live.png",

        hotspot: {
            centerX: 43.25,
            centerY: 45.3,
            width: 7,
            height: 12
        }
    },

    atlasOne: {
        label: "Atlas One",

        side: "right",

        hover:
            "assets/hovers/hover-atlas-one.png",

        panel:
            "assets/panels/panel-atlas-one.png",

        hotspot: {
            centerX: 43.25,
            centerY: 65.4,
            width: 7,
            height: 12
        }
    },

    pixelPrompt: {
        label: "Pixel Prompt",

        side: "left",

        hover:
            "assets/hovers/hover-pixel-prompt.png",

        panel:
            "assets/panels/panel-pixel-prompt.png",

        hotspot: {
            centerX: 61.75,
            centerY: 29.2,
            width: 7,
            height: 12
        }
    },

    xlab: {
        label: "XLab",

        side: "left",

        hover:
            "assets/hovers/hover-xlab.png",

        panel:
            "assets/panels/panel-xlab.png",

        hotspot: {
            centerX: 61.75,
            centerY: 46.2,
            width: 7,
            height: 12
        }
    },

    fire: {
        label: "Fire",

        side: "left",

        hover:
            "assets/hovers/hover-fire.png",

        panel:
            "assets/panels/panel-fire.png",

        hotspot: {
            centerX: 61.75,
            centerY: 65.5,
            width: 7,
            height: 12
        }
    },

    hub: {
        label: "HUB",

        hover:
            "assets/hovers/hover-hub.png",

        hotspot: {
            centerX: 43.25,
            centerY: 83.1,
            width: 8,
            height: 14
        }
    }
};
    /* =====================================================
       CONFIGURAÇÃO DOS OBJETOS DO HUB
    ====================================================== */

    const HUB_ACTIONS = {
        brands: {
            label: "Marcas",
            target: "brands",

            hover:
            "assets/hovers/hover-hub-brands.png",

            hotspot: {
                left: 48.75,
                top: 32.3,
                width: 8.2,
                height: 14.0
            }
        },

        timeline: {
            label: "História",
            target: "timeline",

            hover:
            "assets/hovers/hover-hub-history.png",

            hotspot: {
                left: 27.6,
                top: 59.2,
                width: 18.0,
                height: 28.0
            }
        },

        history: {
            label: "Valores",
            target: "history",

            hover:
            "assets/hovers/hover-hub-values.png",

            hotspot: {
                left: 52.9,
                top: 62.5,
                width: 20.0,
                height: 28.0
            }
        }
    };

    /* =====================================================
   PAINÉIS DE PESSOAS & CULTURA
====================================================== */

const PEOPLE_PANELS = {
    whoWeAre: {
        label: "Quem Somos",

        frame:
            "assets/panels/panel-people-who-we-are.png",

        contentKey:
            "peopleWhoWeAre"
    },

    journey365: {
        label: "Jornada 365",

        frame:
            "assets/panels/panel-people-journey365.png",

        contentKey:
            "peopleJourney365"
    },

    incentives: {
        label: "Incentivos",

        frame:
            "assets/panels/panel-people-incentives.png",

        contentKey:
            "peopleIncentives"
    }
};

const PEOPLE_MENU_HOVERS = {
    whoWeAre:
        "assets/hovers/hover-people-who-we-are.png",

    journey365:
        "assets/hovers/hover-people-journey365.png",

    incentives:
        "assets/hovers/hover-people-incentives.png"
};

    const CORRIDOR_HOVERS = {
    left:
        "assets/hovers/hover-corridor-left.png",

    right:
        "assets/hovers/hover-corridor-right.png"
};


    /* =====================================================
       OUTRAS ÁREAS CLICÁVEIS
    ====================================================== */

    const STATIC_BOXES = {
        start: {
            left: 33.5,
            top: 68.5,
            width: 33.0,
            height: 15.5
        },

        hubBack: {
            left: 76.0,
            top: 82.0,
            width: 18.0,
            height: 17.0
        },

        subpageBack: {
            left: 76.0,
            top: 82.0,
            width: 18.0,
            height: 17.0
        },

            /*
        Área sobre o símbolo branco de play
        dentro da câmera da screen-timeline.
        */
        timelinePlay: {
            left: 42.0,
            top: 49.0,
            width: 13.0,
            height: 15.0
        },

       /*
    Área clicável sobre a máquina de escrever.
    O ponto dourado aparece no centro desta área.
    */
       historyValues: {
           left: 29.0,
           top: 43.0,
           width: 31.0,
           height: 29.0
        },

        foundersVideo: {
            left: 15.5,
            top: 12.5,
            width: 69.0,
            height: 69.0
        },
    corridorLeft: {
    left: 8.0,
    top: 45.0,
    width: 18.0,
    height: 30.0
},

corridorRight: {
    left: 75.0,
    top: 45.0,
    width: 18.0,
    height: 30.0
},

/*
    Ponto grande da tela Pessoas & Cultura.
    O centro fica aproximadamente na posição
    mostrada na imagem de referência.
*/
peopleCulturePoint: {
    left: 46.5,
    top: 38.0,
    width: 12.0,
    height: 18.0
},

peopleWhoWeAre: {
    left: 12.0,
    top: 17.0,
    width: 38.0,
    height: 11.5
},

peopleJourney365: {
    left: 12.0,
    top: 29.0,
    width: 36.0,
    height: 11.5
},

peopleIncentives: {
    left: 12.0,
    top: 41.0,
    width: 31.0,
    height: 11.5
},
    };


    /* =====================================================
       ESTADO DA APLICAÇÃO
    ====================================================== */

    const state = {
        currentScreen: "start",

        currentHover: null,

        panelOpen: false,
        currentUnit: null,
        panelItems: [],
        panelIndex: 0,

        lastPanelTrigger: null,

        transitionLocked: false,

        preloaderHidden: false,

        peoplePanelOpen: false,
        peoplePanelKey: null,
        peoplePanelItems: [],
        peoplePanelIndex: 0,

        presentationOpen: false,
        presentationSource: null,
        presentationItems: [],
        presentationIndex: 0,
    };


    /* =====================================================
       ELEMENTOS DO HTML
    ====================================================== */

    const elements = {};

/* =====================================================
   PAINÉIS PESSOAS & CULTURA
====================================================== */

function getPeoplePanelItems(contentKey) {
    const contentSource =
        window.ONBOARDING_CONTENT || {};

    const rawItems =
        Array.isArray(contentSource[contentKey])
            ? contentSource[contentKey]
            : [];

    return rawItems
        .slice(0, MAX_ITEMS_PER_UNIT)
        .map(normalizeMediaItem)
        .filter(Boolean);
}


function openPeoplePanel(panelKey) {
    const config =
        PEOPLE_PANELS[panelKey];

    if (!config) {
        return;
    }

    /*
        Descobre se já existe um painel aberto.
    */
    const isSwitchingPanel =
        state.peoplePanelOpen;

    /*
        Atualiza qual painel está ativo.
    */
    state.peoplePanelOpen = true;
    state.peoplePanelKey = panelKey;
    state.peoplePanelIndex = 0;

    /*
        Busca os conteúdos correspondentes.
    */
    state.peoplePanelItems =
        getPeoplePanelItems(
            config.contentKey
        );

    /*
        Troca a arte do painel.
    */
    elements.peoplePanelFrame.src =
        config.frame;

    /*
        Atualiza imagem/vídeo do conteúdo.
    */
    renderPeoplePanelMedia(0);


    /*
        Se já havia um painel aberto,
        paramos aqui.

        Ou seja:
        NÃO fecha,
        NÃO abre de novo,
        apenas troca o conteúdo.
    */
    if (isSwitchingPanel) {
        return;
    }


    /*
        Só executa esta parte quando
        estamos abrindo o PRIMEIRO painel.
    */

    elements.peoplePanelLayer.classList.add(
        "is-visible"
    );

    elements.peoplePanelLayer.setAttribute(
        "aria-hidden",
        "false"
    );

    void elements.peoplePanelLayer.offsetWidth;

    requestAnimationFrame(() => {
        elements.peoplePanelLayer.classList.add(
            "is-open"
        );
    });
}


function closePeoplePanel({
    immediate = false
} = {}) {
    if (!state.peoplePanelOpen) {
        return;
    }

    state.peoplePanelOpen = false;

    pausePeoplePanelVideos();

    elements.peoplePanelLayer.classList.remove(
        "is-open"
    );

    const finish = () => {
        elements.peoplePanelLayer.classList.remove(
            "is-visible"
        );

        elements.peoplePanelLayer.setAttribute(
            "aria-hidden",
            "true"
        );

        elements.peoplePanelMediaContent.replaceChildren();

        state.peoplePanelKey = null;
        state.peoplePanelItems = [];
        state.peoplePanelIndex = 0;
    };

    if (immediate || reducedMotion) {
        finish();
        return;
    }

    setTimeout(
        finish,
        PANEL_TRANSITION_MS
    );
}


function renderPeoplePanelMedia(
    direction = 0
) {
    pausePeoplePanelVideos();

    elements.peoplePanelMediaContent.replaceChildren();

    const items =
        state.peoplePanelItems;

    if (!items.length) {
        elements.peoplePanelEmptyState.hidden =
            false;

        elements.peoplePanelPagination.hidden =
            true;

        elements.peopleMediaPreviousHit.hidden =
            true;

        elements.peopleMediaNextHit.hidden =
            true;

        return;
    }

    elements.peoplePanelEmptyState.hidden =
        true;

    const item =
        items[state.peoplePanelIndex];

    let media;

    if (item.type === "video") {
        media =
            document.createElement("video");

        media.controls = true;
        media.playsInline = true;
        media.preload = "metadata";
        media.src = item.src;

        if (item.poster) {
            media.poster = item.poster;
        }
    } else {
        media =
            document.createElement("img");

        media.src = item.src;
        media.alt = item.alt || "";
        media.draggable = false;
    }

    media.className =
        "panel-media-item";

    media.style.objectPosition =
        item.objectPosition ||
        "center center";

    elements.peoplePanelMediaContent.appendChild(
        media
    );

    animateMediaEntry(
        media,
        direction
    );

    const isVideo =
        item.type === "video";

    elements.peopleMediaPreviousHit.hidden =
        isVideo;

    elements.peopleMediaNextHit.hidden =
        isVideo;

    elements.peopleMediaPreviousHit.disabled =
        state.peoplePanelIndex === 0;

    elements.peopleMediaNextHit.disabled =
        state.peoplePanelIndex ===
        items.length - 1;

    updatePeoplePanelPagination();
}


function goToPeoplePanelItem(index) {
    if (
        index < 0 ||
        index >= state.peoplePanelItems.length ||
        index === state.peoplePanelIndex
    ) {
        return;
    }

    const direction =
        index > state.peoplePanelIndex
            ? 1
            : -1;

    state.peoplePanelIndex =
        index;

    renderPeoplePanelMedia(direction);
}

function pausePeoplePanelVideos() {
    elements.peoplePanelMediaContent
        .querySelectorAll("video")
        .forEach((video) => {
            video.pause();
        });
}
    /* =====================================================
       INICIALIZAÇÃO
    ====================================================== */

    function init() {
        cacheElements();

        activateDebugMode();

        createMapHotspots();
        createHubHotspots();

        applyStaticPositions();

        bindStaticEvents();
        bindPanelEvents();
        bindKeyboardEvents();

        configureFoundersVideo();

        preloadInterfaceAssets();
    }


    function cacheElements() {
        elements.stage =
            document.getElementById("stage");

        elements.preloader =
            document.getElementById("preloader");

        elements.preloaderBar =
            document.getElementById("preloaderBar");

        elements.screens = new Map(
            Array
                .from(document.querySelectorAll(".screen"))
                .map((screen) => [
                    screen.dataset.screen,
                    screen
                ])
        );

        elements.startJourney =
            document.getElementById("startJourney");

        elements.mapHotspots =
            document.getElementById("mapHotspots");

        elements.mapHoverArt =
            document.getElementById("mapHoverArt");

        elements.panelLayer =
            document.getElementById("panelLayer");

        elements.panelReveal =
            document.getElementById("panelReveal");

        elements.panelFrame =
            document.getElementById("panelFrame");

        elements.panelMediaBox =
            document.getElementById("panelMediaBox");

        elements.panelMediaContent =
            document.getElementById("panelMediaContent");

        elements.panelEmptyState =
            document.getElementById("panelEmptyState");

        elements.panelExpand =
           document.getElementById("panelExpand");

        elements.peoplePanelExpand =
            document.getElementById("peoplePanelExpand");

       elements.presentationOverlay =
            document.getElementById("presentationOverlay");
            
        elements.presentationMedia =
            document.getElementById("presentationMedia");

        elements.presentationClose =
            document.getElementById("presentationClose");

        elements.presentationPrevious =
            document.getElementById("presentationPrevious");

        elements.presentationNext =
            document.getElementById("presentationNext");

        elements.presentationDots =
            document.getElementById("presentationDots");

        elements.mediaPreviousHit =
            document.getElementById("mediaPreviousHit");

        elements.mediaNextHit =
            document.getElementById("mediaNextHit");

        elements.panelPagination =
            document.getElementById("panelPagination");

        elements.panelPrevious =
            document.getElementById("panelPrevious");

        elements.panelNext =
            document.getElementById("panelNext");

        elements.panelDots =
            document.getElementById("panelDots");

        elements.panelClose =
            document.getElementById("panelClose");

        elements.hubHotspots =
            document.getElementById("hubHotspots");
        
        elements.hubHoverArt =
            document.getElementById("hubHoverArt");

        elements.hubBack =
            document.getElementById("hubBack");

        elements.corridorLeft =
            document.getElementById("corridorLeft");
            
        elements.corridorRight =
            document.getElementById("corridorRight");
            
        elements.corridorBack =
            document.getElementById("corridorBack");

        elements.corridorHoverArt =
            document.getElementById("corridorHoverArt");

        elements.brandsBack =
            document.getElementById("brandsBack");

        elements.timelineBack =
            document.getElementById("timelineBack");

        elements.timelinePlay =
            document.getElementById("timelinePlay");

        elements.historyBack =
            document.getElementById("historyBack");

        elements.historyValues =
            document.getElementById("historyValues");

        elements.valuesBack =
            document.getElementById("valuesBack");

        elements.historyVideoBack =
            document.getElementById("historyVideoBack");

        elements.foundersVideoBox =
            document.getElementById("foundersVideoBox");

        elements.foundersVideo =
            document.getElementById("foundersVideo");

        elements.foundersVideoSource =
            document.getElementById("foundersVideoSource");

        elements.foundersVideoEmpty =
            document.getElementById("foundersVideoEmpty");

elements.peopleCulturePoint =
    document.getElementById("peopleCulturePoint");

elements.peopleCultureHoverArt =
    document.getElementById("peopleCultureHoverArt");

elements.peopleCultureBack =
    document.getElementById("peopleCultureBack");

elements.peopleWhoWeAre =
    document.getElementById("peopleWhoWeAre");

elements.peopleMenuHoverArt =
    document.getElementById("peopleMenuHoverArt");

elements.peopleJourney365 =
    document.getElementById("peopleJourney365");

elements.peopleIncentives =
    document.getElementById("peopleIncentives");

elements.peopleMenuBack =
    document.getElementById("peopleMenuBack");

elements.peoplePanelLayer =
    document.getElementById("peoplePanelLayer");

elements.peoplePanelFrame =
    document.getElementById("peoplePanelFrame");

elements.peoplePanelMediaBox =
    document.getElementById("peoplePanelMediaBox");

elements.peoplePanelMediaContent =
    document.getElementById("peoplePanelMediaContent");

elements.peoplePanelEmptyState =
    document.getElementById("peoplePanelEmptyState");

elements.peoplePanelPagination =
    document.getElementById("peoplePanelPagination");

elements.peoplePanelPrevious =
    document.getElementById("peoplePanelPrevious");

elements.peoplePanelNext =
    document.getElementById("peoplePanelNext");

elements.peoplePanelDots =
    document.getElementById("peoplePanelDots");

elements.peopleMediaPreviousHit =
    document.getElementById("peopleMediaPreviousHit");

elements.peopleMediaNextHit =
    document.getElementById("peopleMediaNextHit");

elements.peoplePanelClose =
    document.getElementById("peoplePanelClose");

elements.peoplePanelBack =
    document.getElementById("peoplePanelBack");    
    }


    /* =====================================================
       MODO DE DEPURAÇÃO
    ====================================================== */

    function activateDebugMode() {
        const params =
            new URLSearchParams(window.location.search);

        if (params.has("debug")) {
            document.body.classList.add("debug");
        }
    }


    /* =====================================================
       CRIAÇÃO DOS HOTSPOTS DO MAPA
    ====================================================== */

    function createMapHotspots() {
        Object
            .entries(UNITS)
            .forEach(([unitKey, config]) => {
                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "art-hotspot gold-hotspot map-hotspot";

                button.dataset.unit = unitKey;
                button.dataset.debugLabel = config.label;

                button.setAttribute(
                    "aria-label",
                    unitKey === "hub"
                        ? "Entrar no HUB"
                        : `Conhecer ${config.label}`
                );

                button.innerHTML = `
                    <span class="sr-only">
                        ${
                            unitKey === "hub"
                                ? "Entrar no HUB"
                                : `Conhecer ${config.label}`
                        }
                    </span>
                `;

                applyBox(button, config.hotspot);

                button.addEventListener(
                    "pointerenter",
                    () => {
                        showMapHover(unitKey);
                    }
                );

                button.addEventListener(
                    "pointerleave",
                    () => {
                        if (
                            !state.panelOpen &&
                            document.activeElement !== button
                        ) {
                            hideMapHover();
                        }
                    }
                );

                button.addEventListener(
                    "focus",
                    () => {
                        showMapHover(unitKey);
                    }
                );

                button.addEventListener(
                    "blur",
                    () => {
                        if (!state.panelOpen) {
                            hideMapHover();
                        }
                    }
                );

                button.addEventListener(
                    "click",
                    () => {
                        if (state.transitionLocked) {
                            return;
                        }

                        showMapHover(unitKey);

                        if (unitKey === "hub") {
                            navigateTo(
                                "hubCorridor",
                                getBoxCenter(config.hotspot)
                            );

                            return;
                        }

                        openUnitPanel(
                            unitKey,
                            button
                        );
                    }
                );

                elements.mapHotspots.appendChild(button);
            });
    }


    /* =====================================================
       CRIAÇÃO DOS HOTSPOTS DO HUB
    ====================================================== */

    function createHubHotspots() {
    Object
        .entries(HUB_ACTIONS)
        .forEach(([actionKey, config]) => {
            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "art-hotspot gold-hotspot hub-hotspot";

            button.dataset.action = actionKey;
            button.dataset.debugLabel = config.label;

            button.setAttribute(
                "aria-label",
                config.label
            );

            button.innerHTML = `
                <span class="sr-only">
                    ${config.label}
                </span>
            `;

            applyBox(
                button,
                config.hotspot
            );

            /*
                Mostra a imagem correspondente
                quando o mouse entra no ponto.
            */
            button.addEventListener(
                "pointerenter",
                () => {
                    showHubHover(actionKey);
                }
            );

            /*
                Esconde quando o mouse sai.
                A verificação do foco mantém o hover
                acessível pelo teclado.
            */
            button.addEventListener(
                "pointerleave",
                () => {
                    if (
                        document.activeElement !== button
                    ) {
                        hideHubHover();
                    }
                }
            );

            button.addEventListener(
                "focus",
                () => {
                    showHubHover(actionKey);
                }
            );

            button.addEventListener(
                "blur",
                () => {
                    hideHubHover();
                }
            );

            button.addEventListener(
                "click",
                () => {
                    hideHubHover();

                    navigateTo(
                        config.target,
                        getBoxCenter(config.hotspot)
                    );
                }
            );

            elements.hubHotspots.appendChild(
                button
            );
        });
}
/* =====================================================
   HOVERS DO HUB
====================================================== */

function showHubHover(actionKey) {
    const config =
        HUB_ACTIONS[actionKey];

    if (
        !config ||
        !config.hover ||
        !elements.hubHoverArt
    ) {
        return;
    }

    if (
        elements.hubHoverArt.getAttribute("src") !==
        config.hover
    ) {
        elements.hubHoverArt.src =
            config.hover;
    }

    elements.hubHoverArt.classList.add(
        "is-visible"
    );
}


function hideHubHover() {
    if (!elements.hubHoverArt) {
        return;
    }

    elements.hubHoverArt.classList.remove(
        "is-visible"
    );
}


    /* =====================================================
       POSICIONAMENTO DAS ÁREAS FIXAS
    ====================================================== */

    function applyStaticPositions() {
        applyBox(
            elements.startJourney,
            STATIC_BOXES.start
        );

        applyBox(
            elements.hubBack,
            STATIC_BOXES.hubBack
        );

        applyBox(
            elements.brandsBack,
            STATIC_BOXES.subpageBack
        );

        applyBox(
            elements.timelineBack,
            STATIC_BOXES.subpageBack
        );

        applyBox(
            elements.timelinePlay,
            STATIC_BOXES.timelinePlay
        );

        applyBox(
            elements.historyBack,
            STATIC_BOXES.subpageBack
        );

        applyBox(
            elements.historyVideoBack,
            STATIC_BOXES.subpageBack
        );

        applyBox(
            elements.historyValues,
            STATIC_BOXES.historyValues
        );

        applyBox(
            elements.valuesBack,
            STATIC_BOXES.subpageBack
        );

        applyBox(
            elements.foundersVideoBox,
            STATIC_BOXES.foundersVideo
        );

        applyBox(
    elements.corridorLeft,
    STATIC_BOXES.corridorLeft
);

applyBox(
    elements.corridorRight,
    STATIC_BOXES.corridorRight
);

applyBox(
    elements.corridorBack,
    STATIC_BOXES.subpageBack
);


applyBox(
    elements.peopleCulturePoint,
    STATIC_BOXES.peopleCulturePoint
);

applyBox(
    elements.peopleCultureBack,
    STATIC_BOXES.subpageBack
);


applyBox(
    elements.peopleWhoWeAre,
    STATIC_BOXES.peopleWhoWeAre
);

applyBox(
    elements.peopleJourney365,
    STATIC_BOXES.peopleJourney365
);

applyBox(
    elements.peopleIncentives,
    STATIC_BOXES.peopleIncentives
);

applyBox(
    elements.peopleMenuBack,
    STATIC_BOXES.subpageBack
);

applyBox(
    elements.peoplePanelClose,
    {
        left: 88.5,
        top: 6.0,
        width: 7.0,
        height: 11.0
    }
);

applyBox(
    elements.peoplePanelBack,
    STATIC_BOXES.subpageBack
);
    }


    function applyBox(element, box) {
    if (!element || !box) {
        return;
    }

    if (
        Number.isFinite(box.centerX) &&
        Number.isFinite(box.centerY)
    ) {
        element.style.left =
            `${box.centerX}%`;

        element.style.top =
            `${box.centerY}%`;

        element.style.width =
            `${box.width}%`;

        element.style.height =
            `${box.height}%`;

        element.style.transform =
            "translate(-50%, -50%)";

        return;
    }

    element.style.left =
        `${box.left}%`;

    element.style.top =
        `${box.top}%`;

    element.style.width =
        `${box.width}%`;

    element.style.height =
        `${box.height}%`;

    element.style.transform = "";
}


    function getBoxCenter(box) {
        return {
            x: box.left + box.width / 2,
            y: box.top + box.height / 2
        };
    }

function showPeopleMenuHover(key) {
    const imagePath =
        PEOPLE_MENU_HOVERS[key];

    if (
        !imagePath ||
        !elements.peopleMenuHoverArt
    ) {
        return;
    }

    elements.peopleMenuHoverArt.src =
        imagePath;

    elements.peopleMenuHoverArt.classList.add(
        "is-visible"
    );
}


function hidePeopleMenuHover() {
    if (!elements.peopleMenuHoverArt) {
        return;
    }

    elements.peopleMenuHoverArt.classList.remove(
        "is-visible"
    );
}

function showCorridorHover(side) {
    const imagePath =
        CORRIDOR_HOVERS[side];

    if (
        !imagePath ||
        !elements.corridorHoverArt
    ) {
        return;
    }

    elements.corridorHoverArt.src =
        imagePath;

    elements.corridorHoverArt.classList.add(
        "is-visible"
    );
}


function hideCorridorHover() {
    if (!elements.corridorHoverArt) {
        return;
    }

    elements.corridorHoverArt.classList.remove(
        "is-visible"
    );
}
    /* =====================================================
       NAVEGAÇÃO NA TELA
    ====================================================== */

function bindStaticEvents() {

    /* =====================================================
       INÍCIO DA JORNADA
    ====================================================== */

    elements.startJourney.addEventListener(
        "click",
        startJourneyTransition
    );


    /* =====================================================
       HUB ATUAL
    ====================================================== */

    elements.hubBack.addEventListener(
        "click",
        () => {
            hideMapHover(true);

            navigateTo(
                "hubCorridor",
                {
                    x: 10,
                    y: 55
                }
            );
        }
    );


    /* =====================================================
       CORREDOR DO HUB
    ====================================================== */
elements.corridorLeft.addEventListener(
    "pointerenter",
    () => {
        showCorridorHover("left");
    }
);

elements.corridorLeft.addEventListener(
    "pointerleave",
    () => {
        hideCorridorHover();
    }
);

elements.corridorLeft.addEventListener(
    "focus",
    () => {
        showCorridorHover("left");
    }
);

elements.corridorLeft.addEventListener(
    "blur",
    () => {
        hideCorridorHover();
    }
);

    elements.corridorLeft.addEventListener(
        "click",
        () => {
            navigateTo(
                "peopleCulture",
                getBoxCenter(
                    STATIC_BOXES.corridorLeft
                )
            );
        }
    );

    elements.corridorRight.addEventListener(
    "pointerenter",
    () => {
        showCorridorHover("right");
    }
);

elements.corridorRight.addEventListener(
    "pointerleave",
    () => {
        hideCorridorHover();
    }
);

elements.corridorRight.addEventListener(
    "focus",
    () => {
        showCorridorHover("right");
    }
);

elements.corridorRight.addEventListener(
    "blur",
    () => {
        hideCorridorHover();
    }
);

    elements.corridorRight.addEventListener(
        "click",
        () => {
            navigateTo(
                "hub",
                getBoxCenter(
                    STATIC_BOXES.corridorRight
                )
            );
        }
    );

    elements.corridorBack.addEventListener(
        "click",
        () => {
            navigateTo(
                "map",
                {
                    x: 50,
                    y: 88
                }
            );
        }
    );


    /* =====================================================
       PESSOAS & CULTURA
    ====================================================== */

    elements.peopleCulturePoint.addEventListener(
        "pointerenter",
        () => {
            elements.peopleCultureHoverArt
                .classList.add("is-visible");
        }
    );

    elements.peopleCulturePoint.addEventListener(
        "pointerleave",
        () => {
            elements.peopleCultureHoverArt
                .classList.remove("is-visible");
        }
    );

    elements.peopleCulturePoint.addEventListener(
        "focus",
        () => {
            elements.peopleCultureHoverArt
                .classList.add("is-visible");
        }
    );

    elements.peopleCulturePoint.addEventListener(
        "blur",
        () => {
            elements.peopleCultureHoverArt
                .classList.remove("is-visible");
        }
    );

    elements.peopleCulturePoint.addEventListener(
        "click",
        () => {
            elements.peopleCultureHoverArt
                .classList.remove("is-visible");

            navigateTo(
                "peopleMenu",
                getBoxCenter(
                    STATIC_BOXES.peopleCulturePoint
                )
            );
        }
    );

    elements.peopleCultureBack.addEventListener(
        "click",
        () => {
            navigateTo(
                "hubCorridor",
                {
                    x: 90,
                    y: 92
                }
            );
        }
    );


 /* =====================================================
   MENU PESSOAS & CULTURA
====================================================== */


/* -------------------------
   QUEM SOMOS
------------------------- */

elements.peopleWhoWeAre.addEventListener(
    "pointerenter",
    () => {
        showPeopleMenuHover(
            "whoWeAre"
        );
    }
);

elements.peopleWhoWeAre.addEventListener(
    "pointerleave",
    () => {
        hidePeopleMenuHover();
    }
);

elements.peopleWhoWeAre.addEventListener(
    "focus",
    () => {
        showPeopleMenuHover(
            "whoWeAre"
        );
    }
);

elements.peopleWhoWeAre.addEventListener(
    "blur",
    () => {
        hidePeopleMenuHover();
    }
);

elements.peopleWhoWeAre.addEventListener(
    "click",
    () => {
        hidePeopleMenuHover();

        openPeoplePanel(
            "whoWeAre"
        );
    }
);


/* -------------------------
   JORNADA 365
------------------------- */

elements.peopleJourney365.addEventListener(
    "pointerenter",
    () => {
        showPeopleMenuHover(
            "journey365"
        );
    }
);

elements.peopleJourney365.addEventListener(
    "pointerleave",
    () => {
        hidePeopleMenuHover();
    }
);

elements.peopleJourney365.addEventListener(
    "focus",
    () => {
        showPeopleMenuHover(
            "journey365"
        );
    }
);

elements.peopleJourney365.addEventListener(
    "blur",
    () => {
        hidePeopleMenuHover();
    }
);

elements.peopleJourney365.addEventListener(
    "click",
    () => {
        hidePeopleMenuHover();

        openPeoplePanel(
            "journey365"
        );
    }
);


/* -------------------------
   INCENTIVOS
------------------------- */

elements.peopleIncentives.addEventListener(
    "pointerenter",
    () => {
        showPeopleMenuHover(
            "incentives"
        );
    }
);

elements.peopleIncentives.addEventListener(
    "pointerleave",
    () => {
        hidePeopleMenuHover();
    }
);

elements.peopleIncentives.addEventListener(
    "focus",
    () => {
        showPeopleMenuHover(
            "incentives"
        );
    }
);

elements.peopleIncentives.addEventListener(
    "blur",
    () => {
        hidePeopleMenuHover();
    }
);

elements.peopleIncentives.addEventListener(
    "click",
    () => {
        hidePeopleMenuHover();

        openPeoplePanel(
            "incentives"
        );
    }
);


/* -------------------------
   VOLTAR
------------------------- */

elements.peopleMenuBack.addEventListener(
    "click",
    () => {
        hidePeopleMenuHover();

        navigateTo(
            "peopleCulture",
            {
                x: 90,
                y: 92
            }
        );
    }
);

    /* =====================================================
       MARCAS
    ====================================================== */

    elements.brandsBack.addEventListener(
        "click",
        () => {
            navigateTo(
                "hub",
                {
                    x: 90,
                    y: 92
                }
            );
        }
    );


    /* =====================================================
       LINHA DO TEMPO
    ====================================================== */

    elements.timelineBack.addEventListener(
        "click",
        () => {
            navigateTo(
                "hub",
                {
                    x: 90,
                    y: 92
                }
            );
        }
    );

    elements.timelinePlay.addEventListener(
        "click",
        () => {
            restartFoundersVideo();

            navigateTo(
                "historyVideo",
                getBoxCenter(
                    STATIC_BOXES.timelinePlay
                )
            );
        }
    );


    /* =====================================================
       MÁQUINA DE ESCREVER / VALORES
    ====================================================== */

    elements.historyBack.addEventListener(
        "click",
        () => {
            navigateTo(
                "hub",
                {
                    x: 90,
                    y: 92
                }
            );
        }
    );

    elements.historyValues.addEventListener(
        "click",
        () => {
            navigateTo(
                "values",
                getBoxCenter(
                    STATIC_BOXES.historyValues
                )
            );
        }
    );

    elements.valuesBack.addEventListener(
        "click",
        () => {
            navigateTo(
                "history",
                {
                    x: 90,
                    y: 92
                }
            );
        }
    );


    /* =====================================================
       VÍDEO DOS FUNDADORES
    ====================================================== */

    elements.historyVideoBack.addEventListener(
        "click",
        () => {
            pauseFoundersVideo();

            navigateTo(
                "timeline",
                {
                    x: 90,
                    y: 92
                }
            );
        }
    );
}


    /* =====================================================
       HOVER DAS UNIDADES
    ====================================================== */

    function showMapHover(unitKey) {
        const config = UNITS[unitKey];

        if (!config || !config.hover) {
            return;
        }

        state.currentHover = unitKey;

        if (
            elements.mapHoverArt.getAttribute("src") !==
            config.hover
        ) {
            elements.mapHoverArt.src =
                config.hover;
        }

        elements.mapHoverArt.classList.add(
            "is-visible"
        );
    }


    function hideMapHover(force = false) {
        if (state.panelOpen && !force) {
            return;
        }

        state.currentHover = null;

        elements.mapHoverArt.classList.remove(
            "is-visible"
        );
    }


    /* =====================================================
       ABERTURA DO PAINEL
    ====================================================== */

    function openUnitPanel(
        unitKey,
        triggerButton
    ) {
        const config = UNITS[unitKey];

        if (
            !config ||
            unitKey === "hub" ||
            state.panelOpen
        ) {
            return;
        }

        state.panelOpen = true;
        state.currentUnit = unitKey;
        state.panelIndex = 0;

        state.lastPanelTrigger =
            triggerButton || null;

        state.panelItems =
            getUnitItems(unitKey);

        showMapHover(unitKey);

        elements.panelLayer.dataset.side =
            config.side;

        elements.panelFrame.src =
            config.panel;

        applyPanelLayout(config);

        renderPanelMedia(0);

        elements.panelLayer.classList.add(
            "is-visible"
        );

        elements.panelLayer.setAttribute(
            "aria-hidden",
            "false"
        );

        setElementInert(
            elements.mapHotspots,
            true
        );

        /*
            Força o navegador a registrar o estado
            inicial do clip-path antes da animação.
        */
        void elements.panelLayer.offsetWidth;

        window.requestAnimationFrame(() => {
            elements.panelLayer.classList.add(
                "is-open"
            );
        });

        window.setTimeout(
            () => {
                if (state.panelOpen) {
                    elements.panelClose.focus({
                        preventScroll: true
                    });
                }
            },
            reducedMotion
                ? 30
                : PANEL_TRANSITION_MS
        );
    }


    function applyPanelLayout(config) {
        const baseLayout =
            PANEL_LAYOUTS[config.side];

        const mediaBox =
            config.media || baseLayout.media;

        const closeBox =
            config.close || baseLayout.close;

        const pagination =
            config.pagination ||
            baseLayout.pagination;

        applyBox(
            elements.panelMediaBox,
            mediaBox
        );

        applyBox(
            elements.panelClose,
            closeBox
        );

        elements.panelPagination.style.left =
            `${pagination.left}%`;

        elements.panelPagination.style.top =
            `${pagination.top}%`;
    }


    /* =====================================================
       FECHAMENTO DO PAINEL
    ====================================================== */

    function closeUnitPanel({
        immediate = false
    } = {}) {
        if (
            !state.panelOpen &&
            !elements.panelLayer.classList.contains(
                "is-visible"
            )
        ) {
            return;
        }

        state.panelOpen = false;

        pausePanelVideos();

        elements.panelLayer.classList.remove(
            "is-open"
        );

        const finishClosing = () => {
            elements.panelLayer.classList.remove(
                "is-visible"
            );

            elements.panelLayer.setAttribute(
                "aria-hidden",
                "true"
            );

            elements.panelMediaContent.replaceChildren();

            elements.panelPagination.hidden = true;
            elements.panelDots.replaceChildren();

            state.currentUnit = null;
            state.panelItems = [];
            state.panelIndex = 0;

            setElementInert(
                elements.mapHotspots,
                false
            );

            hideMapHover(true);

            if (
                state.currentScreen === "map" &&
                state.lastPanelTrigger
            ) {
                state.lastPanelTrigger.focus({
                    preventScroll: true
                });
            }

            state.lastPanelTrigger = null;
        };

        if (immediate || reducedMotion) {
            finishClosing();
            return;
        }

        window.setTimeout(
            finishClosing,
            PANEL_TRANSITION_MS
        );
    }


    function setElementInert(
        element,
        shouldBeInert
    ) {
        if (!element) {
            return;
        }

        if ("inert" in element) {
            element.inert = shouldBeInert;
        }

        element.setAttribute(
            "aria-hidden",
            shouldBeInert
                ? "true"
                : "false"
        );
    }


    /* =====================================================
       CONTEÚDOS DAS UNIDADES
    ====================================================== */

    function getUnitItems(unitKey) {
        const contentSource =
            window.ONBOARDING_CONTENT || {};

        const rawItems =
            Array.isArray(contentSource[unitKey])
                ? contentSource[unitKey]
                : [];

        if (
            rawItems.length >
            MAX_ITEMS_PER_UNIT
        ) {
            console.warn(
                `[TV1 Onboarding] ${unitKey} possui ` +
                `${rawItems.length} conteúdos. ` +
                `Somente os primeiros ` +
                `${MAX_ITEMS_PER_UNIT} serão exibidos.`
            );
        }

        return rawItems
            .slice(0, MAX_ITEMS_PER_UNIT)
            .map(normalizeMediaItem)
            .filter(Boolean);
    }


    function normalizeMediaItem(item) {
        if (typeof item === "string") {
            item = {
                src: item
            };
        }

        if (
            !item ||
            typeof item !== "object" ||
            typeof item.src !== "string" ||
            item.src.trim() === ""
        ) {
            return null;
        }

        const src = item.src.trim();

        let type =
            typeof item.type === "string"
                ? item.type.toLowerCase()
                : "";

        if (
            type !== "image" &&
            type !== "video"
        ) {
            type =
                /\.mp4(?:$|\?)/i.test(src)
                    ? "video"
                    : "image";
        }

        return {
            type,
            src,

            alt:
                typeof item.alt === "string"
                    ? item.alt
                    : "",

            poster:
                typeof item.poster === "string"
                    ? item.poster
                    : "",

            objectPosition:
                typeof item.objectPosition === "string"
                    ? item.objectPosition
                    : "center center"
        };
    }


    /* =====================================================
       RENDERIZAÇÃO DA MÍDIA
    ====================================================== */

    function renderPanelMedia(direction = 0) {
        pausePanelVideos();

        elements.panelMediaContent.replaceChildren();

        const items =
            state.panelItems;

        if (!items.length) {
            elements.panelEmptyState.hidden = false;

            elements.panelPagination.hidden = true;

            elements.mediaPreviousHit.hidden = true;
            elements.mediaNextHit.hidden = true;

            return;
        }

        elements.panelEmptyState.hidden = true;

        const currentItem =
            items[state.panelIndex];

        const mediaElement =
            createMediaElement(currentItem);

        elements.panelMediaContent.appendChild(
            mediaElement
        );

        animateMediaEntry(
            mediaElement,
            direction
        );

        const isVideo =
            currentItem.type === "video";

        /*
            Para não bloquear os controles do vídeo,
            as áreas laterais de clique só funcionam
            quando o conteúdo atual é uma imagem.
        */
        elements.mediaPreviousHit.hidden =
            isVideo;

        elements.mediaNextHit.hidden =
            isVideo;

        elements.mediaPreviousHit.disabled =
            state.panelIndex <= 0;

        elements.mediaNextHit.disabled =
            state.panelIndex >= items.length - 1;

        updatePanelPagination();
    }


    function createMediaElement(item) {
        let element;

        if (item.type === "video") {
            element =
                document.createElement("video");

            element.controls = true;
            element.playsInline = true;
            element.preload = "metadata";

            element.src = item.src;

            if (item.poster) {
                element.poster =
                    item.poster;
            }

            element.addEventListener(
                "error",
                showPanelMediaError,
                {
                    once: true
                }
            );
        } else {
            element =
                document.createElement("img");

            element.src = item.src;
            element.alt = item.alt;
            element.draggable = false;

            element.addEventListener(
                "error",
                showPanelMediaError,
                {
                    once: true
                }
            );
        }

        element.className =
            "panel-media-item";

        element.style.objectPosition =
            item.objectPosition;

        return element;
    }


    function showPanelMediaError() {
        elements.panelMediaContent.replaceChildren();

        const message =
            document.createElement("div");

        message.className =
            "media-error";

        message.textContent =
            "Conteúdo em breve";

        elements.panelMediaContent.appendChild(
            message
        );
    }


    function animateMediaEntry(
        element,
        direction
    ) {
        if (
            reducedMotion ||
            !direction ||
            typeof element.animate !== "function"
        ) {
            return;
        }

        const startPosition =
            direction > 0
                ? "translateX(3.5%)"
                : "translateX(-3.5%)";

        element.animate(
            [
                {
                    opacity: 0,
                    transform: startPosition
                },
                {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 420,
                easing:
                    "cubic-bezier(0.22, 0.78, 0.24, 1)",
                fill: "both"
            }
        );
    }



    /* =====================================================
       NAVEGAÇÃO DOS CONTEÚDOS
    ====================================================== */

    function goToPanelItem(nextIndex) {
        if (!state.panelOpen) {
            return;
        }

        if (
            nextIndex < 0 ||
            nextIndex >= state.panelItems.length ||
            nextIndex === state.panelIndex
        ) {
            return;
        }

        const direction =
            nextIndex > state.panelIndex
                ? 1
                : -1;

        state.panelIndex =
            nextIndex;

        renderPanelMedia(direction);
    }


    function goToPreviousPanelItem() {
        goToPanelItem(
            state.panelIndex - 1
        );
    }


    function goToNextPanelItem() {
        goToPanelItem(
            state.panelIndex + 1
        );
    }

    function updatePanelPagination() {
    const total =
        state.panelItems.length;

    /*
        Com apenas um conteúdo,
        não precisamos mostrar paginação.
    */
    if (total <= 1) {
        elements.panelPagination.hidden =
            true;

        return;
    }

    /*
        Com 2 ou mais conteúdos,
        mostramos as setas e indicadores.
    */
    elements.panelPagination.hidden =
        false;

    elements.panelPrevious.disabled =
        state.panelIndex === 0;

    elements.panelNext.disabled =
        state.panelIndex ===
        total - 1;

    /*
        Remove os indicadores antigos.
    */
    elements.panelDots.replaceChildren();

    /*
        Mostra no máximo 3 indicadores.
    */
    const visibleCount =
        Math.min(3, total);

    let startIndex = 0;

    if (total > visibleCount) {
        startIndex = Math.min(
            Math.max(
                state.panelIndex - 1,
                0
            ),
            total - visibleCount
        );
    }

    /*
        Cria os indicadores.
    */
    for (
        let index = startIndex;
        index < startIndex + visibleCount;
        index += 1
    ) {
        const dot =
            document.createElement("button");

        dot.type = "button";

        dot.className =
            "pagination-dot";

        dot.setAttribute(
            "aria-label",
            `Ir para o conteúdo ${index + 1}`
        );

        if (
            index === state.panelIndex
        ) {
            dot.classList.add(
                "is-active"
            );
        }

        dot.addEventListener(
            "click",
            () => {
                goToPanelItem(index);
            }
        );

        elements.panelDots.appendChild(
            dot
        );
    }
} 
    function updatePeoplePanelPagination() {
    const total =
        state.peoplePanelItems.length;

    /*
        Se houver apenas 1 conteúdo,
        não existe necessidade de paginação.
    */
    if (total <= 1) {
        elements.peoplePanelPagination.hidden =
            true;

        return;
    }

    /*
        Se houver 2 ou mais conteúdos,
        mostra a paginação.
    */
    elements.peoplePanelPagination.hidden =
        false;

    elements.peoplePanelPagination.style.display =
        "flex";


    /*
        Ativa/desativa as setas.
    */
    elements.peoplePanelPrevious.disabled =
        state.peoplePanelIndex === 0;

    elements.peoplePanelNext.disabled =
        state.peoplePanelIndex ===
        total - 1;


    /*
        Limpa os indicadores anteriores.
    */
    elements.peoplePanelDots.replaceChildren();


    /*
        Exibe no máximo 3 indicadores.
    */
    const visibleCount =
        Math.min(3, total);

    let startIndex = 0;

    if (total > visibleCount) {
        startIndex = Math.min(
            Math.max(
                state.peoplePanelIndex - 1,
                0
            ),
            total - visibleCount
        );
    }


    /*
        Cria as bolinhas.
    */
    for (
        let index = startIndex;
        index < startIndex + visibleCount;
        index += 1
    ) {
        const dot =
            document.createElement("button");

        dot.type = "button";

        dot.className =
            "pagination-dot";

        dot.setAttribute(
            "aria-label",
            `Ir para o conteúdo ${index + 1}`
        );

        if (
            index ===
            state.peoplePanelIndex
        ) {
            dot.classList.add(
                "is-active"
            );
        }

        dot.addEventListener(
            "click",
            () => {
                goToPeoplePanelItem(index);
            }
        );

        elements.peoplePanelDots.appendChild(
            dot
        );
    }
}


    function pausePanelVideos() {
        elements.panelMediaContent
            .querySelectorAll("video")
            .forEach((video) => {
                video.pause();
            });
    }

    function openPresentation(source) {
    let items;
    let index;

    if (source === "people") {
        items =
            state.peoplePanelItems;

        index =
            state.peoplePanelIndex;
    } else {
        items =
            state.panelItems;

        index =
            state.panelIndex;
    }

    if (
        !items ||
        !items.length
    ) {
        return;
    }

    state.presentationOpen =
        true;

    state.presentationSource =
        source;

    state.presentationItems =
        items;

    state.presentationIndex =
        index;

    elements.presentationOverlay.hidden =
        false;

    elements.presentationOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    renderPresentation();
}


function closePresentation() {
    if (!state.presentationOpen) {
        return;
    }

    /*
        Mantém no painel normal
        o mesmo slide que estava
        sendo apresentado.
    */

    if (
        state.presentationSource ===
        "people"
    ) {
        state.peoplePanelIndex =
            state.presentationIndex;

        renderPeoplePanelMedia(0);
    } else {
        state.panelIndex =
            state.presentationIndex;

        renderPanelMedia(0);
    }

    pausePresentationVideos();

    state.presentationOpen =
        false;

    state.presentationSource =
        null;

    state.presentationItems =
        [];

    elements.presentationOverlay.hidden =
        true;

    elements.presentationOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


function renderPresentation() {
    pausePresentationVideos();

    elements.presentationMedia.replaceChildren();

    const items =
        state.presentationItems;

    if (!items.length) {
        return;
    }

    const item =
        items[state.presentationIndex];

    let media;

    if (item.type === "video") {
        media =
            document.createElement("video");

        media.controls = true;
        media.playsInline = true;
        media.preload = "metadata";
        media.src = item.src;

        if (item.poster) {
            media.poster =
                item.poster;
        }
    } else {
        media =
            document.createElement("img");

        media.src =
            item.src;

        media.alt =
            item.alt || "";

        media.draggable =
            false;
    }

    media.style.objectPosition =
        item.objectPosition ||
        "center center";

    elements.presentationMedia.appendChild(
        media
    );

    elements.presentationPrevious.disabled =
        state.presentationIndex === 0;

    elements.presentationNext.disabled =
        state.presentationIndex ===
        items.length - 1;

    updatePresentationDots();
}


function goToPresentationItem(index) {
    const total =
        state.presentationItems.length;

    if (!total) {
        return;
    }

    const nextIndex =
        Math.max(
            0,
            Math.min(
                index,
                total - 1
            )
        );

    if (
        nextIndex ===
        state.presentationIndex
    ) {
        return;
    }

    state.presentationIndex =
        nextIndex;

    renderPresentation();
}


function updatePresentationDots() {
    const total =
        state.presentationItems.length;

    elements.presentationDots.replaceChildren();

    if (total <= 1) {
        return;
    }

    const visibleCount =
        Math.min(3, total);

    let startIndex = 0;

    if (total > visibleCount) {
        startIndex =
            Math.min(
                Math.max(
                    state.presentationIndex - 1,
                    0
                ),
                total - visibleCount
            );
    }

    for (
        let index = startIndex;
        index <
        startIndex + visibleCount;
        index += 1
    ) {
        const dot =
            document.createElement(
                "button"
            );

        dot.type = "button";

        dot.className =
            "presentation-dot";

        if (
            index ===
            state.presentationIndex
        ) {
            dot.classList.add(
                "is-active"
            );
        }

        dot.addEventListener(
            "click",
            () => {
                goToPresentationItem(
                    index
                );
            }
        );

        elements.presentationDots.appendChild(
            dot
        );
    }
}


function pausePresentationVideos() {
    if (!elements.presentationMedia) {
        return;
    }

    elements.presentationMedia
        .querySelectorAll("video")
        .forEach((video) => {
            video.pause();
        });
} 

    /* =====================================================
       EVENTOS DO PAINEL
    ====================================================== */

    function bindPanelEvents() {
        elements.panelClose.addEventListener(
            "click",
            () => {
                closeUnitPanel();
            }
        );

        elements.panelPrevious.addEventListener(
            "click",
            goToPreviousPanelItem
        );

        elements.panelNext.addEventListener(
            "click",
            goToNextPanelItem
        );

        elements.panelExpand.addEventListener(
    "click",
    () => {
        openPresentation("unit");
    }
);

elements.peoplePanelExpand.addEventListener(
    "click",
    () => {
        openPresentation("people");
    }
);


elements.presentationClose.addEventListener(
    "click",
    () => {
        closePresentation();
    }
);


elements.presentationPrevious.addEventListener(
    "click",
    () => {
        goToPresentationItem(
            state.presentationIndex - 1
        );
    }
);


elements.presentationNext.addEventListener(
    "click",
    () => {
        goToPresentationItem(
            state.presentationIndex + 1
        );
    }
);

        elements.mediaPreviousHit.addEventListener(
            "click",
            goToPreviousPanelItem
        );

        elements.mediaNextHit.addEventListener(
            "click",
            goToNextPanelItem
        );
        elements.peoplePanelClose.addEventListener(
    "click",
    () => {
        closePeoplePanel();
    }
);

elements.peoplePanelBack.addEventListener(
    "click",
    () => {
        closePeoplePanel();
    }
);

elements.peoplePanelPrevious.addEventListener(
    "click",
    () => {
        goToPeoplePanelItem(
            state.peoplePanelIndex - 1
        );
    }
);

elements.peoplePanelNext.addEventListener(
    "click",
    () => {
        goToPeoplePanelItem(
            state.peoplePanelIndex + 1
        );
    }
);

elements.peopleMediaPreviousHit.addEventListener(
    "click",
    () => {
        goToPeoplePanelItem(
            state.peoplePanelIndex - 1
        );
    }
);

elements.peopleMediaNextHit.addEventListener(
    "click",
    () => {
        goToPeoplePanelItem(
            state.peoplePanelIndex + 1
        );
    }
);
    }
    
    function startJourneyTransition() {
    if (
        state.transitionLocked ||
        state.currentScreen !== "start"
    ) {
        return;
    }

    const startScreen =
        elements.screens.get("start");

    const mapScreen =
        elements.screens.get("map");

    if (!startScreen || !mapScreen) {
        return;
    }

    state.transitionLocked = true;

    startScreen.classList.add(
        "is-intro-source"
    );

    startScreen.style.zIndex = "2";
    mapScreen.style.zIndex = "3";

    mapScreen.classList.add(
        "is-active",
        "is-intro-target"
    );

    mapScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    void mapScreen.offsetWidth;

    window.requestAnimationFrame(() => {
        mapScreen.classList.add(
            "is-intro-visible"
        );
    });

    window.setTimeout(
        () => {
            mapScreen.classList.add(
                "is-points-visible"
            );
        },
        reducedMotion ? 10 : 240
    );

    window.setTimeout(
        () => {
            startScreen.classList.remove(
                "is-active",
                "is-intro-source"
            );

            startScreen.setAttribute(
                "aria-hidden",
                "true"
            );

            mapScreen.classList.remove(
                "is-intro-target",
                "is-intro-visible"
            );

            startScreen.style.zIndex = "";
            mapScreen.style.zIndex = "";

            state.currentScreen = "map";
            state.transitionLocked = false;

            mapScreen.focus({
                preventScroll: true
            });
        },
        reducedMotion ? 30 : 850
    );
}


    /* =====================================================
       NAVEGAÇÃO ENTRE TELAS
    ====================================================== */

   function navigateTo(
    targetScreenName,
    origin = {
        x: 50,
        y: 50
    }
) {
    if (
        state.transitionLocked ||
        targetScreenName === state.currentScreen
    ) {
        return;
    }

    if (state.panelOpen) {
        closeUnitPanel({
            immediate: true
        });
    }

    /*
        Se estivermos saindo do menu de
        Pessoas & Cultura com um painel aberto,
        fecha o painel imediatamente.
    */
    if (
        state.peoplePanelOpen &&
        targetScreenName !== "peopleMenu"
    ) {
        closePeoplePanel({
            immediate: true
        });
    }

    if (
        state.currentScreen === "hub" &&
        targetScreenName !== "hub"
    ) {
        hideHubHover();
    }

    /*
        Ao sair do menu de Pessoas & Cultura,
        remove qualquer imagem de hover.
    */
    if (
        state.currentScreen === "peopleMenu" &&
        targetScreenName !== "peopleMenu"
    ) {
        hidePeopleMenuHover();
    }

    const currentScreen =
        elements.screens.get(
            state.currentScreen
        );

    const targetScreen =
        elements.screens.get(
            targetScreenName
        );

    if (
        !currentScreen ||
        !targetScreen
    ) {
        console.error(
            `[TV1 Onboarding] Tela não encontrada: ` +
            targetScreenName
        );

        return;
    }


    /* =====================================================
       TRANSIÇÃO INSTANTÂNEA
       Pessoas & Cultura → Menu Pessoas & Cultura
    ====================================================== */

   const instantPeopleTransition =
    (
        state.currentScreen === "peopleCulture" &&
        targetScreenName === "peopleMenu"
    ) ||
    (
        state.currentScreen === "peopleMenu" &&
        targetScreenName === "peopleCulture"
    );

   if (instantPeopleTransition) {

    /*
        Desliga completamente qualquer
        transition/animação CSS das duas telas.
    */
    currentScreen.classList.add(
        "no-transition"
    );

    targetScreen.classList.add(
        "no-transition"
    );


    /*
        Limpa classes de animações anteriores.
    */
    currentScreen.classList.remove(
        "is-entering",
        "is-leaving"
    );

    targetScreen.classList.remove(
        "is-entering",
        "is-leaving"
    );


    /*
        Troca as telas imediatamente.
    */
    currentScreen.classList.remove(
        "is-active"
    );

    currentScreen.setAttribute(
        "aria-hidden",
        "true"
    );

    targetScreen.classList.add(
        "is-active"
    );

    targetScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Atualiza o estado imediatamente.
    */
    state.currentScreen =
        targetScreenName;

    state.transitionLocked =
        false;


    /*
        Remove hovers antigos.
    */
    if (
        elements.peopleCultureHoverArt
    ) {
        elements.peopleCultureHoverArt
            .classList.remove(
                "is-visible"
            );
    }

    hidePeopleMenuHover();


    /*
        Força o navegador a aplicar a troca
        sem qualquer frame intermediário.
    */
    void targetScreen.offsetWidth;


    /*
        Depois que a tela já foi trocada,
        devolvemos as transições normais para
        futuras navegações.
    */
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {

            currentScreen.classList.remove(
                "no-transition"
            );

            targetScreen.classList.remove(
                "no-transition"
            );

        });
    });


    targetScreen.focus({
        preventScroll: true
    });

    return;
}

    /* =====================================================
       TRANSIÇÕES NORMAIS DO RESTANTE DA EXPERIÊNCIA
    ====================================================== */

    state.transitionLocked = true;

    if (
        state.currentScreen ===
        "historyVideo"
    ) {
        pauseFoundersVideo();
    }

    if (targetScreenName === "map") {
        hideMapHover(true);
    }

    currentScreen.style.setProperty(
        "--origin-x",
        `${origin.x}%`
    );

    currentScreen.style.setProperty(
        "--origin-y",
        `${origin.y}%`
    );

    targetScreen.style.setProperty(
        "--origin-x",
        `${origin.x}%`
    );

    targetScreen.style.setProperty(
        "--origin-y",
        `${origin.y}%`
    );

    /*
        O z-index é ajustado temporariamente para
        que a navegação funcione tanto para frente
        quanto para trás na ordem do HTML.
    */
    currentScreen.style.zIndex = "2";
    targetScreen.style.zIndex = "3";

    targetScreen.classList.add(
        "is-active",
        "is-entering"
    );

    targetScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    void targetScreen.offsetWidth;

    window.requestAnimationFrame(() => {
        currentScreen.classList.add(
            "is-leaving"
        );

        targetScreen.classList.remove(
            "is-entering"
        );
    });

    const transitionDuration =
        reducedMotion
            ? 40
            : SCREEN_TRANSITION_MS;

    window.setTimeout(
        () => {
            currentScreen.classList.remove(
                "is-active",
                "is-leaving"
            );

            currentScreen.setAttribute(
                "aria-hidden",
                "true"
            );

            currentScreen.style.zIndex = "";
            targetScreen.style.zIndex = "";

            state.currentScreen =
                targetScreenName;

            state.transitionLocked = false;

            if (
                targetScreenName !== "map"
            ) {
                hideMapHover(true);
            }

            targetScreen.focus({
                preventScroll: true
            });
        },
        transitionDuration
    );
}


    /* =====================================================
       VÍDEO DOS FUNDADORES
    ====================================================== */

    function configureFoundersVideo() {
        const configuredPath =
            typeof window.ONBOARDING_FOUNDERS_VIDEO ===
            "string"
                ? window.ONBOARDING_FOUNDERS_VIDEO
                : "assets/videos/fundadores.mp4";

        elements.foundersVideoSource.src =
            configuredPath;

        elements.foundersVideo.addEventListener(
            "loadeddata",
            showFoundersVideo
        );

        elements.foundersVideo.addEventListener(
            "canplay",
            showFoundersVideo
        );

        elements.foundersVideo.addEventListener(
            "error",
            showFoundersVideoEmpty
        );

        elements.foundersVideo.load();
    }


    function showFoundersVideo() {
        elements.foundersVideo.classList.add(
            "is-ready"
        );

        elements.foundersVideoEmpty.hidden = true;
    }


    function showFoundersVideoEmpty() {
        elements.foundersVideo.classList.remove(
            "is-ready"
        );

        elements.foundersVideoEmpty.hidden = false;
    }


    function restartFoundersVideo() {
        const video =
            elements.foundersVideo;

        try {
            video.currentTime = 0;
        } catch (error) {
            /*
                Alguns navegadores não permitem alterar
                currentTime antes dos metadados carregarem.
            */
        }

        const playPromise =
            video.play();

        if (
            playPromise &&
            typeof playPromise.catch === "function"
        ) {
            playPromise.catch(() => {
                /*
                    Caso o navegador bloqueie a reprodução
                    automática com áudio, o usuário ainda
                    poderá clicar no botão nativo de play.
                */
            });
        }
    }


    function pauseFoundersVideo() {
        elements.foundersVideo.pause();
    }


    /* =====================================================
       TECLADO
    ====================================================== */

    function bindKeyboardEvents() {
        document.addEventListener(
            "keydown",
            handleKeyboard
        );
    }


    function handleKeyboard(event) {
        const target =
            event.target;

        const isTypingElement =
            target instanceof HTMLElement &&
            Boolean(
                target.closest(
                    "input, textarea, select, video"
                )
            );

            /* =========================================
       MODO APRESENTAÇÃO
       ========================================= */

    if (state.presentationOpen) {

        if (event.key === "Escape") {
            event.preventDefault();

            closePresentation();

            return;
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();

            goToPresentationItem(
                state.presentationIndex - 1
            );

            return;
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();

            goToPresentationItem(
                state.presentationIndex + 1
            );

            return;
        }
    }

        if (event.key === "Escape") {

             if (state.peoplePanelOpen) {
            event.preventDefault();

            closePeoplePanel();

            return;
        }
            if (state.panelOpen) {
                event.preventDefault();

                closeUnitPanel();
                return;
            }

            if (
                state.currentScreen ===
                "historyVideo"
            ) {
                event.preventDefault();

                pauseFoundersVideo();

                navigateTo(
                    "timeline",
                    {
                        x: 90,
                        y: 92
                    }
                );

                return;
            }
            if (state.currentScreen === "values") {
                event.preventDefault();
                
                navigateTo(
                    "history",
                    {
                        x: 90,
                        y: 92
                    }
                );
                
                return;
            }

 if (
        state.currentScreen ===
        "peopleMenu"
    ) {
        event.preventDefault();

        navigateTo(
            "peopleCulture",
            {
                x: 90,
                y: 92
            }
        );

        return;
    }


    /* TELA PRINCIPAL PESSOAS & CULTURA */
    if (
        state.currentScreen ===
        "peopleCulture"
    ) {
        event.preventDefault();

        navigateTo(
            "hubCorridor",
            {
                x: 90,
                y: 92
            }
        );

        return;
    }


    /* CORREDOR DO HUB */
    if (
        state.currentScreen ===
        "hubCorridor"
    ) {
        event.preventDefault();

        navigateTo(
            "map",
            {
                x: 50,
                y: 88
            }
        );

        return;
    }


            if (
                ["brands", "timeline", "history"]
                    .includes(state.currentScreen)
            ) {
                event.preventDefault();

                navigateTo(
                    "hub",
                    {
                        x: 90,
                        y: 92
                    }
                );

                return;
            }

            if (state.currentScreen === "hub") {
                event.preventDefault();

                navigateTo(
                    "hubCorridor",
                    {
                        x: 10,
                        y: 55
                    }
                );
            }

            return;
        }

        if (
            state.panelOpen &&
            !isTypingElement
        ) {
            if (event.key === "ArrowLeft") {
                event.preventDefault();

                goToPreviousPanelItem();
                return;
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();

                goToNextPanelItem();
                return;
            }
        }

        if (
            state.currentScreen === "start" &&
            (
                event.key === "Enter" ||
                event.key === " "
            )
        ) {
            event.preventDefault();

            elements.startJourney.click();
        }
    }


    /* =====================================================
       PRÉ-CARREGAMENTO DAS ARTES
    ====================================================== */

    function preloadInterfaceAssets() {
        const startedAt =
            performance.now();

        const unitAssets =
            Object
                .values(UNITS)
                .flatMap((config) => [
                    config.hover,
                    config.panel
                ])
                .filter(Boolean);

        const screenAssets =
            Object.values(ASSETS.screens);

        const assetList =
            Array.from(
                new Set([
                    ...screenAssets,
                    ...unitAssets
                ])
            );

        let completedAssets = 0;

        const promises =
            assetList.map((src) => {
                return preloadImage(src)
                    .finally(() => {
                        completedAssets += 1;

                        const percentage =
                            (
                                completedAssets /
                                assetList.length
                            ) * 100;

                        elements.preloaderBar.style.width =
                            `${percentage}%`;
                    });
            });

        const maximumWait =
            new Promise((resolve) => {
                window.setTimeout(
                    resolve,
                    7000
                );
            });

        Promise
            .race([
                Promise.allSettled(promises),
                maximumWait
            ])
            .then(() => {
                const elapsed =
                    performance.now() -
                    startedAt;

                const minimumVisibleTime =
                    650;

                const remainingTime =
                    Math.max(
                        0,
                        minimumVisibleTime -
                        elapsed
                    );

                window.setTimeout(
                    hidePreloader,
                    remainingTime
                );
            });
    }


    function preloadImage(src) {
        return new Promise((resolve) => {
            const image =
                new Image();

            image.onload = () => {
                resolve(true);
            };

            image.onerror = () => {
                console.warn(
                    `[TV1 Onboarding] Não foi possível carregar: ${src}`
                );

                resolve(false);
            };

            image.src = src;
        });
    }


    function hidePreloader() {
        if (state.preloaderHidden) {
            return;
        }

        state.preloaderHidden = true;

        elements.preloaderBar.style.width =
            "100%";

        elements.preloader.classList.add(
            "is-hidden"
        );

        elements.preloader.setAttribute(
            "aria-hidden",
            "true"
        );

        window.setTimeout(
            () => {
                elements.preloader.hidden = true;
            },
            reducedMotion
                ? 20
                : 520
        );
    }


    /* =====================================================
       INICIA O PROJETO
    ====================================================== */

    if (
        document.readyState === "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            init,
            {
                once: true
            }
        );
    } else {
        init();
    }
})();