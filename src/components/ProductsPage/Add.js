import { useState, useEffect } from "react";

function Add(props) {
  const [good, setGood] = useState(false);

  useEffect(() => {
    if (props.isSize === true && props.isQuantity === true) {
      setGood(true)
    } else {
      setGood(false)
    }
  }, [props.isSize, props.isQuantity, good])

  const className = good ? 'add' : 'add nogo';

  return (
    <button onClick={props.add} className={className}>Add to Cart</button>
  )
}

export default Add