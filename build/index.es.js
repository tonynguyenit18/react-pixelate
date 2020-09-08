import React, { useRef, useEffect } from 'react';

var ImagePixelated = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, _b = _a.pixelSize, pixelSize = _b === void 0 ? 1 : _b, centered = _a.centered, fillTransparencyColor = _a.fillTransparencyColor;
    var canvasRef = useRef();
    useEffect(function () {
        pixelate({
            src: src,
            width: width,
            height: height,
            pixelSize: pixelSize,
            centered: centered,
            fillTransparencyColor: fillTransparencyColor
        });
    }, [src, width, pixelSize, centered, fillTransparencyColor]);
    var pixelate = function (_a) {
        var src = _a.src, width = _a.width, height = _a.height, _b = _a.pixelSize, pixelSize = _b === void 0 ? 1 : _b, centered = _a.centered, fillTransparencyColor = _a.fillTransparencyColor;
        // create img that will be later painted into the canvas
        var img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        // once image is loaded..
        img.onload = function () {
            var canvas = canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current;
            if (canvas) {
                var ctx = canvas.getContext("2d");
                img.width = width ? width : img.width;
                img.height = height ? height : img.height;
                canvas.width = img.width;
                canvas.height = img.height;
                // we paint the image into the canvas
                // this is needed to get RGBA info out of each pixel
                ctx.drawImage(img, 0, 0, img.width, img.height);
                paintPixels(ctx, img, pixelSize, centered, fillTransparencyColor);
                img = undefined;
            }
        };
    };
    var paintPixels = function (ctx, img, pixelSize, centered, fillTransparencyColor) {
        if (!isNaN(pixelSize) && pixelSize > 0) {
            for (var x = 0; x < img.width + pixelSize; x += pixelSize) {
                for (var y = 0; y < img.height + pixelSize; y += pixelSize) {
                    var xColorPick = x;
                    var yColorPick = y;
                    if (x >= img.width) {
                        xColorPick = x - (pixelSize - (img.width % pixelSize) / 2) + 1;
                    }
                    if (y >= img.height) {
                        yColorPick = y - (pixelSize - (img.height % pixelSize) / 2) + 1;
                    }
                    var rgba = ctx.getImageData(xColorPick, yColorPick, 1, 1).data;
                    // TODO: add support for png transparent background
                    // need to create another canvas and duplicate process?
                    // one canvas to get the data from
                    // one to paint pixels into
                    ctx.fillStyle =
                        rgba[3] === 0
                            ? fillTransparencyColor
                            : "rgba(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + "," + rgba[3] + ")";
                    if (centered) {
                        ctx.fillRect(Math.floor(x - (pixelSize - (img.width % pixelSize) / 2)), Math.floor(y - (pixelSize - (img.height % pixelSize) / 2)), pixelSize, pixelSize);
                    }
                    else {
                        ctx.fillRect(x, y, pixelSize, pixelSize);
                    }
                }
            }
        }
    };
    return React.createElement("canvas", { ref: canvasRef });
};

export { ImagePixelated };
//# sourceMappingURL=index.es.js.map
