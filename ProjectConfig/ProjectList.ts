const returnProject = (name: string, description: string, imgPath: string = '', href: string = '/'): Record<string, string> => {
  return {
    name: name,
    description: description,
    imgPath: imgPath,
    href: href
  }
}

export const ProjectList: Array<Record<string, any>> = [
  returnProject(
    'WASM Draw',
    'Drawing web app that uses C++ and WebAssembly to render the canvas, with WebSocket support for real-time collaborative drawing between clients.',
    'wasmdraw.svg',
    'https://wasm-draw.art'
  ),
  returnProject(
    'ResumeTailor',
    'Resume builder that leverages AI to help you create a resume that gets more responses.',
    'resumetailor.svg',
    'https://resume-tailor-eta.vercel.app/'
  ),
  returnProject(
    'Self Driving Car',
    'Self driving car that uses IR and ultrasonic sensors to navigate a road with obstacles.',
    'car.svg',
    'https://github.com/gurvir-dhillon1/self-driving-car'
  ),
];