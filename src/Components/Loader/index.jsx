import React from 'react';
import './loader.scss';

function Loader() {
    return (
        <section className="loader">
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </section>
    )
}

export default Loader;