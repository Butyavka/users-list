import React, {useEffect, useState, memo, useRef} from 'react';

const Item = ({ name, surname, callback, isLast, delay }) => {
  const [hidden, setHidden] = useState(true)
  const [allReady, setAllReady] = useState(false)
  const observer = useRef(null)
  const element = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setHidden(false)

      if (isLast) setAllReady(true)
    }, delay * 100)
  }, [])

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    if (isLast) {
      const observerCallback = (entries) => {
        if (entries[0].isIntersecting && allReady) {
          callback()
        }
      }

      observer.current = new IntersectionObserver(observerCallback)
      observer.current.observe(element.current)
    }
  }, [allReady])

  return (
    <div ref={element} className={ hidden ? 'list-item list-item--hidden' : 'list-item' }>
      {`${name} ${surname}`}
    </div>
  );
};

export default memo(Item);