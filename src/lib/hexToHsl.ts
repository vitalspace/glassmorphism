const hexToHSL = (hex: string) => {

    // Remove the '#' symbol if present
    hex = hex.replace('#', '');

    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Find the maximum and minimum values for RGB channels
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate lightness and saturation
    const lightness = (max + min) / 2;
    let saturation = 0;

    if (max !== min) {
        saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }

    // Calculate hue
    let hue = 0;

    if (max === r) {
        hue = ((g - b) / (max - min)) % 6;
    } else if (max === g) {
        hue = (2 + (b - r) / (max - min)) % 6;
    } else {
        hue = (4 + (r - g) / (max - min)) % 6;
    }

    hue = Math.round(hue * 60);

    if (hue < 0) {
        hue += 360;
    }

    // Round the values and return as an HSL string
    return `hsl(${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%)`;
}

export { hexToHSL }
