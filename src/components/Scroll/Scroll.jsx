import React, { useCallback, useEffect, useState, useRef } from 'react'

import './style.scss'

export default function Scroll({
  children, url,
}) {
  const limit = 10
  const [maxPage, setMaxPage] = useState()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const ref = useRef()

  const fetchData = useCallback(() => {
    fetch(`${url}/${page}/${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setMaxPage(st => {
          if (st) {
            return st
          }

          return res.pagination.total / limit
        })
        setData(st => [...st, ...res.list])
      })
  }, [url, page])

  const onScroll = useCallback(() => {
    const timeoutKey = 'scroll-timeout-key'
    clearTimeout(window[timeoutKey])

    window[timeoutKey] = setTimeout(() => {
      const el = ref.current
      if (el.scrollTop + el.offsetHeight === el.scrollHeight) {
        console.log(maxPage);
        setPage(st => {
          const nextPage = st + 1

          if (nextPage <= maxPage) {
            return nextPage
          }

          return st
        })
      }
    }, 500)
  }, [maxPage])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (ref.current) {
      const el = ref.current
      el.addEventListener("scroll", onScroll)

      return () =>  {
        el.removeEventListener("scroll", onScroll)
      }
    }
  }, [ref.current, onScroll])

  return (
    <div ref={ref} className="scroll">
      {children(data)}
    </div>
  )
}
