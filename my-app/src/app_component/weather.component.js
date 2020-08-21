import React from 'react'

const Weather = (props) => {
  return (
    <div className="container">
      <div className="card0">
        <h1> Today </h1>
        <h5 className='py-4'>
          <i className={`wi ${props.icon0} display-1`} />
        </h5>
        <h1 className="py-2">{props.temp0}&deg;</h1>
        <h3>Low &nbsp; &nbsp; High</h3>
        {minmaxTemp(props.min0, props.max0)}
        <h4 className='py-3'>{props.des0}</h4>
      </div>
      <div className="card1">
        <h1> Tomorrow </h1>
        <h5 className='py-4'>
          <i className={`wi ${props.icon1} display-1`} />
        </h5>
        <h1 className="py-2">{props.temp1}&deg;</h1>
        <h3>Low &nbsp; &nbsp; High</h3>
        {minmaxTemp(props.min1,props.max1)}
        <h4 className='py-3'>{props.des1}</h4>
      </div>
      <div className="card2">
        <h1> Day 3 </h1>
        <h5 className='py-4'>
          <i className={`wi ${props.icon2} display-1`} />
        </h5>
        <h1 className="py-2">{props.temp2}&deg;</h1>
        <h3>Low &nbsp; &nbsp; High</h3>
        {minmaxTemp(props.min2,props.max2)}
        <h4 className='py-3'>{props.des2}</h4>
      </div>
      <div className="card3">
        <h1> Day 4 </h1>
        <h5 className='py-4'>
          <i className={`wi ${props.icon3} display-1`} />
        </h5>
        <h1 className="py-2">{props.temp3}&deg;</h1>
        <h3>Low &nbsp; &nbsp; High</h3>
        {minmaxTemp(props.min3,props.max3)}
        <h4 className='py-3'>{props.des3}</h4>
      </div>
      <div className="card4">
        <h1> Day 5 </h1>
        <h5 className='py-4'>
          <i className={`wi ${props.icon4} display-1`} />
        </h5>
        <h1 className="py-2">{props.temp4}&deg;</h1>
        <h3>Low &nbsp; &nbsp; High</h3>
        {minmaxTemp(props.min4,props.max4)}
        <h4 className='py-3'>{props.des4}</h4>
      </div>
    </div>
  );
}

function minmaxTemp(min,max){
  return <h3>
    <span className="px-4">{min}&deg;</span>
    <span className="px-4">{max}&deg;</span>
  </h3>
}

export default Weather;