// @ts-nocheck
const METADATA = {
	website: "https://shapez.mod.io/displays-on-wire-layer",
	author: "nabbydude",
	name: "Displays on Wire Layer",
	version: "1.0.1",
	id: "wire-display",
	description: "Redraws display results over the wires overlay so they're easy to see",
	minimumGameVersion: ">=1.5.0",
	doesNotAffectSavegame: true,
};

const MapChunkView = ({ $old }) => ({
	drawWiresForegroundLayer(parameters) {
		$old.drawWiresForegroundLayer.call(this, parameters);
		const systems = this.root.systemMgr.systems;
		systems.display.drawChunk(parameters, this);
	},
});

const MetaDisplayBuilding = () => ({
	getRenderPins() { return false; },
});

class Mod extends shapez.Mod {
	init() {
			this.modInterface.extendClass(shapez.MapChunkView, MapChunkView);
			this.modInterface.extendClass(shapez.MetaDisplayBuilding, MetaDisplayBuilding);
	}
}
