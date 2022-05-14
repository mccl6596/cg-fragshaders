#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 rgb = texture(image, texcoord).rgb;

    vec3 rgb_left = texture(image, texcoord-vec2(2.0*(1.0/width), 0.0)).rgb;
    float sum = rgb_left.x + rgb_left.y + rgb_left.z;
    if(sum > 2.5) {
        rgb_left = vec3(.05, .05, 0.05);
    } if(sum > 2.0 && sum < 2.5) {
        rgb_left = vec3(.1, .1, 0.10);
    } if (sum > 1.2 && sum < 2.0 ) {
        rgb_left = vec3(0.25, 0.25, .25);
    } if (0.4 > sum ) {
        rgb_left = vec3(.7, .7, 0.70);
    } if (sum < 1.2 && sum > .8 ) {
        rgb_left = vec3(.5, .5, 0.50);
    } if (sum < .8 && sum > .4 ) {
        rgb_left = vec3(.6, .6, 0.60);
    }

    vec3 rgb_right = texture(image, texcoord+vec2(2.0*(1.0/width), 0.0)).rgb;
    sum = rgb_right.x + rgb_right.y + rgb_right.z;
    if(sum > 2.5) {
        rgb_right = vec3(.05, .05, 0.05);
    } if(sum > 2.0 && sum < 2.5) {
        rgb_right = vec3(.1, .1, 0.10);
    } if (sum > 1.2 && sum < 2.0 ) {
        rgb_right = vec3(0.25, 0.25, .25);
    } if (0.4 > sum ) {
        rgb_right = vec3(.7, .7, 0.70);
    } if (sum < 1.2 && sum > .8 ) {
        rgb_right = vec3(.5, .5, 0.50);
    } if (sum < .8 && sum > .4 ) {
        rgb_right = vec3(.6, .6, 0.60);
    }


    sum = rgb.x + rgb.y + rgb.z;
    if(sum > 2.5) {
        rgb = vec3(.05, .05, 0.05);
    } if(sum > 2.0 && sum < 2.5) {
        rgb = vec3(.1, .1, 0.10);
    } if (sum > 1.2 && sum < 2.0 ) {
        rgb = vec3(0.25, 0.25, .25);
    } if (0.4 > sum ) {
        rgb = vec3(.7, .7, 0.70);
    } if (sum < 1.2 && sum > .8 ) {
        rgb = vec3(.5, .5, 0.50);
    } if (sum < .8 && sum > .4 ) {
        rgb = vec3(.6, .6, 0.60);
    }
   
    rgb = (rgb + rgb_left + rgb_right)/3.0;
    
	FragColor = vec4(rgb, 1.0);
    
}
