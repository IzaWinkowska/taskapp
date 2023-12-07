const ProgressBar = ({ progress }) =>  {

  const colors = [
    '#89c2d9',
    '#f2edc2',
    '#facff7',
    '#fabdb4',
    '#65b6db',
    '#FFEFD5',
    '#bdb280',
    '#93cacc',
    '#184e77',
    '#7a9c73',
    '#d9ed92',
    '#bfa484',
    '#1a759f',
    '#c9908f',
    '#ffafa3',
    '#7b91c7',
    '#665850',
    '#FFE4B5',
    '#FFDAB9'
  ]

  const randomFirstColor = colors[Math.floor(Math.random() * colors.length)]
  const randomSecondColor = colors[Math.floor(Math.random() * colors.length)]
  const randomThirdColor = colors[Math.floor(Math.random() * colors.length)]
  
    return (
      <div className="bar-container">
        <div className="outer-bar">
          <div className="inner-bar"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(to right, ${randomFirstColor} 0%, ${randomSecondColor} 50%, ${randomThirdColor} 100%)`
            }}
          />
        </div>
      </div>
    )
  }
  
  export default ProgressBar