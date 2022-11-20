import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({ quote, getNewValues, backgroundObject, ColorObject }) => {

  return (
    <article className='quoteBox'>
      <p style={ColorObject} >{quote.quote}</p>
      <h4 style={ColorObject}>{quote.author}</h4>
      <section className='quoteBox-footer'>
        <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject} />
        <i style={ColorObject} className='bx bxs-quote-alt-left'></i>
      </section>

    </article>
  )
}

export default QuoteBox
