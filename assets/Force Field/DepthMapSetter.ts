import { _decorator, Component, director, MeshRenderer, Node, RenderTexture } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DepthMapSetter')
export class DepthMapSetter extends Component {

    @property(RenderTexture)
    renderTexure: RenderTexture;

    @property
    samplerName: string = '';

    start() {
        let material = this.node.getComponent(MeshRenderer).sharedMaterial;
        material.setProperty(this.samplerName,this.renderTexure.window.framebuffer.depthStencilTexture);
        let pass0 = material.passes[0];
        let bindingIndex = pass0.getBinding(this.samplerName);
        pass0.bindSampler(bindingIndex,director.root.pipeline.globalDSManager.pointSampler);
    }
}


