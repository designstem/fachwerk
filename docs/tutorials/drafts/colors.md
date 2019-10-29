## Using colors

### System colors

<f-colors r="65" :colors="colors()" />

### System colors, colorblindness-adjusted

<f-colors r="65" :colors="colors().map(c => colorblind(color(c)))" />
