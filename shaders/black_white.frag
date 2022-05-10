#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 matColor = texture(image, texcoord).rgb;
    float BaW = 0.299 * matColor.x + 0.587 * matColor.y + 0.114 * matColor.z;
    FragColor = vec4(BaW, BaW, BaW, 1.0);
}
