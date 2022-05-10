#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 matColor = texture(image, texcoord).rgb;
    matColor.x = round(matColor.x*4.0)/4.0;
    matColor.y = round(matColor.y*4.0)/4.0;
    matColor.z = round(matColor.z*4.0)/4.0;
    FragColor = vec4(matColor, 1.0);
}
