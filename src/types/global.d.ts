/// <reference types="next" />
/// <reference types="next/image-types" />
/// <reference types="react-dom" />

export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
	export const MeshLineGeometry: any;
	export const MeshLineMaterial: any;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			meshLineGeometry: any;
			meshLineMaterial: any;
		}
	}
}
