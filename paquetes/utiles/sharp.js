const sharp = require("sharp");

sharp("e-commerce-logo.png").resize(80).grayscale().toFile("resized-logo.png");
