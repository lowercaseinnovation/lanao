import React from 'react';

import SearchBar from '../components/SearchBar';
import SampleListResult from '../components/SampleListResult';

function Home() {
    return(
        <main>
            <SearchBar />
            <h1>Data Sets</h1>
            <div className="Content-Wrapper">
                <SampleListResult />
                <SampleListResult />
                <SampleListResult />
                <SampleListResult />
                <SampleListResult />
            </div>
        </main>
    )
}

export default Home;