/**
 * The "querySelectorAll" function wrapped in a try catch statement.
 * It was wrapped in a try catch because querySelectorAll throws and error if a valid
 * match is not found.
 * @param {Element} context - The DOM Element that querySelectorAll will be called on.
 * @param {string} statement - A standart CSS selector.
 */
const selectElement = (context, statement) => {
  try {
    return [].slice.call(context.querySelectorAll(statement))
  } catch (err) {
    return []
  }
}

/**
 * Evaluates standard CSS selectors and "@" selectors.
 * @param {Element} element - The DOM Element that the selectors will be matched against.
 * @param {string} selector - A standard CSS selector or "@" selector
 * @returns {}
 */
const validateSelector = (element, selector) => {
  const isAttributeSelector = /^@.+=.+/

  if (isAttributeSelector.test(selector)) {
    const [attribute, regex] = selector.replace(/^@/, '').split(/=/)
    const tester = new RegExp(regex)

    if (tester.test(String(element[attribute]))) {
      return element
    }

    return null
  }

  return selectElement(element, selector)[0]
}

/**
 * Evaluates a selector split on the "&" selector.
 * @param {Element} element - The DOM Element that the selectors will be matched against.
 * @param {string[]} testSelectors - An array of selectors split on "&".
 * @returns {boolean} - True if the selector is valid.
 */
const validateSelectorArray = (element, testSelectors) => {
  if (element && testSelectors.length === 0) {
    return true
  }

  const [firstSelector, ...trimmedSelector] = testSelectors
  const testElement = validateSelector(element, firstSelector)

  if (testElement) {
    return validateSelectorArray(testElement, trimmedSelector)
  }

  return false
}

/**
 * A function used to evaluate selectors split on the "|" selector.
 * @param {string[]} selectors - A selector that was split on "|".
 * @returns {Element||null[]} - An array containing either a DOM element or a null value.
 */
const evaluateSelectors = (selectors) => {
  const [firstSelector, ...trimmedSelectors] = selectors.split(/&/).filter(e => e !== '')
  const rootElements = selectElement(document, firstSelector)
  const validElements = rootElements
    .filter(element => validateSelectorArray(element, trimmedSelectors))

  return validElements[0]
}

/**
 * A helper function for getting a reference to a page elements based on CSS selectors
 * or Tour Guide's exetended CSS selectors. For more information on how Tour Guide extends
 * CSS selectors visit the [CSS Selctor Documentation](https://git.corp.adobe.com/OMEGA/tour_guide#css-selectors).
 * @param {string} selector - A CSS selector or Tour Guide selector.
 * @returns {Element||null} - A reference to the DOM element matching the selctor.
 */
const getTargetElement = (selector) => {
  if (!selector) return null

  const splitSelectors = selector.split(/\|/)
  const evaluatedStatements = splitSelectors.map(evaluateSelectors)

  return evaluatedStatements.find(e => e !== undefined)
}

export default getTargetElement
