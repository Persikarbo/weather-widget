export const requireAllSvgFiles = () => {
    const requireContext = require.context('/assets/icons', false, /\.svg$/);
    return requireContext.keys().map(requireContext);
}