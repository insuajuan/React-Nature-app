import React from 'react'

export default function Rating(props) {
    const { rating, numReviews } = props;
    return (
        <div className="rating">
            <div>
                { rating >= 1 ? <span className="iconify star" data-icon="ic:baseline-star"></span>: <span class="iconify star-empty" data-icon="ic:baseline-star-border"></span> }
                { rating >= 2 ? <span className="iconify star" data-icon="ic:baseline-star"></span>: <span class="iconify star-empty" data-icon="ic:baseline-star-border"></span> }
                { rating >= 3 ? <span className="iconify star" data-icon="ic:baseline-star"></span>: <span class="iconify star-empty" data-icon="ic:baseline-star-border"></span> }
                { rating >= 4 ? <span className="iconify star" data-icon="ic:baseline-star"></span>: <span class="iconify star-empty" data-icon="ic:baseline-star-border"></span> }
                { rating >= 5 ? <span className="iconify star" data-icon="ic:baseline-star"></span>: <span class="iconify star-empty" data-icon="ic:baseline-star-border"></span> }
            </div>
            <span>{numReviews + ' reviews'}</span>
        </div>
    )
}
