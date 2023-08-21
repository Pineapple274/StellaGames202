class PhongMaterial extends Material {
    constructor(color, colormMap, specular, intensity) {
        let textureSample = 0;

        if(colormMap != null) {
            textureSample = 1;
            super({
                'uTextureSample': {type:'1i', value: textureSample },
                'uSample' : { type: 'texture', value: colormMap },
                'uKd': {type:'3fv', value: color },
                'uKs': {type:'3fv', value: specular },
                'uLightIntensity': {type:'1f', value: intensity }
            }, [], PhongVertexShader , PhongFragmentShader);
        } else {
            //console.log(color);
            super({
                'uTextureSample': {type:'1i', value: textureSample },
                'uKd': {type:'3fv', value: color },
                'uKs': {type:'3fv', value: specular },
                'uLightIntensity': {type:'1f', value: intensity }
            }, [], PhongVertexShader , PhongFragmentShader);
        }
    }
}