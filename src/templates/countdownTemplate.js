import React, { useState, useEffect } from "react"

import { PageWrapper } from "../components/Page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"

import "./countdown.css"

export default function Template() {
  const SEC_IN_MILLIS = 1000
  const MIN_IN_SEC = 60

  const urlParams = new URLSearchParams(window.location.search)
  const currentTimestamp = new Date().getTime()
  const targetTimestamp = urlParams.get("timestamp") || currentTimestamp
  const delta = (targetTimestamp - currentTimestamp) / SEC_IN_MILLIS

  const [counter, setCounter] = useState(delta)

  useEffect(() => {
    setTimeout(() => setCounter(counter - 1), SEC_IN_MILLIS)
  }, [counter])

  const seconds = num => `${Math.round(num % MIN_IN_SEC)}`.padStart(2, "0")
  const minutes = num => Math.ceil(num / MIN_IN_SEC)
  const format = num => `${minutes(num)}:${seconds(num)}`

  return (
    <PageWrapper title="Countdown" fullWitdh={true} hideFlameconBanner>
      <div className="flame-logo-wrapper">
        <div className="flame-logo-inner countdown">
          <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
          <p>{format(counter)}</p>
        </div>
      </div>
    </PageWrapper>
  )
}