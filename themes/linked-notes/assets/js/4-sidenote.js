// see https://github.com/capnfabs/paperesque/blob/mainline/js/floatingFootnotes.js

const FOOTNOTE_SELECTOR = '[role="doc-endnote"]';

const FOOTNOTE_REF_SELECTOR = '[role="doc-noteref"]';

const SIDENOTE_SELECTOR = '[role="doc-sidenote"]';

const FOOTNOTE_BACKLINK_SELECTOR = '[role="doc-backlink"]';

const SIDENOTE_FOOTNOTE_REF_ID_ATTR = "data-footnote-ref-id";

const SIDENOTE_FOOTNOTE_ID_ATTR = "data-footnote-id";

const MIN_WINDOW_SIZE_WITH_FN = 752;

const DISABLED = false;

/**
 * Get all the footnotes in the document
 * @returns {HTMLLIElement[]}
 */
const footnotes = () =>
  Array.from(document.querySelectorAll(FOOTNOTE_SELECTOR));

/**
 * Get all the references to footnotes in the document
 * @returns {HTMLAnchorElement[]}
 */
const footnoteRefs = () =>
  Array.from(document.querySelectorAll(FOOTNOTE_REF_SELECTOR));

/**
 * Get all the sidenotes in the document
 * @returns {HTMLLIElement[]}
 */
const sidenotes = () =>
  Array.from(document.querySelectorAll(SIDENOTE_SELECTOR));

/**
 * Mapping from footnote id to footnote ref id
 * @returns {Record<string, string>}
 */
const footnoteIdToFootnoteRefId = () => {
  const fns = footnotes();
  return fns.reduce((fnIdToFnRefId, fn) => {
    const fnId = fn.getAttribute("id");
    const fnRefLink = fn.querySelector(FOOTNOTE_BACKLINK_SELECTOR);
    const fnRefId = new URL(fnRefLink.getAttribute("href")).hash.slice(1);
    return { ...fnIdToFnRefId, [fnId]: fnRefId };
  }, {});
};

/**
 * @returns {HTMLLIElement[]}
 */
const createSidenotes = () => {
  const fnIdToFnRefId = footnoteIdToFootnoteRefId();
  return footnotes().map((fn) => {
    const fnId = fn.getAttribute("id");
    const snId = fnId.replace("fn", "sn");
    let sn = document.querySelector("#" + snId);
    if (sn === null) {
      // create the sidenote
      sn = document.createElement("li");
      //copy footnote contents into the sidenote
      fn.childNodes.forEach((child) => sn.appendChild(child.cloneNode(true)));
      // change the sidenote backlink
      const snBackLink = sn.querySelector(FOOTNOTE_BACKLINK_SELECTOR);
      snBackLink.classList.replace("footnote-back", "sidenote-back");
      snBackLink.setAttribute("role", "doc-sidenote-backlink");

      // set the attributes on the sidenote
      const fnRefId = fnIdToFnRefId[fnId];
      sn.setAttribute(SIDENOTE_FOOTNOTE_REF_ID_ATTR, fnRefId);
      sn.setAttribute(SIDENOTE_FOOTNOTE_ID_ATTR, fnId);
      sn.setAttribute("id", snId);
      sn.setAttribute("role", "doc-sidenote");
      sn.classList.add("sidenote");
    }
    return sn;
  });
};

/**
 *
 * @param {HTMLElement} element
 */
const elementIsOnPage = (element) => {
  return element.getRootNode() === document;
};

// Computes an offset such that setting `top` on elemToAlign will put it
// in vertical alignment with targetAlignment.
function computeOffsetForAlignment(elemToAlign, targetAlignment) {
  const offsetParentTop = elemToAlign.offsetParent.getBoundingClientRect().top;
  // Distance between the top of the offset parent and the top of the target alignment
  return targetAlignment.getBoundingClientRect().top - offsetParentTop;
}

/**
 *
 * @param {HTMLLIElement[]} sidenotes
 */
function layoutSidenotes(sidenotes) {
  let bottomOfLastSidenote = 0;
  for (let sn of sidenotes) {
    const snRef = document.querySelector(
      "#" + sn.getAttribute(SIDENOTE_FOOTNOTE_REF_ID_ATTR)
    );
    const verticalAlignmentTarget = snRef.closest(
      "p,li,figure,blockquote,section,dl"
    );
    if (sn.offsetParent === null) {
      break;
    }
    let offset = computeOffsetForAlignment(sn, verticalAlignmentTarget);
    if (offset < bottomOfLastSidenote) {
      offset = bottomOfLastSidenote;
    }
    bottomOfLastSidenote =
      offset +
      sn.getBoundingClientRect().height +
      parseFloat(window.getComputedStyle(sn).marginBottom) +
      parseFloat(window.getComputedStyle(sn).marginTop);
    sn.style.top = offset + "px";
  }
}

function subscribeResizeObserver(observer) {
  [document.querySelector("body > main"), ...sidenotes()].forEach((el) =>
    observer.observe(el)
  );
}

function unSubscribeResizeObserver(observer) {
  observer.disconnect();
}

function linkRefsToSidenotes() {
  footnoteRefs().forEach((fnRef) => {
    fnRef.setAttribute("href", fnRef.getAttribute("href").replace("fn", "sn"));
  });
}

function linkRefsToFootnotes() {
  footnoteRefs().forEach((fnRef) => {
    fnRef.setAttribute("href", fnRef.getAttribute("href").replace("sn", "fn"));
  });
}

const sidenoteCallback = () => {
  // no sidenotes if in a popup
  const windowURL = new URL(window.location);
  if (windowURL.searchParams.has("popup")) {
    return;
  }

  // get the sidenotes
  const sidenotes = createSidenotes();

  // create the sidenote list
  const sidenoteList = document.createElement("ol");
  sidenoteList.classList.add("sidenoteList");

  // add sidenotes to the list
  sidenotes.forEach((sn) => {
    if (!elementIsOnPage(sn)) {
      sidenoteList.appendChild(sn);
    }
  });

  // add the sidenote list to the aside
  document.querySelector("body > aside").append(sidenoteList);

  // create a resize observer which lays out sidenotes
  const observer = new ResizeObserver(() => {
    layoutSidenotes(sidenotes);
  });

  const layoutWhenLargeEnough = (() => {
    let largeEnough = false;
    return () => {
      const nowLargeEnough = window.innerWidth > MIN_WINDOW_SIZE_WITH_FN;
      if (nowLargeEnough !== largeEnough) {
        largeEnough = nowLargeEnough;
        if (nowLargeEnough) {
          layoutSidenotes(sidenotes);
          subscribeResizeObserver(observer);
          linkRefsToSidenotes();
        } else {
          unSubscribeResizeObserver(observer);
          linkRefsToFootnotes();
        }
      }
    };
  })();

  layoutWhenLargeEnough();
  window.addEventListener("resize", layoutWhenLargeEnough);
};

if (!DISABLED) {
  if (document.readyState !== "loading") {
    sidenoteCallback();
  } else {
    window.addEventListener("DOMContentLoaded", () => sidenoteCallback());
  }
}
