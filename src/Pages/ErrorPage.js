import React from 'react'
import ManNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return (
    <>
    <ManNavigation/>
    <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
    </main>
    </>
  )
}

export default ErrorPage