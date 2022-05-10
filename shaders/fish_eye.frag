#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 tex = texcoord * 2.0 - 1.0;
    float theta = atan(tex.y, tex.x);
    float radius = pow(length(tex),1.5);
    vec2 finalTex = vec2(radius*cos(theta), radius*sin(theta));
    FragColor = texture(image, finalTex);

}
