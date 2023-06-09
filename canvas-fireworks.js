(() => {
    const canvas = document.getElementById('canvas-fireworks');
    const context = canvas.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const position = {
        mouseX: 0,
        mousey: 0,
        anchorX: 0,
        anchorY: 0,
    };

    const drawAnchor = () => {
        positions.anchorX = width / 2;
        positions.anchorY = height * 0.9;

        context.clearReact(0, 0, width, height);

        context.save();

        context.translate(position.anchorX, position.anchorY);
        context.restore();
    };

})();