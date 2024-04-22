uniform float uPositionFrequency;
uniform float uStrenght;
uniform float uWarpFrequency;
uniform float uWarpStrenght;
uniform float uTime;
uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;


varying vec3 vPosition;
varying float vUpDot;






#include ../includes/simplexNoise2d.glsl


float getElevation (vec2 position)
{

    


    vec2 warpedPosition = position;
    warpedPosition += uTime * 0.2;
    warpedPosition += simplexNoise2d(warpedPosition * uPositionFrequency * uWarpFrequency) * uWarpStrenght;



    float elevation = 0.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency      ) / 2.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 2.0) / 4.0;
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 4.0) / 8.0 ;

    float elevationSign = sign(elevation);
    
    elevation = pow(abs(elevation), 2.0) * elevationSign;
    elevation *= uStrenght;

    return elevation;
}




void main()
{

    //neighbours positions

    float shift = 0.01;
    vec3 positionA = position  + vec3( shift, 0.0, 0.0);
    vec3 positionB = position  + vec3(0.0, 0.0, -shift);


    //elevation 
    float elevation = getElevation(csm_Position.xz);
    csm_Position.y += elevation;

    positionA.y = getElevation(positionA.xz);
    positionB.y = getElevation(positionB.xz);

    //compute normal

    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);

    //cross product

    csm_Normal = cross(toA, toB);


    //varying

    vPosition = csm_Position;
    vPosition.xz += uTime * 0.2;
    vUpDot = dot(csm_Normal, vec3(0.0, 1.0, 0.0));





}