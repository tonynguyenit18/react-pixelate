import React, { useRef, useEffect } from "react"

export type ImagePixelatedProps = {
  src: string
  width?: number
  height?: number
  pixelSize?: number
  centered?: boolean
  fillTransparencyColor?: string
}

export const ImagePixelated = ({
  src,
  width,
  height,
  pixelSize = 1,
  centered,
  fillTransparencyColor
}: ImagePixelatedProps) => {
  const canvasRef = useRef<HTMLCanvasElement>()
  useEffect(() => {
    pixelate({
      src,
      width,
      height,
      pixelSize,
      centered,
      fillTransparencyColor
    })
  }, [src, width, pixelSize, centered, fillTransparencyColor])
  const pixelate = ({
    src,
    width,
    height,
    pixelSize = 1,
    centered,
    fillTransparencyColor
  }: ImagePixelatedProps) => {
    // create img that will be later painted into the canvas
    let img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src
    // once image is loaded..
    img.onload = () => {
      const canvas: HTMLCanvasElement = canvasRef?.current
      if (canvas) {
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
        img.width = width ? width : img.width
        img.height = height ? height : img.height
        canvas.width = img.width
        canvas.height = img.height
        // we paint the image into the canvas
        // this is needed to get RGBA info out of each pixel
        ctx.drawImage(img, 0, 0, img.width, img.height)
        paintPixels(ctx, img, pixelSize, centered, fillTransparencyColor)
        img = undefined
      }
    }
  }
  const paintPixels = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    pixelSize?: number,
    centered?: boolean,
    fillTransparencyColor?: string
  ) => {
    if (!isNaN(pixelSize) && pixelSize > 0) {
      for (let x = 0; x < img.width + pixelSize; x += pixelSize) {
        for (let y = 0; y < img.height + pixelSize; y += pixelSize) {
          let xColorPick = x
          let yColorPick = y

          if (x >= img.width) {
            xColorPick = x - (pixelSize - (img.width % pixelSize) / 2) + 1
          }
          if (y >= img.height) {
            yColorPick = y - (pixelSize - (img.height % pixelSize) / 2) + 1
          }

          const rgba = ctx.getImageData(xColorPick, yColorPick, 1, 1).data
          // TODO: add support for png transparent background
          // need to create another canvas and duplicate process?
          // one canvas to get the data from
          // one to paint pixels into
          ctx.fillStyle =
            rgba[3] === 0
              ? fillTransparencyColor
              : `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`

          if (centered) {
            ctx.fillRect(
              Math.floor(x - (pixelSize - (img.width % pixelSize) / 2)),
              Math.floor(y - (pixelSize - (img.height % pixelSize) / 2)),
              pixelSize,
              pixelSize
            )
          } else {
            ctx.fillRect(x, y, pixelSize, pixelSize)
          }
        }
      }
    }
  }
  return <canvas ref={canvasRef} />
}
