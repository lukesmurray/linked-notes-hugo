const popupCallback = () => {
  const isPopup = windowIsPopup();
  if (!isPopup) {
    Promise.all([
      loadScript("https://unpkg.com/@popperjs/core@2").then(() =>
        loadScript("https://unpkg.com/tippy.js@6")
      ),
      loadStyleSheet("https://unpkg.com/tippy.js@6/themes/light.css"),
      loadStyleSheet("https://unpkg.com/tippy.js@6/animations/shift-away.css"),
    ]).then(() => {
      initializeTippy();
    });
  } else {
    const base = document.createElement("base");
    base.setAttribute("target", "_parent");
    document.head.append(base);
    document.body.classList.add("popup");
  }
};

if (document.readyState !== "loading") {
  popupCallback();
} else {
  window.addEventListener("DOMContentLoaded", () => popupCallback());
}

function windowIsPopup() {
  const windowURL = new URL(window.location);
  const pageIsPopup = windowURL.searchParams.has("popup");
  return pageIsPopup;
}

function initializeTippy() {
  const tippyOptions = {
    appendTo: () => document.body,
    touch: false,
    allowHTML: true,
    interactive: true,
    theme: "light",
    maxWidth: "none",
    placement: "right",
    delay: [250, 100],
    offset: [0, 16],
    interactiveBorder: 20,
    animation: "shift-away",
    popperOptions: {
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: ["right", "left", "top", "bottom"],
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: 16,
            tether: false,
            altBoundary: true,
            altAxis: true, // false by default
          },
        },
      ],
    },
    overrides: ["content"],
    moveTransition: "transform 0.2s ease-out",
  };

  // render internal links
  const internalSingleton = tippy.createSingleton(
    tippy(document.querySelectorAll(".internal-link"), {
      content: renderInternalPopup,
    }),
    tippyOptions
  );

  // render TOC
  const TOCSingleton = tippy.createSingleton(
    tippy(document.querySelectorAll("#TOC a"), {
      content: renderTOCPopup,
    }),
    tippyOptions
  );

  // render NAV
  const navSingleton = tippy.createSingleton(
    tippy(document.querySelectorAll("header > nav a"), {
      content: renderInternalPopup,
    }),
    tippyOptions
  );

  // taxonomy singleton
  // const taxonomySingleton = tippy.createSingleton(
  //   tippy(document.querySelectorAll("header > ul a"), {
  //     content: renderInternalPopup,
  //   }),
  //   tippyOptions
  // );

  // render Citations
  const citationSingleton = tippy.createSingleton(
    tippy(document.querySelectorAll('[role="doc-biblioref"]'), {
      content: renderCitationPopup,
    }),
    tippyOptions
  );

  // render footnotes
  const footnoteSingleton = tippy.createSingleton(
    tippy(document.querySelectorAll('[role="doc-noteref"]'), {
      content: renderFootnotePopup,
    }),
    tippyOptions
  );

  function renderFootnotePopup(reference) {
    const footnoteNoteId = reference.getAttribute("href").replace("sn", "fn");
    const ogFootnoteNode = document
      .querySelector(footnoteNoteId)
      .cloneNode(true);
    const popupFootnoteNode = document.createElement("div");
    while (ogFootnoteNode.childNodes.length) {
      popupFootnoteNode.appendChild(ogFootnoteNode.firstChild);
    }
    [...ogFootnoteNode.attributes].forEach((attr) => {
      popupFootnoteNode.setAttribute(attr.nodeName, attr.nodeValue);
    });

    popupFootnoteNode.id = popupFootnoteNode.id + "__clone";
    const footnoteNodeWrapper = document.createElement("article");
    footnoteNodeWrapper.classList.add("refNodeWrapper");
    footnoteNodeWrapper.appendChild(popupFootnoteNode);
    return footnoteNodeWrapper;
  }

  function renderCitationPopup(reference) {
    const citationNodeId = reference.getAttribute("href");
    const citationNode = document.querySelector(citationNodeId).cloneNode(true);
    citationNode.id = citationNode.id + "__clone";
    const citationNodeWrapper = document.createElement("article");
    citationNodeWrapper.classList.add("refNodeWrapper");
    citationNodeWrapper.appendChild(citationNode);
    return citationNodeWrapper;
  }

  function renderInternalPopup(reference) {
    const url = new URL(
      reference.getAttribute("href"),
      window.location.origin + window.location.pathname
    );
    url.searchParams.append("popup", "1");
    const frame =
      '<iframe class="popup" src="' +
      url.toString() +
      '"frameborder="0"></iframe>';
    return frame;
  }

  function renderTOCPopup(reference) {
    const url = new URL(
      reference.getAttribute("href"),
      window.location.origin + window.location.pathname
    );
    const selector = `#${CSS.escape(url.hash.slice(1))}`;
    const refNode = document.querySelector(selector).cloneNode(true);
    refNode.id = refNode.id + "__clone";
    const refNodeWrapper = document.createElement("article");
    refNodeWrapper.classList.add("refNodeWrapper");
    refNodeWrapper.appendChild(refNode);
    return refNodeWrapper;
  }

  let isEnabled = null;
  // the width of half screen on my mac
  const minPopupWidth = 705;
  const resizeObserver = new ResizeObserver((entries) => {
    const target = entries[0].target;
    const targetWidth = target.getBoundingClientRect().width;
    if (targetWidth >= minPopupWidth && (isEnabled === null || !isEnabled)) {
      navSingleton.enable();
      internalSingleton.enable();
      TOCSingleton.enable();
      citationSingleton.enable();
      footnoteSingleton.enable();
      // taxonomySingleton.enable();
      isEnabled = true;
    } else if (
      targetWidth < minPopupWidth &&
      (isEnabled === null || isEnabled)
    ) {
      navSingleton.disable();
      internalSingleton.disable();
      TOCSingleton.disable();
      citationSingleton.disable();
      footnoteSingleton.disable();
      // taxonomySingleton.disable();
      isEnabled = false;
    }
  });

  resizeObserver.observe(document.body);
}

// from https://aaronsmith.online/easily-load-an-external-script-using-javascript/
function loadScript(src, id = "") {
  return new Promise((resolve, reject) => {
    if (id.length === 0 || document.getElementById(id) === null) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = resolve;
      script.onerror = reject;
      script.src = src;
      if (id.length !== 0) {
        script.id = id;
      }
      document.head.append(script);
    }
  });
}

function loadStyleSheet(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.onload = resolve;
    link.onerror = reject;
    link.setAttribute("href", url);
    document.head.prepend(link);
  });
}
