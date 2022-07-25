import { useEffect, useState } from "react";

function Sizes(props) {
  const [className, setClassName] = useState('size')

  useEffect(() => {
    if (props.item[props.size] === 0) {
      setClassName('size sold-out')
    } else {
      if (props.selectedSize === props.size) {
        setClassName('size in-stock selected')
      } else {
        setClassName('size in-stock')
      }
    }
  })

  return(
    <div onClick={props.select} className={className}>{props.size}</div>
  );
}

export default Sizes