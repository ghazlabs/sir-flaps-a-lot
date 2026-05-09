import { GAME_COLORS, GAME_HEIGHT, GAME_WIDTH } from "../game.js";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    this.cameras.main.setBackgroundColor(GAME_COLORS.sky);
    const wrapWidth = GAME_WIDTH - 48;

    this.add
      .text(GAME_WIDTH / 2, 160, "Sir Flaps-a-Lot", {
        fontSize: "44px",
        fontStyle: "bold",
        color: "#f8fafc",
        wordWrap: { width: wrapWidth, useAdvancedWrap: true }
      })
      .setOrigin(0.5);

    this.add
      .text(GAME_WIDTH / 2, 265, "A Most Noble Flapping Tournament", {
        fontSize: "21px",
        color: "#d4af37",
        align: "center",
        wordWrap: { width: wrapWidth, useAdvancedWrap: true }
      })
      .setOrigin(0.5);

    this.add
      .text(
        GAME_WIDTH / 2,
        GAME_HEIGHT / 2 + 30,
        "Tap/click or press SPACE to flap\nAvoid castle gates\nSurvive as long as thou canst",
        {
          fontSize: "20px",
          color: "#e2e8f0",
          align: "center",
          lineSpacing: 10,
          wordWrap: { width: wrapWidth, useAdvancedWrap: true }
        }
      )
      .setOrigin(0.5);

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT - 100, "Tap or SPACE to begin", {
        fontSize: "22px",
        color: "#f8fafc",
        wordWrap: { width: wrapWidth, useAdvancedWrap: true }
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => this.scene.start("GameScene"));
    this.input.keyboard.once("keydown-SPACE", () => this.scene.start("GameScene"));
  }
}
