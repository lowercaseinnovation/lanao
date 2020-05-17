import React from 'react';
import '../styles/DataSetPage.css';

function DataSetPage() {
    return (
        <main className="Data-Set-Page">
            <div className="SideBar">
                <div className="Inside">
                    Side Bar
                </div>
            </div>
            <div className="MainInformation">
                <div className="Inside">
                    <h1>Data Set Title</h1>
                    <h2 className="Source">Source</h2>
                    <span className="Date">Date Uploaded: </span>
                    <span className="Date">Date Updated: </span>
                    <h5>endpoint</h5>
                    <div>
                    Lorem Ipsum
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </div>
                    <div>
                        Comments
                    </div>
                    <div>
                        Object Structure
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DataSetPage;