/**
 * Determine if the passed in element is visible in the viewport.
 *
 * @param   {Object}  element                The node we're targetting.
 * @param   {Number}  topOffset.optional     The top offset of the window.
* @param    {Number}  bottomoffset.optional  The top offset of the window.
 *
 * @return  {Booelean}                    A boolean to denote if the element
 *                                        visible in the viewport.
 */
export const isElementVisible = (element, topOffset = 0, bottomOffset = 0) => {
    const rect = element?.getBoundingClientRect();
    // adding 150 allows the element container to paritally be in view before the
    // animation begins.
    const topOfElement = rect.top + topOffset;
    const bottomOfElement = rect.bottom + bottomOffset;

    return topOfElement < window.innerHeight && bottomOfElement >= 0;
}